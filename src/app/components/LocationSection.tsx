import React from 'react';

const LocationSection = () => (
  <section id="location" className="py-24">
    <h2 className="text-3xl font-bold mb-6 text-center">Где нас найти</h2>
    <address className="not-italic text-center mb-4">
      г. Воронеж, ул. Кольцовская, 68
      <br />
      <span>Пн–Пт: 10:00-18:00, Сб: 10:00–14:00, Вс: выходной</span>
    </address>
    <div className="flex justify-center">
      <iframe id="map_4673988" frameBorder="0" width="800px" height="400px" src="https://makemap.2gis.ru/widget?data=eJxtkU1v2zAMhv-LdqxRUPV3gB0yeXOyaYWVDRi8oQcnElx1TmTITNIkyH8v7Wy36iTx5fuQIi_MeW280aVxW4PemoHN_lwYnnrDZuyLaXDvDQtY711vPE76hW1c5zzpH3i8jtacdLTYjQ74elbDoziDLBTmIgIJLXyTq_ZxvHt1wFJMGtK7zj6SVZth422P1u0IUC3md-9C6nchOdSH1fOPYtWiSMbYQQsO8m8mw_mdeHk9VigakKna5-V3qNfkFSeoF2qP4kgNDMuijiqRH6vWZZsiVU4Tuy7G-jnI-bCc-vipcKyhyyXIFzVM3pRqlp-I0YI8K9TlYuzRnj5Ptelj5-VOm1c24_D_XAPW3gZ9Gsf4b8qVszuk_I2jZdhdg9MSwvyeZ0kcpkHM75Pk4SHnT-S3moBJCNengG2bvnKDvU3uwroG2eyWDEmax3HCozhKAtaN-sRLI55CCGEYRRk16NyWaClhaQWu6349G9P9nqLo9-b6Bn54prw" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
    </div>
  </section>
);

export default LocationSection;
