import { Injectable } from '@angular/core';

interface PortfolioItem {
  nombre: string;
  precio: string;
  caracteristicas: string[];
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MembresiasService {
  private portfolioItems: PortfolioItem[] = [
    {
      nombre: 'Básico',
      precio: '5€/mes',
      caracteristicas: [
        'Página web estática',
        'Diseño responsivo básico',
        'Soporte por correo electrónico',
        '1 revisión de diseño',
        'Optimización SEO básica',
        'Alojamiento compartido'
      ],
      isOpen: false // Agregando esta propiedad a cada item

    },
    {
      nombre: 'Estándar',
      precio: '10€/mes',
      caracteristicas: [
        'Sitio web dinámico (hasta 5 páginas)',
        'Diseño responsivo avanzado',
        'Soporte por correo y chat',
        '3 revisiones de diseño',
        'Optimización SEO intermedia',
        'Alojamiento compartido con SSL',
        'Integración básica de redes sociales'
      ],
      isOpen: false // Agregando esta propiedad a cada item

    },
    {
      nombre: 'Premium',
      precio: '15€/mes',
      caracteristicas: [
        'Sitio web personalizado (hasta 10 páginas)',
        'Diseño responsivo premium',
        'Soporte prioritario por correo, chat y teléfono',
        'Revisiones de diseño ilimitadas',
        'Optimización SEO avanzada',
        'Alojamiento en la nube con SSL',
        'Integración avanzada de redes sociales',
        'CMS personalizado'
      ],
      isOpen: false // Agregando esta propiedad a cada item

    },
    {
      nombre: 'VIP',
      precio: '20€/mes',
      caracteristicas: [
        'Sitio web empresarial a medida',
        'Diseño responsivo de alta gama',
        'Soporte VIP dedicado 24/7',
        'Revisiones de diseño ilimitadas y consultoría de diseño',
        'Estrategia SEO de nivel experto',
        'Alojamiento en servidor dedicado con SSL',
        'Integración completa de redes sociales y marketing digital',
        'CMS personalizado con formación y soporte',
        'Análisis y reportes de tráfico web'
      ],
      isOpen: false // Agregando esta propiedad a cada item

    }
  ]
  ;

  constructor() { }

  getPortfolioItems(): PortfolioItem[] {
    return this.portfolioItems;
  }

  addPortfolioItem(item: PortfolioItem): void {
    this.portfolioItems.push(item);
  }

  updatePortfolioItem(index: number, item: PortfolioItem): void {
    if (index >= 0 && index < this.portfolioItems.length) {
      this.portfolioItems[index] = item;
    }
  }

  deletePortfolioItem(index: number): void {
    if (index >= 0 && index < this.portfolioItems.length) {
      this.portfolioItems.splice(index, 1);
    }
  }
}
