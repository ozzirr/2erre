import Image from 'next/image';

type Client = {
  name: string;
  src?: string;
  imageClassName?: string;
};

const CLIENTS: Client[] = [
  {name: 'MS Porte', src: '/brand/white/logo-ms-porte-optimized.webp', imageClassName: 'scale-[0.85]'},
  {name: 'Olio Arsieni', src: '/brand/white/logo-olio-arsieni-optimized.webp', imageClassName: 'scale-[1.15]'},
  {name: 'Generale Elettrica', src: '/brand/white/logo-generale-elettrica-optimized.webp'},
  {name: 'Odora', src: '/brand/white/logo_odora.webp'},
  {name: 'Balance', src: '/brand/white/logo-balance.webp'},
  {name: 'Cliente 07'},
  {name: 'Cliente 08'}
];

export default function ClientsMarquee() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section data-section="clients" className="relative py-10 md:py-12 border-y border-[var(--color-line)]">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex items-center w-max">
          {loop.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="shrink-0 h-24 md:h-28 flex items-center justify-center opacity-70 hover:opacity-100 transition mr-12 md:mr-16"
              aria-hidden={i >= CLIENTS.length}
            >
              {c.src ? (
                <div className="relative h-24 w-[270px] md:h-28 md:w-[320px]">
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    sizes="320px"
                    className={`object-contain ${c.imageClassName ?? ''}`}
                  />
                </div>
              ) : (
                <span className="text-[var(--color-text-dim)] text-sm uppercase tracking-[0.2em] whitespace-nowrap">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
