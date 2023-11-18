import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRoleKey = 'currentUserRole';

  authenticate(username: string, password: string): boolean {
    if (username === 'prueba2' && password === 'admin1234') {
      localStorage.setItem(this.currentUserRoleKey, 'admin');
      return true;
    } else if (username === 'prueba' && password === 'user1234') {
      localStorage.setItem(this.currentUserRoleKey, 'user');
      return true;
    }
    return false;
  }

  getCurrentUserRole(): 'admin' | 'user' | null {
    return localStorage.getItem(this.currentUserRoleKey) as 'admin' | 'user' | null;
  }

  logout() {
    localStorage.removeItem(this.currentUserRoleKey);
  }

}
