import React from 'react';
import { FaTelegram, FaVk } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-[#15B4B1] text-white py-6 mt-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0 pl-4">
        <img src="/images/logo.png" alt="Трикотажия" className="h-8 w-auto mr-2" />
      </div>
      <div className="text-center md:text-right">
        <div className="mb-2">
          <a href="tel:+79042120289" className="hover:underline mr-4">+7 (904) 212-02-89</a>
          <a href="mailto:trikotazhiya@yandex.ru" className="hover:underline">trikotazhiya@yandex.ru</a>
        </div>
        <div className="flex justify-center md:justify-end gap-3 mb-2">
          <a href="https://t.me/trikotazhiya" target="_blank" rel="noopener noreferrer"><FaTelegram size={22} /></a>
          <a href="https://vk.com/trikotazhiya" target="_blank" rel="noopener noreferrer"><FaVk size={22} /></a>
        </div>
        <div className="text-xs">© 2025 Трикотажия. Все права защищены.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
