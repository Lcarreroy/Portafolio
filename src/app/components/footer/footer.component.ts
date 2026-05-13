import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-social">
          <a href="http://www.linkedin.com/in/luis-carrero-2a0ab216a" target="_blank">
            <img src="assets/images/logo_lin.png" alt="LinkedIn" class="social-icon">
          </a>
          <a href="https://github.com/lcarreroy" target="_blank">
            <img src="assets/images/github.png" alt="GitHub" class="social-icon">
          </a>
        </div>
        <div class="footer-info">
          <p>Luis Carrero — Desarrollador Web — © 2026. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0a0a0a;
      padding: 12px 10%;
      border-top: 1px solid rgba(168, 85, 247, 0.15);
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-social {
      display: flex;
      gap: 20px;
    }
    .social-icon {
      width: 26px;
      height: 26px;
      filter: grayscale(100%);
      opacity: 0.8;
      transition: all 0.3s ease;
    }
    .social-icon:hover {
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.1);
    }
    .footer-info p {
      font-size: 13px;
      color: #888;
      margin: 0;
    }
    @media (max-width: 650px) {
      .footer-content {
        flex-direction: column;
        gap: 12px;
        text-align: center;
      }
    }
  `],
  standalone: true,
})
export class FooterComponent {}
