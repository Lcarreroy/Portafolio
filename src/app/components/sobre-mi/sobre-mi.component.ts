import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  template: `
    <section class="content">
      <div class="container-flex">
        <article class="content-info">
          <h1 class="content-h1">Desarrollador Web Junior <br><span>Especialista en Angular</span></h1>
          <p class="content-p">
            Soy desarrollador web junior en formación, actualmente cursando un Grado Superior en Desarrollo de Aplicaciones Web, con una base sólida en HTML, CSS y JavaScript, y experiencia trabajando con Angular para el desarrollo de interfaces dinámicas.
            <br><br>
            Me enfoco en crear aplicaciones web funcionales, bien estructuradas y adaptadas a distintos dispositivos, cuidando tanto el aspecto visual como el correcto funcionamiento del código.
          </p>
        </article>
        <article class="content-info">
          <h1 class="content-h1">Junior Web Developer <br><span>Angular Specialist</span></h1>
          <p class="content-p">
            Hi! I am a Junior Web Developer currently pursuing a Higher Degree in Web Application Development. My focus is on building functional, well-structured web applications that provide a seamless user experience.
            <br><br>
            I have a solid foundation in HTML, CSS, and JavaScript, specializing in Angular to build dynamic and interactive interfaces. I am passionate about continuous learning and solving technical challenges.
          </p>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .content {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('/assets/images/fondo_principal_sobreMi.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
      padding: 100px 5%;
    }
    .content::before {
      content: "";
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(14, 14, 14, 0.6);
    }
    .container-flex {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      max-width: 1200px;
      width: 100%;
    }
    .content-info {
      flex: 1;
      min-width: 300px;
      background: rgba(255, 255, 255, 0.03);
      padding: 40px;
      border-radius: 15px;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .content-h1 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    .content-h1 span {
      color: #a855f7;
      font-size: 1.4rem;
    }
    .content-p {
      font-size: 1rem;
      color: #ccc;
      text-align: justify;
    }
    @media (max-width: 768px) {
      .container-flex { flex-direction: column; gap: 20px; padding-top: 40px; }
      .content { padding: 80px 5% 40px 5%; height: auto; }
      .content-info { padding: 25px; }
      .content-h1 { font-size: 1.5rem; }
      .content-h1 span { font-size: 1.2rem; }
    }
  `],
  standalone: true,
})
export class SobreMiComponent {}
