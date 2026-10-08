import { useTranslation } from '../hooks/useTranslation.ts';
import { showCaseProjects } from '../constants';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const { language } = useTranslation();
  const [primaryProject, ...secondaryProjects] = showCaseProjects;
  const sectionRef = useRef<HTMLElement>(null);
  const primaryRef = useRef<HTMLAnchorElement>(null);
  const secondaryRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    const projects = [primaryRef.current, ...secondaryRefs.current];

    void gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projects.forEach((project, index) => {
      if (!project) return;

      void gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*LEFT*/}
          <a
            href={primaryProject.liveUrl ?? primaryProject.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="first-project-wrapper group"
            ref={primaryRef}
          >
            <div className="image-wrapper bg-black-100 border border-white/10">
              <img
                src={primaryProject.imgPath}
                alt={primaryProject.title[language]}
              />
            </div>

            <div className="text-content">
              <h2>{primaryProject.title[language]}</h2>
              {primaryProject.description && (
                <p className="text-white-50 md:text-xl">
                  {primaryProject.description[language]}
                </p>
              )}
            </div>
          </a>

          {/*RIGHT*/}
          <div className="project-list-wrapper">
            {secondaryProjects.map((project, index) => (
              <a
                href={project.liveUrl ?? project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project group"
                key={project.id}
                ref={(el) => {
                  secondaryRefs.current[index] = el;
                }}
              >
                <div
                  className={`image-wrapper ${
                    project.id === 'authentication-system'
                      ? 'bg-[#ffefdb]'
                      : 'bg-[#ffe7eb]'
                  }`}
                >
                  <img src={project.imgPath} alt={project.title[language]} />
                </div>
                <h2>{project.title[language]}</h2>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
