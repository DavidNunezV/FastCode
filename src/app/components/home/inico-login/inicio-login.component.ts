import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './inicio-login.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  showTermsModal: boolean = true; // Variable para controlar la visibilidad del modal

  constructor() {
    // Aquí podrías verificar si los términos ya fueron aceptados antes y actualizar showTermsModal
  }

  acceptTerms() {
    // Código para manejar la aceptación de los términos
    this.showTermsModal = false;
    // Aquí podrías guardar la aceptación en el almacenamiento local o en la base de datos
    localStorage.setItem('termsAccepted', 'true');
  }

  rejectTerms() {
    // Código para manejar el rechazo de los términos
    this.showTermsModal = false;
    // Aquí podrías redirigir al usuario fuera del sitio o mostrar un mensaje
    // Por ejemplo, podrías navegar a una página de "Acceso Denegado" o simplemente recargar la página de inicio
  }
}
