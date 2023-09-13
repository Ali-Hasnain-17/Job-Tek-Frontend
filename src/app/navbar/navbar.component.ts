import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showMobileMenu: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe({
      next: (_) => this.router.navigate(['login']),
    });
  }
}
