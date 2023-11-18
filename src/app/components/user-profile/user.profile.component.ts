import { Component } from '@angular/core';
import { AuthService } from '../home/crear-cuenta/service/a.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user.profile.component.html',
})
export class UserProfileComponent {
  currentUsername: string = ''; // Suponiendo que puedes obtener el nombre de usuario actual
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private authService: AuthService) {
    // Aquí puedes cargar el nombre de usuario actual desde el servicio de autenticación
    //this.currentUsername = this.authService.getCurrentUsername();
  }

  updateProfile() {
    // Aquí puedes implementar la lógica para actualizar el perfil
    if (this.newPassword === this.confirmNewPassword) {
      // Llamar al servicio para actualizar la contraseña
    } else {
      // Manejar el error de contraseñas no coincidentes
    }
  }
}
