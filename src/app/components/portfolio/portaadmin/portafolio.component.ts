import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service portfolio/serivice.portafolio.service';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string; // Nueva propiedad para la URL de la imagen
  isOpen: boolean;
}
@Component({
  selector: 'app-portfolioadmin',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],

})
export class PortfolioComponentAdmin  {
  portfolioItems!: PortfolioItem[];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadPortfolioItems();
  }

  loadPortfolioItems() {
    this.portfolioItems = this.portfolioService.getPortfolioItems();
  }

  toggleDetails(item: PortfolioItem) {
    item.isOpen = !item.isOpen;
  }

  deleteItem(index: number) {
    this.portfolioService.deletePortfolioItem(index);
    this.loadPortfolioItems(); // Recargar los elementos después de eliminar
  }
}
