import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembresiasService } from '../servicio/planes.service';

interface PortfolioItem {
  nombre: string;
  precio: string;
  caracteristicas: string[];
  isOpen: boolean;
}
@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './planes-crear.componet.html',
  styleUrls: ['./planes-crear.component.css']

})
export class MembresiaaaaComponent {
  newItem: PortfolioItem = { nombre: '', precio: '', caracteristicas: [''], isOpen: false };

  constructor(private portfolioService: MembresiasService, private router: Router) {}

  addCaracteristica(): void {
    this.newItem.caracteristicas.push('');
  }
  removeCaracteristica(index: number): void {
    this.newItem.caracteristicas.splice(index, 1);
  }
  createItem(): void {
    this.portfolioService.addPortfolioItem(this.newItem);
    this.router.navigate(['/membressias']);
  }

}
