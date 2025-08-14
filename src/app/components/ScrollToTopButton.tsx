
"use client";
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 bg-[#15B4B1] text-white p-3 rounded-full shadow-xl border-2 border-white transition hover:bg-[#129e9b] z-50"
      aria-label="Наверх"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
