import React from 'react';

const Header = () => {
  return (
    <header id="home" className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow transition-all">
      {/* TODO: Логотип, навигация, бургер-меню */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center">
          <img src="/images/logo.png" alt="Трикотажия" className="h-10 w-auto" />
        </a>
        {/* Навигация и бургер-меню */}
      </div>
    </header>
  );
};

export default Header;
