interface BrandMarkProps {
  light?: boolean;
}

export function BrandMark({ light = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark${light ? " brand-mark--light" : ""}`}>
      <span className="brand-mark__name">Joice</span>
      <span className="brand-mark__descriptor">
        <span aria-hidden="true" />
        Moda Modesta
        <span aria-hidden="true" />
      </span>
    </span>
  );
}
