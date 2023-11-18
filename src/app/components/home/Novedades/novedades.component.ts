import { Component } from '@angular/core';
import { AuthService } from '../crear-cuenta/service/a.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']


})
export class NovedadesComponent {

  constructor(private authService: AuthService, private router: Router) {}

  get currentUserRole(): string | null {
    return this.authService.getCurrentUserRole();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Asegúrate de cambiar '/login' a la ruta de tu página de inicio de sesión
  }
}
