import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../service portfolio/serivice.portafolio.service';
interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string; // Nueva propiedad para la URL de la imagen
  isOpen: boolean;
}

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
})
export class ProyectoComponent {
  constructor(private portfolioService: PortfolioService, private router: Router) {}

  createItem(newItem: PortfolioItem) {
    this.portfolioService.addPortfolioItem(newItem);
    this.router.navigate(['/portafolioadmin']); // Redirige a la lista de proyectos
  }
}
