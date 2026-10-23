import type { MouseEvent, ReactNode } from 'react';

interface PropsGlowCard {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className }: PropsGlowCard) => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // currentTarget is the card itself (don't need to check if exists)
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // cursor position relative to the CENTER of the card
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // angle from the center to the cursor, normalized to 0-360
    const angle = (Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 360) % 360;

    // CSS (.card::before) reads this variable to rotate the glowing border
    card.style.setProperty('--start', String(angle + 60));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`${className ?? ''} card card-border rounded-xl`}
    >
      {children}
    </div>
  );
};
export default GlowCard;
