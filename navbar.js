class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 40;
        }
.logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        ul { 
          display: flex; 
          gap: 2rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
        }
        a { 
          color: white; 
          text-decoration: none; 
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        a:hover { 
          color: #feb2b2;
          transform: translateY(-2px);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          nav {
            padding: 0.75rem 1rem;
          }
          .mobile-menu-btn {
            display: block;
          }
          ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #1e293b;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          ul.active {
            display: flex;
          }
        }
</style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="truck"></i>
          Rural Rescue Ride
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="index.html"><i data-feather="home"></i> Home</a></li>
          <li><a href="about.html"><i data-feather="info"></i> About</a></li>
          <li><a href="driver-login.html"><i data-feather="log-in"></i> Driver Login</a></li>
          <li><a href="driver-register.html"><i data-feather="user-plus"></i> Register</a></li>
        </ul>
</nav>
    `;

    // Add mobile menu functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      if (menu.classList.contains('active')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        menu.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-feather', 'menu');
        feather.replace();
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);