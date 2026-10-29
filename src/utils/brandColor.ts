import type { SimpleIcon } from 'simple-icons';

const FALLBACK = '#d9ecff'; // white-50
const BACKGROUND = '0e0e10'; // black-100 (With or without #)
const MIN_CONTRAST = 3; // limit of 3:1

// `brandColor` involves calculating the contrast between
// the brand color and the background color `#0e0e10`;
// it returns the brand color if it is legible, or `white-50` if it is not.

// The calculation has three steps: channel(), luminance() and contrast().

// corrects the gamma for each channel (0 to 255)
const channel = (value: number) => {
  const v = value / 255;
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

// sums the channels using perceptual weights, where green has a weight of 0.7152
// and blue only 0.0722, because the eye perceives green much more strongly.
const luminance = (hex: string) => {
  const h = hex.replace('#', ''); // Accepts hex with or without a leading #.
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

// divide the luminance of the brightest by that of the darkest, with a +0.05
// to avoid division by zero.
// WCAG FORMULA: (L1 + 0.05) / (L2 + 0.05)
const contrast = (a: string, b: string) => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
};

// Brand color of the icon, or a light fallback when the brand color is too
// dark to be seen on the dark background (Next.js, Express, JWT, Prisma, ...).
export const brandColor = (icon: SimpleIcon) =>
  contrast(icon.hex, BACKGROUND) >= MIN_CONTRAST ? `#${icon.hex}` : FALLBACK;
