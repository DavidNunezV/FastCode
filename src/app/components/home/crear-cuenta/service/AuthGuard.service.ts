import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './a.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getCurrentUserRole();
    console.log(`Verificando acceso. Rol del usuario: ${role}`);

    if (role === 'admin') {
      return true; // Permite el acceso si es administrador
    } else {
      console.log('Acceso denegado. Redirigiendo a novedades.');
      this.router.navigate(['/novedades']); // Redirige a los usuarios regulares
      return false;
    }
  }

}
