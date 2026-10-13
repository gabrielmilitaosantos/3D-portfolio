import { abilities } from '../constants';
import { useTranslation } from '../hooks/useTranslation.ts';

const FeatureCards = () => {
  const { language } = useTranslation();

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ id, imgPath, title, desc }) => (
          <div
            key={id}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full bg-black-200">
              <img src={imgPath} alt={title[language]} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">
              {title[language]}
            </h3>
            <p className="text-white-50 text-lg">{desc[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeatureCards;
