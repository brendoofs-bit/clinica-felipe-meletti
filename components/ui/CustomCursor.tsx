import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      
      const hoverables = document.querySelectorAll('a, button, .cursor-hover');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', onHoverStart);
        el.addEventListener('mouseleave', onHoverEnd);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);

      const hoverables = document.querySelectorAll('a, button, .cursor-hover');
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onHoverStart = () => setHovered(true);
    const onHoverEnd = () => setHovered(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []); // Re-run if DOM changes significantly, ideally use a mutation observer but this is lightweight

  // Hide on mobile/touch devices
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Main Dot */}
      <div
        className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500 transition-all duration-300 ease-out ${
          hovered ? 'w-2 h-2' : 'w-3 h-3'
        }`}
      />
      
      {/* Outer Ring */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 border border-gold-500 rounded-full transition-all duration-500 ease-out ${
          hovered ? 'w-12 h-12 opacity-100 scale-100' : 'w-8 h-8 opacity-50 scale-100'
        }`}
      />
    </div>
  );
};

export default CustomCursor;