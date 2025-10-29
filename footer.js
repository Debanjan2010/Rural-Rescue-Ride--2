class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a202c;
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
        }
        .footer-content {
          max-width: 6xl;
          margin: 0 auto;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #cbd5e0;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: white;
        }
        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
        <div class="footer-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="contact.html">Contact Us</a>
            <a href="about.html">About</a>
        </div>
<p>&copy; Made By Debanjan Ghosh</p>
          <p class="text-sm text-gray-400 mt-2">Emergency Ambulance Service for Rural Communities</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);