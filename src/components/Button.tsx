interface PropsButton {
  className?: string;
  href: string;
  text: string;
}

const Button = ({ className, href, text }: PropsButton) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`} href={href}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="" />
        </div>
      </div>
    </a>
  );
};
export default Button;
