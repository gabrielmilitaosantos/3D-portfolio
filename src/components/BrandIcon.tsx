import type { SimpleIcon } from 'simple-icons';

interface PropsBrandIcon {
  icon: SimpleIcon;
  className?: string;
}

// Decorative: the technology name is always rendered as text next to it.
const BrandIcon = ({ icon, className }: PropsBrandIcon) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
};
export default BrandIcon;
