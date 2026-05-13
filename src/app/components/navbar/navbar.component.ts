import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="navbar">
      <nav>
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
          <li><a routerLink="/sobre-mi" routerLinkActive="active">Sobre mí</a></li>
          <li><a routerLink="/proyectos" routerLinkActive="active">Proyectos</a></li>
          <li><a routerLink="/contacto" routerLinkActive="active">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 25px 10%;
      z-index: 100;
      background: linear-gradient(to bottom, rgba(14,14,14,0.8), transparent);
    }
    .navbar ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      gap: 40px;
    }
    .navbar a {
      text-decoration: none;
      color: #eaeaea;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1px;
      transition: color 0.3s ease;
    }
    .navbar a:hover, .navbar a.active {
      color: #a855f7;
    }
    @media (max-width: 768px) {
      .navbar { padding: 20px; }
      .navbar ul { justify-content: center; gap: 20px; flex-wrap: wrap; }
    }
  `],
  standalone: true,
  imports: [RouterModule],
})
export class NavbarComponent {}
