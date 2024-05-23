import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader,
  IonTitle, 
  IonToolbar, 
  IonList,
  IonItem, 
  IonThumbnail, 
  IonButton,
  IonImg,
  IonLabel, 
  IonCard,
  IonCardContent, 
  IonCardTitle, 
  IonCardSubtitle, 
 IonButtons,
  IonFooter } from '@ionic/angular/standalone';
import { Producto } from '../common/modules/users.models';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { NavBarrComponent } from '../component-basic/nav-barr/nav-barr.component';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
  standalone: true,
  imports: [IonFooter, 
    IonButtons, 
    IonCard, 
    IonContent, 
    IonHeader, 
    IonTitle,
    IonToolbar, 
    CommonModule,
    FormsModule,
    IonItem, 
    IonButton, 
    IonList,
    IonThumbnail,
    IonLabel ,
    IonImg, 
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle, 
    NavBarrComponent]
})
export class AddCarPage implements OnInit {
  products: Producto[] = [];
  totalPrice: number = 0;
  logoPath: string = 'assets/imagenes/logo.jpeg';

  
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.ProductCars();
  }

  navigateToLanding(): void {
    this.router.navigate(['/category']);
  }

  ProductCars(): void {
    this.cartService.ProductsCars().subscribe(productos => {
      this.products = productos.filter(product => !product.isDeleted);
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.products.reduce((total, product) => {
      const productPrice = typeof product.precio === 'string' ? parseFloat(product.precio) : product.precio;
      return total + (isNaN(productPrice) ? 0 : productPrice);
    }, 0);
  }

  deleteProducts(producto: Producto): void {
    this.cartService.deleteProductFromCart(producto.id)
      .then(() => {
        const index = this.products.findIndex(p => p.id === producto.id);
        if (index !== -1) {
          const productPrice = typeof producto.precio === 'string' ? parseFloat(producto.precio) : producto.precio;
          this.totalPrice -= isNaN(productPrice) ? 0 : productPrice;
          this.products.splice(index, 1);
        }
      })
      .catch(error => {
        console.error('Error al eliminar el producto del carrito:', error);
      });
  }
}