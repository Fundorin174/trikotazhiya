import React from 'react';
import { FaTelegram, FaVk } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contacts" className="py-16">
    <h2 className="text-3xl font-bold mb-6 text-center">Наши Контакты</h2>
    <div className="text-center mb-4">
      <div>Телефон: <a href="tel:+79042120289" className="text-tiffany font-semibold">+7 (904) 212-02-89</a></div>
      <div>Email: <a href="mailto:trikotazhiya@yandex.ru" className="text-tiffany font-semibold">trikotazhiya@yandex.ru</a></div>
      <div>Пн–Пт: 10:00-18:00, Сб: 10:00–15:00, Вс: выходной</div>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
      <a
        href="https://t.me/trikotazhiya"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center rounded-full bg-[#229ED9]/10 p-6 shadow-lg hover:bg-[#1b7cb6] group transition-colors duration-200 min-w-[200px] text-center cursor-pointer"
      >
        <span className="btn-social text-3xl mb-2 bg-transparent group-hover:bg-transparent group-hover:text-white">
          <FaTelegram />
        </span>
        <span className="text-sm text-gray-700 font-medium group-hover:text-white transition-colors text-center">Наш канал в Telegram</span>
      </a>
      <a
        href="https://vk.com/trikotazhiya"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center rounded-full bg-[#4C75A3]/10 p-6 shadow-lg hover:bg-[#355077] group transition-colors duration-200 min-w-[200px] text-center cursor-pointer"
      >
        <span className="btn-social text-3xl mb-2 bg-transparent group-hover:bg-transparent group-hover:text-white">
          <FaVk />
        </span>
        <span className="text-sm text-gray-700 font-medium group-hover:text-white transition-colors text-center">Наш канал в VKontakte</span>
      </a>
    </div>
  </section>
);

export default ContactSection;
