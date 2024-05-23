import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Producto } from '../common/modules/users.models';
import { IonButton, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonLabel, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  standalone: true,
  imports: [IonTitle, IonLabel, IonItem, IonList, IonContent, IonToolbar, IonHeader, IonButton
   ]

})
export class CARComponent  implements OnInit {
  @Input() producto!: Producto;


  productos: Producto[] = [];
  constructor( private router: Router,
    private  CarsServices: CartService, ) { }

  ngOnInit() {}
  addCars(producto: Producto): void {
    this.CarsServices.addProductsCar(producto)
      .then(() => {
        // Redirige al usuario a la página del carrito de compras
        this.addCAR();
      })
      .catch(error => {
        console.error('Error al agregar al carrito:', error);
      });
  }
  addCAR(): void {
    this.router.navigate(['/add-car']); // Ajusta '/add-car' con la ruta de tu página de carrito de compras
  }
}
