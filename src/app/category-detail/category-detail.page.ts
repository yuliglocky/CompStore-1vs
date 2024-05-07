import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/angular/standalone';
import { Observable, of } from 'rxjs'; 
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../common/modules/users.models';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonThumbnail]
})
export class CategoryDetailPage implements OnInit {
 
  productos: Producto[] = [];
  codigo: string = '';

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService, private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.codigo = params['codigo']; // Obtener el código de la categoría de los parámetros de la URL
      this.getProductosPorCategoria(this.codigo); // Llamar a la función para cargar los productos de la categoría
    });
  }

  getProductosPorCategoria(codigo: string) {
    this.firestoreService.getProductoCategory(codigo).subscribe(productos => {
      this.productos = productos; // Asignar los productos obtenidos al arreglo productos
    });
  }

  verDetalles(id: string) {
    this.router.navigateByUrl(`/details/${id}`);
  }

}
