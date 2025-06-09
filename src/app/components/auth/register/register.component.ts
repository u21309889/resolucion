import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}
  register() {
    if (!this.name || !this.email || !this.password) {
      alert('Todos los campos son obligatorios');
      return;
    }
  
    const user = { name: this.name, email: this.email, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Usuario registrado correctamente');
    this.router.navigate(['/login']);
  }
  
}
