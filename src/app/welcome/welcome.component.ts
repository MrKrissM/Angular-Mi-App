import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  usuario = 'Cristian';
  fechaActual = new Date();

  obtenerSaludo(): string {
    return `Hola, ${this.usuario}`;
  }
}
