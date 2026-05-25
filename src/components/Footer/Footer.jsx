import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__scallop" aria-hidden="true"></div>

      <div className="footer__inner">
        <header className="footer__brand">
          <span className="footer__seal" aria-hidden="true">
            <span className="footer__seal-l1">La</span>
            <span className="footer__seal-l2">Porteña</span>
            <span className="footer__seal-l3">est. 2018</span>
          </span>
          <p className="footer__tagline">
            El sabor del campo en cada pan.
          </p>
        </header>

        <div className="footer__grid">
          <section className="footer__col">
            <h4 className="footer__h">
              <span>Horarios</span>
              <span className="footer__h-line" aria-hidden="true"></span>
            </h4>
            <ul className="footer__list">
              <li><span>Lun a Vie</span><span className="footer__dots" aria-hidden="true"></span><span>7 — 20 h</span></li>
              <li><span>Sábados</span><span className="footer__dots" aria-hidden="true"></span><span>8 — 14 h</span></li>
              <li><span>Domingos</span><span className="footer__dots" aria-hidden="true"></span><span className="footer__list-faint">cerrado</span></li>
            </ul>
          </section>

          <section className="footer__col">
            <h4 className="footer__h">
              <span>Contacto</span>
              <span className="footer__h-line" aria-hidden="true"></span>
            </h4>
            <ul className="footer__list footer__list--icons">
              <li><FiMapPin /> Av. Ejemplo 1234, Buenos Aires</li>
              <li><FiPhone /> (011) 1234-5678</li>
              <li><FiMail /> hola@laportena.com</li>
            </ul>
          </section>

          <section className="footer__col">
            <h4 className="footer__h">
              <span>Seguinos</span>
              <span className="footer__h-line" aria-hidden="true"></span>
            </h4>
            <div className="footer__social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
            <p className="footer__note">
              Pedidos por WhatsApp hasta las 18 h del día anterior.
            </p>
          </section>
        </div>

        <div className="footer__rule" aria-hidden="true"></div>

        <div className="footer__bottom">
          <span>© 2026 · La Porteña</span>
          <span className="footer__bottom-sep" aria-hidden="true">·</span>
          <span>Horneado en Buenos Aires</span>
          <span className="footer__bottom-sep" aria-hidden="true">·</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
};
