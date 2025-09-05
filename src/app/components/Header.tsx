"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#name', label: 'Главная' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#location', label: 'Адрес' },
  { href: '#contacts', label: 'Контакты' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="section-black fixed top-0 left-0 w-full z-70 backdrop-blur shadow transition-all">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#name" className="flex items-center">
          <img src="/images/logo.png" alt="Трикотажия" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-tiffany transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Бургер-меню справа, сдвигается влево при открытии меню */}
        <button
          className={`md:hidden text-2xl text-gray-800 focus:outline-none z-50 ml-auto transition-transform duration-300 ${menuOpen ? 'translate-x-[-16rem]' : ''}`}
          style={{ position: 'fixed', top: 24, right: 16 }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Мобильное меню и подложка вне flex-контейнера */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300" onClick={() => setMenuOpen(false)} />
          <div
            className={`fixed top-0 right-0 min-h-screen h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} text-tiffany overflow-y-auto`}
          >
            <nav className="flex flex-col items-center gap-8 text-lg font-semibold pt-24 pb-8 min-h-screen">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`hover:text-gold transition-colors${idx === 0 ? ' mt-8' : ''}`}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
