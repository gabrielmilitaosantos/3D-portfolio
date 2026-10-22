import TitleHeader from '../components/TitleHeader.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import { expCards } from '../constants';
import GlowCard from '../components/GlowCard.tsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// TODO: Can change the percentage after build the next session. (Suggest 60%)
const REVEAL_START = 'top 80%';

const Experience = () => {
  const { t, language } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Animations only run when the user has NOT asked to reduce motion.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const section = sectionRef.current;
        if (!section) return;

        const wrappers = gsap.utils.toArray<HTMLElement>(
          '.exp-card-wrapper',
          section
        );

        wrappers.forEach((wrapper) => {
          const leftCol = wrapper.querySelector<HTMLElement>('.takeaway-col');
          if (!leftCol) return;

          const rightCol = wrapper.querySelector<HTMLElement>('.exp-col');
          if (!rightCol) return;

          // On reloads, do not reanimate cards that already visibles (avoid flash)
          if (wrapper.getBoundingClientRect().top < window.innerHeight * 0.8)
            return;

          void gsap
            .timeline({
              defaults: { duration: 1, ease: 'power2.inOut' },
              scrollTrigger: {
                trigger: wrapper,
                start: REVEAL_START,
              },
            })
            .from(leftCol, { xPercent: -100, opacity: 0 })
            .from(rightCol, { opacity: 0 }, '<'); // '<' same start as the previous tween
        });

        const list = section.querySelector<HTMLElement>('.exp-list');
        const timeline = section.querySelector<HTMLElement>('.timeline');
        const logos = gsap.utils.toArray<HTMLElement>(
          '.timeline-logo',
          section
        );
        const lastLogo = logos[logos.length - 1];

        if (list && timeline && lastLogo) {
          void gsap.to(timeline, {
            scaleY: 0,
            transformOrigin: 'bottom bottom',
            ease: 'none',
            scrollTrigger: {
              trigger: list,
              start: 'top 75%',
              endTrigger: lastLogo,
              end: 'clamp(center 45%)', // TODO: remove the clamp for the next section
              scrub: true, // Links progress to scroll
            },
          });
        }
      });

      // Reduced motion: no animation, everything is visible right away.
      // The black .timeline bar MUST be hidden here, otherwise it would cover
      // the logos and the line forever (nothing would retract it).
      mm.add('(prefers-reduced-motion: reduce)', () => {
        const timeline =
          sectionRef.current?.querySelector<HTMLElement>('.timeline');
        if (timeline) void gsap.set(timeline, { scaleY: 0 });
      });

      // matchMedia uses a context under the hood: revert it on unmount.
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="w-full md:mt-40 mt-20">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title={t.experience.title} badge={t.experience.badge} />

        <div className="mt-32 relative">
          <div className="exp-list relative z-50 xl:space-y-32 space-y-10">
            <div className="timeline-wrapper">
              <div className="timeline" />
              <div className="gradient-line w-1 h-full" />
            </div>

            {/*Left Column (Takeaways)*/}
            {expCards.map((card) => (
              <div key={card.id} className="exp-card-wrapper">
                <div className="xl:w-2/6 takeaway-col ms-14 md:ms-28 xl:ms-0">
                  {card.takeaway && (
                    <GlowCard className="p-10">
                      <p className="text-blue-50 italic mb-5">
                        {t.experience.takeaway}
                      </p>
                      <p className="text-white-50 text-lg">
                        {card.takeaway[language]}
                      </p>
                    </GlowCard>
                  )}
                </div>

                {/*Right Column (Experiences)*/}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="exp-col flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-3xl">
                          {card.title[language]}
                        </h3>
                        {card.org && (
                          <p className="mt-2 text-white-50">
                            {card.org[language]}
                          </p>
                        )}
                        <p className="my-5 text-white-50">
                          📅 {card.date[language]}
                        </p>
                        {card.highlights && (
                          <>
                            {card.listLabel && (
                              <p className="text-blue-50 italic">
                                {card.listLabel[language]}
                              </p>
                            )}
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.highlights[language].map((highlight) => (
                                <li key={highlight} className="text-lg">
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
