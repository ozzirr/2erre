'use client';

import {useTranslations} from 'next-intl';

type FaceDef = {
  key: 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom';
  tag: string;
  label: string;
};

export default function Cube() {
  const t = useTranslations('services.items');
  const tp = useTranslations('products.items');
  const tn = useTranslations('nav');

  const faces: FaceDef[] = [
    {key: 'front', tag: '01 / Servizi', label: t('consulting.title')},
    {key: 'right', tag: '02 / Servizi', label: t('web.title')},
    {key: 'back', tag: '03 / Servizi', label: t('apps.title')},
    {key: 'left', tag: '04 / Servizi', label: t('ai.title')},
    {key: 'top', tag: '05 / Prodotto', label: tp('qr.name')},
    {key: 'bottom', tag: '06 / Brand', label: tn('brand')}
  ];

  return (
    <div className="cube-scene">
      <div className="cube" aria-hidden>
        {faces.map((f) => (
          <div key={f.key} className={`cube-face cube-face--${f.key}`}>
            <div className="cube-tag">{f.tag}</div>
            <div className="cube-label">{f.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
