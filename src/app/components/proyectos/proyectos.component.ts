import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  template: `
    <section class="hero">
      <div class="hero-content">
        <h2>Desarrollador Web</h2>
        <p>Creo sitios web modernos, responsivos y enfocados en resultados.</p>
      </div>
    </section>
    <section class="projects project-section">
      <h2 class="section-title">Mis Proyectos</h2>
      <div class="projects-grid">
        <article class="project-card">
          <a href="../Pag. restaurante/pagina.html" target="_blank">
            <img src="proyectos/img_proyecto_restaurant.png" alt="Proyecto restaurante">
          </a>
          <div class="project-info">
            <h3>Restaurante Burger</h3>
            <p>Sitio web moderno para restaurante, responsive y optimizado.</p>
            <span class="tech">HTML · CSS · Responsive</span>
          </div>
        </article>
        <article class="project-card">
          <a href="https://buscador-peliculas-v1.vercel.app/">
            <img src="proyectos/buscador_peliculas.png" alt="Proyecto landing">
          </a>
          <div class="project-info">
            <h3>Consumo de API</h3>
            <p>Vercel Serverless Functions para:</p>
            <p>Ocultar la API Key: La llave nunca se expone en el navegador del usuario.</p>
            <p>Variables de Entorno: Configuración segura directamente en el panel de Vercel.</p>
            <p>Backend escalable: Una arquitectura moderna y profesional.</p>
            <span class="tech">HTML · CSS · JavaScript</span>
          </div>
        </article>
        <article class="project-card">
          <a href="https://lista-tareas-one-inky.vercel.app/">
            <img src="proyectos/img_tarea.png" alt="Proyecto lista-tareas">
          </a>
          <div class="project-info">
            <h3>Lista Tareas</h3>
            <p>Task Manager es una aplicación web de gestión de tareas desarrollada con HTML, CSS y JavaScript vanilla. Permite crear tareas con título, descripción, prioridad y fecha límite con cuenta atrás en tiempo real. Incluye funciones para editar, eliminar y marcar tareas como completadas. Los datos se guardan automáticamente en el navegador mediante localStorage, por lo que persisten aunque cierres la página. Cuenta con filtros para ver todas las tareas, solo las pendientes o las completadas. El diseño es responsive y se adapta tanto a escritorio como a dispositivos móviles.</p>
            <span class="tech">HTML · CSS · JavaScript</span>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 90vh;
      display: flex;
      align-items: center;
      padding: 0 60px;
      background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("proyectos/img_fondo_pg_proyec.avif") center / cover no-repeat;
    }
    .hero-content {
      max-width: 600px;
    }
    .hero h2 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    .hero p {
      font-size: 18px;
      color: #cfcfcf;
    }
    .project-section {
      background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("proyectos/img_fondo_pg_proyec.avif") center / cover no-repeat;
    }
    section {
      padding: 90px 60px;
    }
    .section-title {
      font-size: 36px;
      text-align: center;
      margin-bottom: 60px;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
    }
    .project-card {
      background: rgba(20, 20, 20, 0.75);
      backdrop-filter: blur(6px);
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }
    .project-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,196,0,0.15);
    }
    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .project-info {
      padding: 22px;
    }
    .project-info h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #ffffff;
    }
    .project-info h3::after {
      content: "";
      display: block;
      width: 32px;
      height: 3px;
      background: #f5c400;
      margin-top: 8px;
    }
    .project-info p {
      font-size: 14px;
      color: #b5b5b5;
    }
    .tech {
      display: inline-block;
      margin-top: 12px;
      font-size: 12px;
      font-weight: 600;
      color: #f5c400;
      letter-spacing: 0.5px;
    }
    @media (max-width: 768px) {
      .hero { padding: 60px 20px; text-align: center; }
      .hero h2 { font-size: 36px; }
      section { padding: 70px 20px; }
    }
  `],
  standalone: true,
})
export class ProyectosComponent {}
