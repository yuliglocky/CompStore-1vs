import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
IonHeader, 
IonTitle, 
IonToolbar, 
IonItem, 
IonLabel,
IonButton, 
IonInput, 
IonIcon,
IonCard,
IonCardContent,
IonSelect,
IonSelectOption } from '@ionic/angular/standalone';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonIcon,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonItem, 
    IonLabel,
    IonButton, 
    IonInput,
    IonCard,
    IonCardContent,
    IonSelect, 
    IonSelectOption]
})


export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  last_name: string = '';
  location: string = '';
  zipcode: string = '';
  locations = [
    { country: 'USA', zipcode: '10001' },
    { country: 'Canada', zipcode: 'H1A 0A1' },
    { country: 'Mexico', zipcode: '01000' },
    // Agrega más países y códigos postales según sea necesario
  ];
  confirmPassword: string = '';
  errorMessage: string = '';
  isBoxShadowActive: boolean = false;
  constructor(private router: Router) { }

  async register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }
    if (!this.validatePassword(this.password)) {
      this.errorMessage = 'Contraseña no válida. Asegúrate de usar solo números, mayúsculas, minúsculas y algunos caracteres especiales (!@#$%^&*).';
      return;
    }
    try {
      const auth: Auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      const userId = userCredential.user.uid  
      // Guardar datos adicionales en Firestore
      await this.saveUserData(userId, this.name, this.last_name, this.location, this.zipcode)
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Error al registrar:', error);
      this.errorMessage = error.message || 'Error al registrar.';
    }
  }

  onLocationChange() {
    const selectedLocation = this.locations.find(loc => loc.country === this.location);
    if (selectedLocation) {
      this.zipcode = selectedLocation.zipcode;
    }
  } 

  private async saveUserData(userId: string, name: string, last_name: string, location: string, zipcode: string): Promise<void> {
    const db = getFirestore();
    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, { name, last_name, location, zipcode });
  }

 
  validatePassword(password: string): boolean {
    const passwordPattern = /^[A-Za-z0-9!@#$%^&*]*$/;
    return passwordPattern.test(password);
  }

  changeBoxShadow() {
    this.isBoxShadowActive = !this.isBoxShadowActive;
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
