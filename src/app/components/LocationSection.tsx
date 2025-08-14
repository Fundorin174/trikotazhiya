import React from 'react';

const LocationSection = () => (
  <section id="location" className="py-16">
    <h2 className="text-3xl font-bold mb-6 text-center">Где нас найти</h2>
    <address className="not-italic text-center mb-4">
      г. Воронеж, ул. Кольцовская, 68
      <br />
      <span>Пн–Пт: 10:00-18:00, Сб: 10:00–14:00, Вс: выходной</span>
    </address>
    <div className="flex justify-center">
      <iframe
        id="map_325254751"
        width="100%"
        height="400px"
        src="https://makemap.2gis.ru/widget?data=eJw1js1qw0AMhN9FvZrg9f745wFaesst0JKD4xXtwtpa1go0MX73ynark9CMvpkFKHvM6N-QRuQccIbucwF-JIQOXrHne0YoIGVKmHnXFxgoUhb9RdmbuSnROXDcPmT1OA85JA40HYfn--TxBzpV_s9awNcR-Nhwf2lnChOLfyApFaae9zK6PanGWV0XVp2cq6pWXeU_eAE6Xa7XAsY-nWkOR-ICsWfoDrMpa-20MaqxBcRN3nG1sq3VTeXa0kg_olFgtVClOcV4-UaMH_uV8x3XXzj6WXs"
        sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation">        
      </iframe>
    </div>
  </section>
);

export default LocationSection;
