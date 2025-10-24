import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>La Porteña</h3>
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
          <p>📍 Av. Ejemplo 1234, Buenos Aires</p>
          <p>📞 (011) 1234-5678</p>
          <p>✉️ info@panaderia.com</p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 La Porteña. Todos los derechos reservados.</p>
        <p className="footer-creator">Creado con ❤️ por Angel</p>
      </div>
    </footer>
  );
};