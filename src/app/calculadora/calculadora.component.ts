import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';
  botones: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

  presionarBoton(valor: string) {
    if (valor === '=') {
      this.calcular();
    } else if (valor === 'C') {
      this.display = '';
    } else {
      this.display += valor;
    }
  }

  calcular() {
    try {
      const resultado = Function('"use strict";return (' + this.display + ')')();
      this.display = resultado.toString();
    } catch (error) {
      this.display = 'Error';
    }
  }
}