import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRoleKey = 'currentUserRole';
  private currentUsernameKey = 'currentUsername';

  // Define user data
  public users = [
    { username: 'prueba2', password: 'admin1234', role: 'admin', name: 'Prueba 2' },
    { username: 'prueba', password: 'user1234', role: 'user', name: 'Prueba' },
    { username: 'david', password: 'david1234', role: 'user', name: 'David' },

    // Add more users as needed
  ];

  authenticate(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem(this.currentUserRoleKey, user.role);
      localStorage.setItem(this.currentUsernameKey, user.username);
      return true;
    }

    return false;
  }

  getCurrentUserRole(): 'admin' | 'user' | null {
    return localStorage.getItem(this.currentUserRoleKey) as 'admin' | 'user' | null;
  }

  logout() {
    localStorage.removeItem(this.currentUserRoleKey);
    localStorage.removeItem(this.currentUsernameKey);
  }

  getCurrentUsername(): string | null {
    return localStorage.getItem(this.currentUsernameKey);
  }

  setCurrentUsername(username: string): void {
    localStorage.setItem(this.currentUsernameKey, username);
  }

  changePassword(newPassword: string): void {
    const currentUsername = this.getCurrentUsername();
    const currentUser = this.users.find(u => u.username === currentUsername);

    if (currentUser) {
      currentUser.password = newPassword;
      // También podrías actualizar la información en localStorage si lo deseas.
    }
  }

  updateProfile(username: string, newName: string, profileImage: File | null): void {
    const currentUser = this.users.find(u => u.username === username);

    if (currentUser) {
      currentUser.name = newName;

      // Lógica para manejar la carga de la imagen del perfil
      if (profileImage) {
        // Aquí puedes agregar la lógica para cargar la imagen.
        // Puedes utilizar servicios externos o manejarlo directamente aquí.
      }

      // También podrías actualizar la información en localStorage si lo deseas.
    }
  }

}
