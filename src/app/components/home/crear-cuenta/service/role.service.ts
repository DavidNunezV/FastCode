import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './a.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userRole = this.authService.getCurrentUserRole();

    if (userRole === 'admin') {
      this.router.navigate(['/portafolioadmin']);
      return false;
    } else if (userRole === 'user') {
      this.router.navigate(['/portafolio']);
      return false;
    }

    // Si no hay un rol definido, redirige a una ruta por defecto
    this.router.navigate(['/']);
    return false;
  }
}
