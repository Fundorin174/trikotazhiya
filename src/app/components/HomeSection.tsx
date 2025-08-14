import React from 'react';

const HomeSection = () => (
  <section id="name" className="py-24 bg-gradient-to-b from-tiffany/10 to-white text-center animate-fade-in">
    <h1
      className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase text-gray-900 font-serif hero-title py-12"
      style={{ fontFamily: 'Playfair Display, serif' }}
    >
      Трикотажия
    </h1>
    <p className="text-xl md:text-2xl text-gray-700 font-medium hero-slogan animate-fade-in-delay">
      Страна, где сшиваются мечты
    </p>
  </section>
);

export default HomeSection;

// В styles/globals.css добавьте:
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
// .animate-fade-in { animation: fadeIn 1.2s ease 0s both; }
// .animate-fade-in-delay { animation: fadeIn 1.2s ease 0.5s both; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
