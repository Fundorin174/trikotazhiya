import React from 'react';

const HomeSection = () => (
  <section id="name" className="pt-24 text-center animate-fade-in">
    <span className="mt-12 block  text-xl md:text-2xl text-tiffany font-medium tracking-wide mb-2 animate-fade-in-delay">
      Добро пожаловать в магазин трикотажных полотен
    </span>
    <h1
      className="text-7xl md:text-9xl font-extrabold tracking-tight mb-4 text-gray-900 hero-title py-12 custom-title-size"
      style={{ fontFamily: 'Segoe Script, Playfair Display, cursive, serif' }}
    >
      Трикотажия
    </h1>
    <p className="text-xl md:text-2xl text-tiffany font-medium hero-slogan animate-fade-in-delay">
      Страна, где сшиваются мечты
    </p>
    <img
      src="/images/main.jpg"
      alt="Трикотажия"
      className="home-main-img mx-auto mt-12 w-[600px] h-auto max-w-full object-contain animate-fade-in-delay"
    />
  </section>
);

export default HomeSection;
