interface PropsTitleHeader {
  title: string;
  badge: string;
  className?: string;
}

const TitleHeader = ({ title, badge, className }: PropsTitleHeader) => {
  return (
    <div className={`${className ?? ''} flex flex-col items-center gap-5"`}>
      <div className="hero-badge">
        <p>{badge}</p>
      </div>
      <h2 className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </h2>
    </div>
  );
};
export default TitleHeader;
