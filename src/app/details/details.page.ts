import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonThumbnail} from '@ionic/angular/standalone';
import { Producto } from '../common/modules/users.models';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonThumbnail]
})
export class DetailsPage implements OnInit {
  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
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