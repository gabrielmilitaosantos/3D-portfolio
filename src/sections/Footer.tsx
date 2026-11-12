import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map(({ id, name, url, imgPath }) => (
            <a
              className="icon"
              href={url}
              key={id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-5 h-5" src={imgPath} alt={name} />
            </a>
          ))}
        </div>

        <p className="text-center">
          © {new Date().getFullYear()} Gabriel Militão
        </p>
      </div>
    </footer>
  );
};
export default Footer;
