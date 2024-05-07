import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader, IonToolbar, IonTitle,
   IonContent, IonLabel, IonList, 
   IonItem, IonCard, IonInput,
    IonSpinner, IonButtons,
     IonButton, IonIcon,
      IonImg, IonThumbnail} from '@ionic/angular/standalone';
import { Producto } from '../common/modules/users.models';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, 
    FormsModule,  IonImg, 
    IonList, IonLabel,  IonList,
     IonItem, IonInput,
    IonIcon, IonButton, 
    IonButtons, IonSpinner, IonInput,
    IonCard, IonThumbnail ]
})
export class LandingPage implements OnInit {
  productos: Producto[] = [];

  constructor(private firestoreService: FirestoreService,
    private router: Router
  ) { 
    this.loadproductos();
  }
  loadproductos() {
    this.firestoreService.getCollectionChanges<Producto>('productos').subscribe( data => {
      if (data) {
        this.productos = data
      }

    })
  }
  ngOnInit(): void {
  }
  verDetalles(id: string) {
    this.router.navigateByUrl(`/details/${id}`);
  }
}
