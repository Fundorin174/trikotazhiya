import React from 'react';
import { FaTelegram, FaVk } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contacts" className="py-16">
    <h2 className="text-3xl font-bold mb-6 text-center">Контакты</h2>
    <div className="text-center mb-4">
      <div>Телефон: <a href="tel:+79042120289" className="text-tiffany font-semibold">+7 (904) 212-02-89</a></div>
      <div>Email: <a href="mailto:trikotazhiya@yandex.ru" className="text-tiffany font-semibold">trikotazhiya@yandex.ru</a></div>
      <div>Пн–Пт: 10:00-18:00, Сб: 10:00–14:00, Вс: выходной</div>
    </div>
    <div className="flex justify-center gap-4">
      <a href="https://t.me/trikotazhiya" target="_blank" rel="noopener noreferrer" className="btn-social">
        <FaTelegram size={28} />
      </a>
      <a href="https://vk.com/trikotazhiya" target="_blank" rel="noopener noreferrer" className="btn-social">
        <FaVk size={28} />
      </a>
    </div>
  </section>
);

export default ContactSection;
