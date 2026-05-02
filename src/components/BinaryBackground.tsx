import React, { useEffect, useRef, useState } from 'react';

// --- CONFIGURAÇÃO DA GRADE SÓLIDA BINÁRIA  ---
const fontSize = 32;
const spacingX = fontSize * 1.4;
const spacingY = fontSize * 1.2;

const generateStaticGrid = () => {
  const maxColumns = Math.ceil(4000 / spacingX);
  const maxRows = Math.ceil(3000 / spacingY);
  const grid: string[][] = [];
  for (let r = 0; r < maxRows; r++) {
    grid[r] = [];
    for (let c = 0; c < maxColumns; c++) {
      grid[r][c] = Math.floor(Math.random() * 2).toString();
    }
  }
  return grid;
};

const staticGrid = generateStaticGrid();

const BinaryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const columns = Math.ceil(canvas.width / spacingX);
    const rows = Math.ceil(canvas.height / spacingY);

    const draw = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px Consolas, "Monaco", monospace`;
      
      const glowRadius = 250;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          const text = staticGrid[r][c];
          const x = Math.floor(c * spacingX);
          const y = Math.floor(r * spacingY);

          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < glowRadius) {
            const opacity = 1 - (distance / glowRadius);
            ctx.fillStyle = `rgba(0, 255, 65, ${0.1 + opacity * 0.1})`; // Um pouco mais aceso
            ctx.shadowBlur = 15 * opacity; // Brilho suave que diminui com a distância
            ctx.shadowColor = '#00ff41';
          } else {
            ctx.fillStyle = 'rgba(8, 22, 12, 0.93)';
            ctx.shadowBlur = 0;
          }
          ctx.fillText(text, x, y);
        }
      }
    };

    const animationFrameId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: '#173019',
      }}
    />
  );
};

export default BinaryBackground;