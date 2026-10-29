import type { SimpleIcon } from 'simple-icons';
import { brandColor } from '../utils/brandColor.ts';
import type { CSSProperties } from 'react';
import BrandIcon from './BrandIcon.tsx';

interface PropsSkillCard {
  icon: SimpleIcon;
  title: string;
  className?: string;
}

const SkillCard = ({ icon, title, className }: PropsSkillCard) => {
  return (
    <div
      className={`${className ?? ''} skill-card`}
      style={{ '--accent': brandColor(icon) } as CSSProperties}
    >
      <BrandIcon icon={icon} className="skill-card-icon" />
      <p className="skill-card-title">{title}</p>
    </div>
  );
};
export default SkillCard;
