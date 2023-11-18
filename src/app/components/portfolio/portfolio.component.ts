import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './service portfolio/serivice.portafolio.service';
import { AuthService } from '../home/crear-cuenta/service/a.service';
interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string; // Nueva propiedad para la URL de la imagen
  isOpen: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1...',
      imageUrl: 'assets/1.jpg', // Ruta corregida
      isOpen: false,
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2...',
      imageUrl: 'assets/2.jpg', // Ruta corregida
      isOpen: false,
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del Proyecto 3...',
      imageUrl: 'assets/3.jpg', // Ruta corregida

      isOpen: false,
    },
    {
      title: 'Proyecto 4',
      description: 'Descripción del Proyecto 4...',
      imageUrl: 'assets/4.jpg', // Ruta corregida

      isOpen: false,
    },
    {
      title: 'Proyecto 5',
      description: 'Descripción del Proyecto 5...',
      imageUrl: 'assets/5.jpg', // Ruta corregida

      isOpen: false,
    },
    {
      title: 'Proyecto 6',
      description: 'Descripción del Proyecto 6...',
      imageUrl: 'assets/6.jpg', // Ruta corregida

      isOpen: false,
    },

    // ... puedes seguir agregando más proyectos aquí
  ];


  toggleDetails(item: PortfolioItem) {
    item.isOpen = !item.isOpen;
  }

  addToCart(item: any) {
    console.log('Agregar al carrito:', item);
  }
}


