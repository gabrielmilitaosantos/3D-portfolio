import { words } from '../constants';
import { useTranslation } from '../hooks/useTranslation.ts';
import Button from '../components/Button.tsx';

const Hero = () => {
  const { t, language } = useTranslation();

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/*Left: Hero Content*/}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                {t.hero.titleLine1}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.id}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text[language]}
                          className="xl:size-12 md:size-10 size-7 md:pb-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text[language]}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>{t.hero.titleLine2}</h1>
              <h1>{t.hero.titleLine3}</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              {t.hero.subtitle}
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text={t.hero.cta}
            />
          </div>
        </header>

        {/*Right: 3D model*/}
      </div>
    </section>
  );
};
export default Hero;
