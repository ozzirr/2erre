export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  accent,
  center = true
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  accent?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-4">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-strong)] leading-[1.05]">
          {title}{' '}
          {accent && <span className="text-display gradient-text">{accent}</span>}
        </h2>
      )}
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-[var(--color-text-soft)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
