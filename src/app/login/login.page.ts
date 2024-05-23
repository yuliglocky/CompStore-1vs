import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel,
  IonInput, IonIcon, IonCard, IonCardContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonButton, IonItem, IonLabel,
     IonInput, IonCard, IonCardContent, RouterLink ]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  logoPath: string = 'assets/imagenes/logo.jpeg';
  cardColor = '#CCD0CF'; 
  isBoxShadowActive: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}
  async login() {
    try {
      if (this.validatePassword(this.password)) {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        // Si el login es exitoso, redirige a otra página
        this.router.navigate(['/landing']);
      } else {
        this.errorMessage = 'Contraseña no válida. Asegúrate de usar solo números, mayúsculas, minúsculas y caracteres especiales.';
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.errorMessage = 'Usuario no se encuentra registrado o hubo un error al iniciar sesión.';
      this.clearForm();
    }
  }

  validatePassword(password: string): boolean {
    const passwordPattern = /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]*$/;
    return passwordPattern.test(password);
  }

 clearForm() {
    this.email = '';
    this.password = '';
  }
  changeBoxShadow() {
    this.isBoxShadowActive = !this.isBoxShadowActive;
    this.router.navigateByUrl('/register');
  }
  ngOnInit() {
  }

}