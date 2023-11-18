import { Component } from '@angular/core';
import { MembresiasService } from './servicio/planes.service';
import { AuthService } from '../home/crear-cuenta/service/a.service';
import { Router } from '@angular/router';
interface PortfolioItem {
  nombre: string;
  precio: string;
  caracteristicas: string[];
  isOpen: boolean;
}
@Component({
  selector: 'app-membresia',
  templateUrl: './membresias.componen.html',
  styleUrls: ['./membresias.componen.css']
})
export class MembresiaComponent {
  portfolioItems!: PortfolioItem[];

  constructor(private portfolioService: MembresiasService,private authService: AuthService,private router: Router) {}

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
  get currentUserRole(): string | null {
    return this.authService.getCurrentUserRole();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Asegúrate de cambiar '/login' a la ruta de tu página de inicio de sesión
  }
}
