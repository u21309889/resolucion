import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const storedUser = localStorage.getItem('user');
  
    if (storedUser) {
      const user = JSON.parse(storedUser);
  
      if (user.email === this.email && user.password === this.password) {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Correo o contraseña incorrectos');
      }
    } else {
      alert('No hay usuarios registrados. Por favor, regístrate.');
      this.router.navigate(['/register']);
    }
  }
  
}
