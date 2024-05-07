import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, 
IonItem, IonLabel,
IonButton, IonInput} from '@ionic/angular/standalone';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { Router } from '@angular/router';
import { StringFormat } from 'firebase/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule,
    IonItem, IonLabel,
    IonButton, IonInput]
})


export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  last_name: string = '';
  location: string = '';
  zipcode: string = '';


  isBoxShadowActive: boolean = false;
  constructor(private router: Router) { }
  async register() {
    try {
      const auth: Auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      const userId = userCredential.user.uid  
      // Guardar datos adicionales en Firestore
      await this.saveUserData(userId, this.name, this.last_name, this.location, this.zipcode)
      this.router.navigate(['/login']);
    } catch (error) {
      // Manejar el error según sea necesario
    }
  }
  private async saveUserData(userId: string, name: string, last_name: string, location: string, zipcode: string): Promise<void> {
    const db = getFirestore();
    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, { name, last_name, location, zipcode });
  }

  
  changeBoxShadow() {
    this.isBoxShadowActive = !this.isBoxShadowActive;
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
