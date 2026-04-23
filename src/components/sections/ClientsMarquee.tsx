import Image from 'next/image';

type Client = {
  name: string;
  src?: string;
  imageClassName?: string;
};

const CLIENTS: Client[] = [
  {name: 'MS Porte', src: '/brand/white/logo-ms-porte-optimized.webp', imageClassName: 'scale-[1.08]'},
  {name: 'Olio Arsieni', src: '/brand/white/logo-olio-arsieni-optimized.webp', imageClassName: 'scale-[1.42]'},
  {name: 'Generale Elettrica', src: '/brand/white/logo-generale-elettrica-optimized.webp', imageClassName: 'scale-[1.12]'},
  {name: 'Odora', src: '/brand/white/logo_odora.webp', imageClassName: 'scale-[1.08]'},
  {name: 'Cliente 05'},
  {name: 'Cliente 06'},
  {name: 'Cliente 07'},
  {name: 'Cliente 08'}
];

export default function ClientsMarquee() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section data-section="clients" className="relative py-8 md:py-10 border-y border-[var(--color-line)]">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 md:gap-14 w-max">
          {loop.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="shrink-0 h-12 md:h-[3.5rem] flex items-center justify-center opacity-70 hover:opacity-100 transition"
              aria-hidden={i >= CLIENTS.length}
            >
              {c.src ? (
                <div className="relative h-[3.1rem] w-[230px] md:h-[3.35rem] md:w-[250px]">
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    sizes="250px"
                    className={`object-contain transition-transform ${c.imageClassName ?? ''}`}
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
