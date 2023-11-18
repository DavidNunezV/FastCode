import { Injectable } from '@angular/core';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioItems: PortfolioItem[] = [
    {
      title: 'Proyecto 1111',
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
