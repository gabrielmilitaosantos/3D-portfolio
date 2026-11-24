import { words } from '../constants';
import { useTranslation } from '../hooks/useTranslation.ts';
import Button from '../components/Button.tsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.tsx';
import { lazy, Suspense } from 'react';

const HeroExperience = lazy(
  () => import('../components/HeroModels/HeroExperience.tsx')
);

const Hero = () => {
  const { t, language } = useTranslation();

  const wordList = new Intl.ListFormat(language === 'pt' ? 'pt-BR' : 'en', {
    type: 'conjunction',
  }).format([...new Set(words.map((word) => word.text[language]))]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      void gsap.fromTo(
        '.hero-text .line',
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.inOut',
        }
      );
    });

    return () => mm.revert();
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10" aria-hidden="true">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout grid-12-cols md:px-20 px-5">
        {/*Left: Hero Content*/}
        <header className="xl:col-span-6 flex flex-col justify-center">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                <span className="line">
                  {t.hero.titleLine1}{' '}
                  <span className="sr-only">{wordList}</span>
                  <span className="slide" aria-hidden="true">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.id}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt=""
                            className="xl:size-12 md:size-10 size-7 md:pb-2 p-1 rounded-full bg-white-50"
                          />

                          <span>{word.text[language]}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
                <span className="line">{t.hero.titleLine2}</span>
                <span className="line">{t.hero.titleLine3}</span>
              </h1>
            </div>
            <p className="text-white-50 md:text-xl">{t.hero.subtitle}</p>
            <Button
              className="w-fit min-w-60 md:min-w-80 h-12 md:h-16"
              href="#work"
              text={t.hero.cta}
            />
          </div>
        </header>

        {/*Right: 3D model*/}
        <figure className="xl:col-span-6" aria-hidden="true">
          <div className="hero-3d">
            {/* absolute inset-0: the canvas fills the box sized by .hero-3d */}
            <div className="absolute inset-0">
              <Suspense fallback={null}>
                <HeroExperience />
              </Suspense>
            </div>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};
export default Hero;
