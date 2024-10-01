import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  categorias: Categoria[] = [
    {nombre: 'Electronica', tipo: 'componentes electronicos', material:''},
    {nombre: 'Muebles', tipo: 'hogar', material: 'madera'},
    {nombre: 'Calzado', tipo: 'vestimenta', material:'cuero'},
    {nombre: 'Maleta',tipo:'viajes', material:'abs'},
  ]
}

interface Categoria {
  nombre: string,
  tipo: string,
  material: string
}