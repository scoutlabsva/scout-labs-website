/**
 * The eyebrow → heading → description block repeated at the top of most
 * sections. `className` sets the wrapper's width/layout, which differs per
 * section (a stacked intro vs. a grid column).
 */
export function SectionIntro({
  eyebrow,
  headline,
  description,
  className,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-section mt-4">{headline}</h2>
      <p className="body-copy mt-6">{description}</p>
    </div>
  );
}
