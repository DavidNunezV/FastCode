import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './crear-cuenta/service/a.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';
  password: string = '';
  formSubmitted: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.formSubmitted = true;
    console.log(`Intentando iniciar sesión con: ${this.username}`);

    if (this.authService.authenticate(this.username, this.password)) {
      const userRole = this.authService.getCurrentUserRole();
      console.log(`Inicio de sesión exitoso. Rol: ${userRole}`);

      if (userRole === 'admin') {
        this.router.navigate(['/novedades']);
      } else if (userRole === 'user') {
        this.router.navigate(['/novedades']);
      }
    } else {
      console.log('Credenciales inválidas');
      // Manejar el caso de credenciales inválidas
    }
  }

}

