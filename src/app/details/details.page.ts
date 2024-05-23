import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { IonContent, IonHeader, IonTitle, IonToolbar,
   IonCardContent, IonCard, 
   IonCardTitle, IonCardHeader, IonThumbnail} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../common/modules/users.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonicModule,
     FormsModule, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonThumbnail]
})
export class DetailsPage implements OnInit {
  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService, private router: Router
  ) {
    this.producto = {} as Producto; // Inicialización vacía
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.firestoreService.getProductoDetail(productId).subscribe(producto => {
          this.producto = producto;
        });
      }
    });
  }

  
}