import logo from "../../assets/images/logo-footer.jpg";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="La Porteña" className="logo-img" />
          <p>El sabor del campo en cada pan.</p>
        </div>

        <div className="footer-section">
          <h4>Horarios</h4>
          <p>Lunes a Viernes: 7:00 - 20:00</p>
          <p>Sábados: 8:00 - 14:00</p>
          <p>Domingos: Cerrado</p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p><FiMapPin /> Av. Ejemplo 1234, Buenos Aires</p>
          <p><FiPhone /> (011) 1234-5678</p>
          <p><FiMail /> info@panaderia.com</p>

        </div>

        <div className="footer-section">
          <h4>Seguínos en</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 La Porteña. Todos los derechos reservados.</p>
        <p className="footer-creator">
          Creado con <FaHeart className="heart-icon" /> por
          <a
            href="https://github.com/AngelSpinazzola"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angel <FaGithub className="github-icon" />
          </a>
        </p>
      </div>
      
    </footer>
  );
};