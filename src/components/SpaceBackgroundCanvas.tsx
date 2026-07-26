import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SpaceBackgroundProps {
  interactive?: boolean;
}

export const SpaceBackgroundCanvas: React.FC<SpaceBackgroundProps> = ({ interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for realistic parallax depth
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
    }

    // 1. Realistic Star Field Generation
    const starCount = Math.floor((width * height) / 2200);
    const starColors = ['#ffffff', '#f8fafc', '#bae6fd', '#ddd6fe', '#fef08a', '#e0f2fe', '#c7d2fe'];
    
    const stars = Array.from({ length: starCount }, () => {
      const z = Math.random() * 2 + 0.1; // Depth factor
      const isBright = Math.random() < 0.03; // Rare bright stars with lens flare
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: isBright ? Math.random() * 1.2 + 1.4 : Math.random() * 0.8 + 0.2,
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: (Math.random() * 0.015 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        color: starColors[Math.floor(Math.random() * starColors.length)],
        hasSpikes: isBright,
      };
    });

    // 2. Realistic Shooting Stars / Meteors
    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      thickness: number;
    }
    let meteors: Meteor[] = [];

    const spawnMeteor = () => {
      const startX = Math.random() * (width + 300);
      const startY = -80;
      meteors.push({
        x: startX,
        y: startY,
        length: Math.random() * 180 + 120,
        speed: Math.random() * 14 + 16,
        angle: Math.PI / 4 + (Math.random() * 0.06 - 0.03),
        alpha: 1,
        thickness: Math.random() * 1.5 + 0.8,
      });
    };

    const meteorInterval = setInterval(() => {
      if (Math.random() < 0.45) {
        spawnMeteor();
      }
    }, 3500);

    // Offscreen Canvas Cache for Photorealistic Gas Giant Planet (Saturn-like)
    const createGasGiantTexture = (radius: number) => {
      const pCanvas = document.createElement('canvas');
      const pSize = radius * 2.8;
      pCanvas.width = pSize;
      pCanvas.height = pSize;
      const pCtx = pCanvas.getContext('2d');
      if (!pCtx) return pCanvas;

      const cx = pSize / 2;
      const cy = pSize / 2;

      // Draw Atmospheric Bands onto planet surface
      pCtx.save();
      pCtx.beginPath();
      pCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      pCtx.clip();

      // Base texture gradient
      const baseGrad = pCtx.createLinearGradient(0, cy - radius, 0, cy + radius);
      baseGrad.addColorStop(0.0, '#1e1b4b');
      baseGrad.addColorStop(0.15, '#312e81');
      baseGrad.addColorStop(0.3, '#4338ca');
      baseGrad.addColorStop(0.45, '#3730a3');
      baseGrad.addColorStop(0.6, '#1e1b4b');
      baseGrad.addColorStop(0.75, '#312e81');
      baseGrad.addColorStop(0.9, '#1e1b4b');
      baseGrad.addColorStop(1.0, '#0f172a');
      pCtx.fillStyle = baseGrad;
      pCtx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

      // Fine atmospheric stripe noise
      for (let i = -radius; i < radius; i += 2) {
        const bandRatio = (i + radius) / (radius * 2);
        const noise = Math.sin(bandRatio * Math.PI * 14) * 0.15 + Math.cos(bandRatio * Math.PI * 28) * 0.08;
        if (noise > 0) {
          pCtx.fillStyle = `rgba(199, 210, 254, ${noise * 0.35})`;
          pCtx.fillRect(cx - radius, cy + i, radius * 2, 2);
        }
      }

      // Great Storm Spot
      const spotGrad = pCtx.createRadialGradient(cx + radius * 0.2, cy + radius * 0.25, 2, cx + radius * 0.2, cy + radius * 0.25, radius * 0.3);
      spotGrad.addColorStop(0, 'rgba(165, 180, 252, 0.6)');
      spotGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.3)');
      spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pCtx.fillStyle = spotGrad;
      pCtx.beginPath();
      pCtx.ellipse(cx + radius * 0.2, cy + radius * 0.25, radius * 0.35, radius * 0.18, -0.1, 0, Math.PI * 2);
      pCtx.fill();

      // Realistic 3D Directional Lighting & Shadow Terminator
      // Light source comes from Top-Left (-0.6 rad)
      const sunAngle = -Math.PI * 0.25;
      const lx = cx + Math.cos(sunAngle) * radius * 0.6;
      const ly = cy + Math.sin(sunAngle) * radius * 0.6;

      const sphereShade = pCtx.createRadialGradient(lx, ly, radius * 0.1, cx, cy, radius * 1.05);
      sphereShade.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); // Specular highlight
      sphereShade.addColorStop(0.4, 'rgba(0, 0, 0, 0)');       // Illuminated surface
      sphereShade.addColorStop(0.75, 'rgba(2, 6, 23, 0.85)');   // Shadow terminator
      sphereShade.addColorStop(1, 'rgba(0, 0, 0, 0.98)');       // Deep night side

      pCtx.fillStyle = sphereShade;
      pCtx.beginPath();
      pCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      pCtx.fill();

      // Atmospheric Rayleigh Rim Scattering Light on Limb
      const rimGrad = pCtx.createRadialGradient(cx, cy, radius * 0.88, cx, cy, radius);
      rimGrad.addColorStop(0, 'rgba(125, 211, 252, 0)');
      rimGrad.addColorStop(0.85, 'rgba(125, 211, 252, 0.15)');
      rimGrad.addColorStop(1, 'rgba(186, 230, 254, 0.45)');
      pCtx.fillStyle = rimGrad;
      pCtx.beginPath();
      pCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      pCtx.fill();

      pCtx.restore();
      return pCanvas;
    };

    // Offscreen Canvas Cache for Photorealistic Terrestrial Exo-Earth
    const createEarthTexture = (radius: number) => {
      const pCanvas = document.createElement('canvas');
      const pSize = radius * 2.8;
      pCanvas.width = pSize;
      pCanvas.height = pSize;
      const pCtx = pCanvas.getContext('2d');
      if (!pCtx) return pCanvas;

      const cx = pSize / 2;
      const cy = pSize / 2;

      pCtx.save();
      pCtx.beginPath();
      pCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      pCtx.clip();

      // Deep Ocean Base
      const oceanGrad = pCtx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, 5, cx, cy, radius);
      oceanGrad.addColorStop(0, '#0c4a6e');
      oceanGrad.addColorStop(0.7, '#075985');
      oceanGrad.addColorStop(1, '#032b45');
      pCtx.fillStyle = oceanGrad;
      pCtx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

      // Continent landmass shapes
      pCtx.fillStyle = 'rgba(16, 185, 129, 0.35)';
      const drawLand = (x: number, y: number, r: number) => {
        pCtx.beginPath();
        pCtx.arc(cx + x, cy + y, r, 0, Math.PI * 2);
        pCtx.fill();
      };
      drawLand(-radius * 0.2, -radius * 0.1, radius * 0.4);
      drawLand(-radius * 0.3, radius * 0.2, radius * 0.3);
      drawLand(radius * 0.25, -radius * 0.3, radius * 0.35);
      drawLand(radius * 0.3, radius * 0.1, radius * 0.25);

      // Polar Ice Cap
      pCtx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      pCtx.beginPath();
      pCtx.ellipse(cx, cy - radius * 0.85, radius * 0.5, radius * 0.2, 0, 0, Math.PI * 2);
      pCtx.fill();

      // Cloud swirl layer
      pCtx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      pCtx.beginPath();
      pCtx.arc(cx - radius * 0.1, cy - radius * 0.2, radius * 0.6, 0, Math.PI * 1.3);
      pCtx.lineWidth = 12;
      pCtx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      pCtx.stroke();

      // 3D Directional Lighting Shadow
      const lx = cx - radius * 0.4;
      const ly = cy - radius * 0.4;
      const sphereShade = pCtx.createRadialGradient(lx, ly, radius * 0.1, cx, cy, radius * 1.05);
      sphereShade.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      sphereShade.addColorStop(0.45, 'rgba(0, 0, 0, 0)');
      sphereShade.addColorStop(0.8, 'rgba(3, 7, 18, 0.88)');
      sphereShade.addColorStop(1, 'rgba(0, 0, 0, 0.98)');

      pCtx.fillStyle = sphereShade;
      pCtx.beginPath();
      pCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      pCtx.fill();

      // Atmospheric Rayleigh Scattering Glow (Vibrant Blue Horizon Rim)
      const rimGrad = pCtx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius);
      rimGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      rimGrad.addColorStop(0.8, 'rgba(56, 189, 248, 0.25)');
      rimGrad.addColorStop(1, 'rgba(14, 165, 233, 0.65)');
      pCtx.fillStyle = rimGrad;
      pCtx.beginPath();
      pCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      pCtx.fill();

      pCtx.restore();
      return pCanvas;
    };

    const gasGiantRadius = Math.min(width, height) * 0.08 + 35; // ~70-95px
    const earthRadius = Math.min(width, height) * 0.05 + 20;     // ~40-60px

    const gasGiantCanvas = createGasGiantTexture(gasGiantRadius);
    const earthCanvas = createEarthTexture(earthRadius);

    // Planet positions & orbital drift states
    const planets = [
      {
        type: 'gasGiant',
        baseX: width * 0.84,
        baseY: height * 0.22,
        radius: gasGiantRadius,
        canvas: gasGiantCanvas,
        angle: 0,
        parallaxFactor: 0.035,
      },
      {
        type: 'earth',
        baseX: width * 0.12,
        baseY: height * 0.78,
        radius: earthRadius,
        canvas: earthCanvas,
        angle: Math.PI,
        parallaxFactor: 0.02,
      },
    ];

    // Main Render Loop
    let lastTime = performance.now();

    const render = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Smooth mouse interpolation for 3D parallax depth
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const mouseOffsetX = mouse.x - width / 2;
      const mouseOffsetY = mouse.y - height / 2;

      // 1. Clear with Deep Space Obsidian Black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // 2. Realistic Volumetric Deep Nebula Dust Clouds (Subtle, non-cartoonish)
      const nebula1 = ctx.createRadialGradient(
        width * 0.25 + mouseOffsetX * 0.01,
        height * 0.3 + mouseOffsetY * 0.01,
        50,
        width * 0.25,
        height * 0.3,
        width * 0.5
      );
      nebula1.addColorStop(0, 'rgba(30, 27, 75, 0.18)');  // Deep indigo
      nebula1.addColorStop(0.5, 'rgba(15, 23, 42, 0.08)');
      nebula1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(
        width * 0.75 - mouseOffsetX * 0.015,
        height * 0.7 - mouseOffsetY * 0.015,
        40,
        width * 0.75,
        height * 0.7,
        width * 0.45
      );
      nebula2.addColorStop(0, 'rgba(12, 74, 110, 0.14)');  // Deep cyan space dust
      nebula2.addColorStop(0.6, 'rgba(3, 7, 18, 0.05)');
      nebula2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // 3. Render Stars with Parallax Depth Layers
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        const renderX = star.x + mouseOffsetX * (0.008 * star.z);
        const renderY = star.y + mouseOffsetY * (0.008 * star.z);

        ctx.beginPath();
        ctx.arc(renderX, renderY, star.radius * (star.z * 0.6 + 0.4), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, star.alpha);
        ctx.fill();

        // Subtle 4-point Lens Diffraction Spikes on brightest stars
        if (star.hasSpikes && star.alpha > 0.5) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = star.alpha * 0.5;
          
          const spikeLen = star.radius * 4;
          ctx.beginPath();
          ctx.moveTo(renderX - spikeLen, renderY);
          ctx.lineTo(renderX + spikeLen, renderY);
          ctx.moveTo(renderX, renderY - spikeLen);
          ctx.lineTo(renderX, renderY + spikeLen);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      });

      // 4. Render Photorealistic Planets
      planets.forEach((planet) => {
        planet.angle += 0.0008; // Very slow majestic cosmic drift
        const px = planet.baseX + Math.cos(planet.angle) * 12 + mouseOffsetX * planet.parallaxFactor;
        const py = planet.baseY + Math.sin(planet.angle) * 8 + mouseOffsetY * planet.parallaxFactor;

        // Draw Planet Body from cached offscreen texture
        const size = planet.radius * 2.8;
        ctx.drawImage(planet.canvas, px - size / 2, py - size / 2, size, size);

        // For Gas Giant: Draw Photorealistic Rings with Cassini Gap & Planet Shadow!
        if (planet.type === 'gasGiant') {
          const pr = planet.radius;
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(-0.32); // Orbital tilt

          // Draw Photorealistic Multi-band Ring System
          const drawRing = (outerR: number, innerR: number, color: string) => {
            ctx.beginPath();
            ctx.ellipse(0, 0, outerR, outerR * 0.28, 0, 0, Math.PI * 2);
            ctx.ellipse(0, 0, innerR, innerR * 0.28, 0, Math.PI * 2, 0, true);
            ctx.fillStyle = color;
            ctx.fill();
          };

          // Main Bright Ring B
          drawRing(pr * 2.3, pr * 1.5, 'rgba(199, 210, 254, 0.35)');
          // Inner Faint Ring C
          drawRing(pr * 1.48, pr * 1.2, 'rgba(129, 140, 248, 0.18)');
          // Cassini Division Gap
          drawRing(pr * 2.38, pr * 2.3, 'rgba(0, 0, 0, 0.8)');
          // Outer Ring A
          drawRing(pr * 2.65, pr * 2.39, 'rgba(165, 180, 252, 0.22)');

          // Cast Shadow of Planet across the Ring (on the night side)
          ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
          ctx.beginPath();
          ctx.ellipse(pr * 0.3, pr * 0.1, pr * 1.1, pr * 0.35, 0.2, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      });

      // 5. Draw Shooting Stars / Meteors
      meteors = meteors.filter((m) => m.alpha > 0);
      meteors.forEach((m) => {
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.01;

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, '#38bdf8');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.thickness;
        ctx.globalAlpha = Math.max(0, m.alpha);
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
      }
      clearInterval(meteorInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  // Ambient Web Audio Cosmic Drone
  const toggleCosmicAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (isPlayingAudio) {
      ctx.suspend();
      setIsPlayingAudio(false);
    } else {
      ctx.resume().then(() => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, ctx.currentTime);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(164.81, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(280, ctx.currentTime);

        gainNode.gain.setValueAtTime(0.04, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start();
        osc2.start();
        setIsPlayingAudio(true);
      });
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      />
      {/* Sound Toggle Button */}
      <button
        onClick={toggleCosmicAudio}
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2 text-xs font-medium"
        title="Cosmic Audio Ambient"
      >
        {isPlayingAudio ? (
          <>
            <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="hidden sm:inline">Space Ambient (Active)</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Space Audio</span>
          </>
        )}
      </button>
    </>
  );
};

