import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-hello">Hola! Soy</span>
        <h1>Luis Carrero</h1>
        <h2>DESARROLLADOR WEB FRONT-END</h2>
        <p>
          Hola! Soy Luis Carrero, un apasionado del desarrollo web actualmente cursando
          mi formación técnica. Mi enfoque principal es crear experiencias de usuario
          fluidas y eficientes utilizando HTML, CSS y JavaScript.
        </p>
        <div class="hero-buttons">
          <a href="https://drive.google.com/file/d/1LhFj7BEcJ985bosHP7sqDSeFEndvkdl7/view?usp=sharing" target="_blank" class="btn primary">DESCARGAR CV</a>
          <a routerLink="/proyectos" class="btn secondary">VER PROYECTOS</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      background: url("/assets/images/nueva_imagen.jpg") center / cover no-repeat;
      display: flex;
      align-items: center;
      padding-left: 80px;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at left,
        rgba(0,0,0,0.85) 0%,
        rgba(0,0,0,0.6) 40%,
        rgba(0,0,0,0.2) 100%
      );
    }
    .hero-content {
      position: relative;
      max-width: 600px;
      z-index: 2;
      animation: fadeUp 1s ease forwards;
    }
    .hero-hello {
      font-size: 22px;
      opacity: 0.9;
    }
    .hero-content h1 {
      font-size: 56px;
      margin: 10px 0;
      font-weight: 700;
    }
    .hero-content h2 {
      font-size: 18px;
      letter-spacing: 2px;
      margin-bottom: 20px;
      color: #cccccc;
    }
    .hero-content p {
      font-size: 15px;
      line-height: 1.6;
      color: #b5b5b5;
      margin-bottom: 30px;
    }
    .hero-buttons {
      display: flex;
      gap: 20px;
      animation: fadeUp 1.2s ease forwards;
    }
    .btn {
      padding: 12px 26px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 14px;
      transition: all 0.3s ease;
    }
    .btn.primary {
      background-color: #6d5dfc;
      color: white;
    }
    .btn.primary:hover {
      background-color: #5a4ce0;
    }
    .btn.secondary {
      border: 1px solid #6d5dfc;
      color: #6d5dfc;
    }
    .btn.secondary:hover {
      background-color: #6d5dfc;
      color: white;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 1024px) {
      .hero { padding-left: 40px; }
      .hero-content h1 { font-size: 44px; }
    }
    @media (max-width: 768px) {
      .hero { padding: 120px 20px 60px; align-items: flex-start; text-align: center; }
      .hero-content { max-width: 100%; }
      .hero-buttons { justify-content: center; flex-wrap: wrap; }
      .hero-content h1 { font-size: 38px; }
    }
  `],
  standalone: true,
  imports: [RouterModule],
})
export class HeroComponent {}
