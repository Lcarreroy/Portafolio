import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  template: `
    <section class="content">
      <div class="content-overlay"></div>
      <div class="content-info">
        <h1>Ponte en Contacto</h1>
        <h2>¡Me gustaría saber de ti!</h2>
        <p>Si tienes alguna pregunta o simplemente quieres saludar, ¡por favor utiliza el formulario de contacto!</p>
      </div>
      <div class="content-formulario">
        <form action="https://formspree.io/f/xbdpjbkj" method="POST">
          <h2>Contáctame</h2>
          <input type="text" name="_gotcha" style="display:none" />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde tu Portafolio">
          <input type="text" name="nombre" placeholder="Tu nombre" required>
          <input type="email" name="email" placeholder="Tu email" required>
          <textarea name="mensaje" placeholder="Tu mensaje" required #msgTextarea (input)="autoResize(msgTextarea)"></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .content {
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 90px;
      padding: 0 60px;
      background: url("/assets/images/img_fondo_contacto.avif") center / cover no-repeat;
    }
    .content-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at left,
        rgba(15, 15, 15, 0.85) 0%,
        rgba(15, 15, 15, 0.6) 50%,
        rgba(15, 15, 15, 0.3) 100%
      );
    }
    .content-info {
      position: relative;
      z-index: 2;
      max-width: 500px;
      color: #ffffff;
    }
    .content-info h1 {
      font-size: 3rem;
      margin-bottom: 10px;
      text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    }
    .content-info h2 {
      font-size: 1.5rem;
      color: #d1d1d1;
      margin-bottom: 20px;
    }
    .content-info p {
      line-height: 1.6;
      color: #e0e0e0;
      margin-bottom: 30px;
    }
    .content-formulario {
      width: 360px;
      margin-left: 20px;
      position: relative;
      z-index: 2;
    }
    .content-formulario form {
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(10px);
      padding: 30px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow: hidden;
      width: 100%;
    }
    .content-formulario h2 {
      margin-bottom: 10px;
      font-size: 22px;
    }
    .content-formulario input {
      width: 100%;
      padding: 12px 14px;
      border-radius: 6px;
      border: none;
      outline: none;
      background: rgba(241, 241, 241, 0.1);
      color: #fff;
      font-size: 14px;
    }
    .content-formulario textarea {
      width: 100%;
      max-width: 100%;
      padding: 12px 14px;
      border-radius: 6px;
      border: none;
      outline: none;
      background: rgba(241, 241, 241, 0.1);
      color: #fff;
      font-size: 14px;
      resize: none;
      height: 120px;
      overflow-y: auto;
    }
    .content-formulario input::placeholder,
    .content-formulario textarea::placeholder {
      color: #ccc;
    }
    .content-formulario button {
      margin-top: 10px;
      padding: 12px;
      border: none;
      border-radius: 6px;
      background: #7c4dff;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .content-formulario button:hover {
      background: #6a3cff;
    }
    @media (max-width: 900px) {
      .content { flex-direction: column; gap: 40px; padding: 80px 30px; text-align: center; }
      .content-formulario { width: 100%; max-width: 420px; }
    }
  `],
  standalone: true,
})
export class ContactoComponent {
  autoResize(textarea: HTMLTextAreaElement): void {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
