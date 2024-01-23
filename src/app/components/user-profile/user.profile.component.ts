import { Component, OnInit } from "@angular/core";
import { AuthService } from "../home/crear-cuenta/service/a.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user.profile.component.html',
})
export class UserProfileComponent implements OnInit {
  currentUsername: string | null;
  newName: string = '';
  newUsername: string = '';
  newPassword: string = '';
  profileImage: File | null = null;

  constructor(private authService: AuthService) {
    this.currentUsername = authService.getCurrentUsername();
  }

  ngOnInit(): void {
    // Cargar datos previos si existe un usuario autenticado
    const currentUser = this.authService.users.find(u => u.username === this.currentUsername);

    if (currentUser) {
      this.newName = currentUser.name;
    }
  }

  saveSettings() {
    const currentUsername = this.currentUsername || ''; // Si es null, se establece como una cadena vacía
    const newName = this.newName || ''; // Si es null, se establece como una cadena vacía

    this.authService.setCurrentUsername(this.newUsername);
    this.authService.changePassword(this.newPassword);
    this.authService.updateProfile(currentUsername, newName, this.profileImage);
  }

  handleFileInput(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.profileImage = event.target.files[0];
    }
  }
}
