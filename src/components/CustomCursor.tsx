import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: ${theme.colors.accentCyan};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
`;

const CursorOutline = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 240, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
  transition: width 0.2s, height 0.2s, background-color 0.2s;
  left: ${(props) => props.$x}px;
  top: ${(props) => props.$y}px;

  &:hover {
    width: 60px;
    height: 60px;
    background-color: rgba(0, 240, 255, 0.05);
  }
`;

const GlowEffect = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    600px circle at ${(props) => props.$x}px ${(props) => props.$y}px,
    rgba(0, 71, 255, 0.15),
    transparent 40%
  );
`;

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <CursorDot style={{ left: mousePosition.x, top: mousePosition.y }} />
      <CursorOutline $x={mousePosition.x} $y={mousePosition.y} />
      <GlowEffect $x={mousePosition.x} $y={mousePosition.y} />
    </>
  );
};

