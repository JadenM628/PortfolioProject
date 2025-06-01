import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-inner mt-12">
      <div className="flex justify-center items-center gap-6 py-6 text-gray-300">
        <a
          href="https://www.linkedin.com/in/jaden-marquez/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/JadenM628/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:jaden6280@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-colors text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
    );
};

export default Footer;

