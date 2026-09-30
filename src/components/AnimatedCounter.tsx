import { useRef } from 'react';
import { useCountUp } from 'react-countup';
import { counterItems } from '../constants';
import { useTranslation } from '../hooks/useTranslation.ts';

type CounterCardProps = {
  value: number;
  suffix?: string;
  label: string;
};

const CounterCard = ({ value, suffix, label }: CounterCardProps) => {
  const ref = useRef<HTMLSpanElement>(null!);

  useCountUp({ ref, end: value, suffix, duration: 2 });

  return (
    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
      <div className="counter-number text-white text-5xl font-bold mb-2">
        <span ref={ref} />
      </div>
      <div className="text-white-50 text-lg">{label}</div>
    </div>
  );
};

const AnimatedCounter = () => {
  const { language } = useTranslation();

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-3-cols">
        {counterItems.map((item) => (
          <CounterCard
            key={item.id}
            value={item.value}
            suffix={item.suffix}
            label={item.label[language]}
          />
        ))}
      </div>
    </div>
  );
};
export default AnimatedCounter;
