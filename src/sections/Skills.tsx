import TitleHeader from '../components/TitleHeader.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import { skillCards } from '../constants';
import SkillCard from '../components/SkillCard.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import TechMarquee from '../components/TechMarquee.tsx';

gsap.registerPlugin(ScrollTrigger);

// Where each entrance starts (viewport %).
const REVEAL_START = 'top 80%';

const Skills = () => {
  const { t, language } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Entrance animations only run when the user has NOT asked to reduce
      // motion. Otherwise, everything is simply visible.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const section = sectionRef.current;
        if (!section) return;

        const grid = section.querySelector<HTMLElement>('.skill-grid');
        const marquee = section.querySelector<HTMLElement>('.tech-marquee');
        const limit = window.innerHeight * 0.8;

        // On reloads, don't reanimate what is already visible (avoid flash)
        if (grid && grid.getBoundingClientRect().top >= limit) {
          void gsap.from(gsap.utils.toArray<HTMLElement>('.skill-card', grid), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.12,
            scrollTrigger: { trigger: grid, start: REVEAL_START },
          });
        }

        if (marquee && marquee.getBoundingClientRect().top >= limit) {
          void gsap.from(marquee, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            // Last element of the page: its top never reaches 80% of the viewport
            // TODO: use REVEAL_START on 'start' once the Contact section exists below it.
            scrollTrigger: { trigger: marquee, start: 'top 95%' },
          });
        }
      });

      // matchMedia uses a context under the hood: revert it on unmount.
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="skills" ref={sectionRef} className="w-full md:mt-40 mt-20">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader badge={t.skills.badge} title={t.skills.title} />

        <div className="skill-grid">
          {skillCards.map(({ id, title, icon }) => (
            <SkillCard key={id} icon={icon} title={title[language]} />
          ))}
        </div>

        <TitleHeader
          className="mt-32 md:mt-40"
          badge={t.skills.toolsBadge}
          title={t.skills.toolsTitle}
        />
      </div>

      <TechMarquee className="mt-16" />
    </section>
  );
};
export default Skills;
