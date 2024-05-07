import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel,
  IonInput  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonButton, IonItem, IonLabel,
     IonInput ]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  isBoxShadowActive: boolean = false;

  constructor(private router: Router) {}
  async login() {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
      // Si el login es exitoso, redirige a otra página
      this.router.navigate(['/landing']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Maneja el error según tus necesidades (mostrar un mensaje de error, por ejemplo)
    }
  }
  changeBoxShadow() {
    this.isBoxShadowActive = !this.isBoxShadowActive;
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}