import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class HomePage  {

  isBoxShadowActive: boolean = false;

  constructor(private router: Router) {}

  changeBoxShadow() {
    this.isBoxShadowActive = !this.isBoxShadowActive;
    // Aquí puedes agregar la lógica para redirigir a otra página usando el Router
    this.router.navigateByUrl('/login');
  }

}
