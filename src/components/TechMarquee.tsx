import type { SimpleIcon } from 'simple-icons';
import { brandColor } from '../utils/brandColor.ts';
import type { CSSProperties } from 'react';
import BrandIcon from './BrandIcon.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import { techRows } from '../constants';

// Each group repeats the list, so it is wider than any screen (no gap on the
// right of the loop).
const REPEATS = 3;

// Seconds for one item to cross: speed equal in both rows
const SECONDS_PER_ITEM = 4;

interface PropsMarqueeGroup {
  items: SimpleIcon[];
  hidden?: boolean;
}

const MarqueeGroup = ({ items, hidden }: PropsMarqueeGroup) => {
  return (
    <ul className="tech-marquee-group" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEATS }, (_, copy) =>
        items.map((icon) => (
          <li
            key={`${copy}-${icon.slug}`}
            className={`tech-marquee-item ${copy > 0 ? 'tech-marquee-copy' : ''}`}
            aria-hidden={copy > 0 || undefined}
            style={{ '--accent': brandColor(icon) } as CSSProperties}
          >
            <BrandIcon icon={icon} className="tech-marquee-icon" />
            <span>{icon.title}</span>
          </li>
        ))
      )}
    </ul>
  );
};

interface PropsTechMarquee {
  className?: string;
}

const TechMarquee = ({ className }: PropsTechMarquee) => {
  const { language } = useTranslation();

  return (
    <div className={`${className ?? ''} tech-marquee`}>
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      {techRows.map((row, index) => (
        <div
          key={row.id}
          className="tech-marquee-row"
          role="group"
          aria-label={row.label[language]}
        >
          <div
            className={`tech-marquee-track ${index % 2 === 1 ? 'is-reverse' : ''}`}
            style={
              {
                '--duration': `${row.items.length * REPEATS * SECONDS_PER_ITEM}s`,
              } as CSSProperties
            }
          >
            <MarqueeGroup items={row.items} />
            <MarqueeGroup items={row.items} hidden />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TechMarquee;
