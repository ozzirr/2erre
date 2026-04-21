export default function MiniCube({label, badge}: {label: string; badge?: string}) {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="mini-cube">
        {(['front', 'right', 'back', 'left', 'top', 'bottom'] as const).map((k) => (
          <div key={k} className={`cube-face cube-face--${k}`}>
            {k === 'front' && (
              <>
                <div className="cube-tag">{badge ?? '2erre'}</div>
                <div className="cube-label !text-base">{label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
