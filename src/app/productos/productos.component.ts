import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [
    {nombre: 'Laptop', tipo: 'Electronica', disponible: true},
    {nombre: 'Silla', tipo: 'Muebles', disponible: true},
    {nombre: 'Zapato', tipo: 'Calzado', disponible: false},
    {nombre: 'Maleta', tipo: '', disponible: true},
  ]

}

interface Producto {
  nombre: string,
  tipo: string,
  disponible: boolean

}
