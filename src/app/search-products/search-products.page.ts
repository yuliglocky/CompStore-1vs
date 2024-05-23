import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader,
  IonToolbar, 
  IonTitle,
  IonContent, 
  IonLabel, 
  IonList, 
  IonItem, 
  IonCard, 
  IonInput,
  IonSpinner, 
  IonButtons,
  IonButton, 
  IonIcon,
  IonImg, 
  IonThumbnail,
  IonTabButton, 
  IonTabs, 
  IonTabBar, 
  IonModal, 
  IonAvatar, 
  IonSearchbar,
  IonSelectOption, 
  IonCardHeader, 
  IonCardContent,
  IonCardTitle} from '@ionic/angular/standalone';
import { Producto } from '../common/modules/users.models';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { NavController } from '@ionic/angular';
import { Inject } from '@angular/core';
import { grid, home, person } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NavBarrComponent } from '../component-basic/nav-barr/nav-barr.component';
import { CARComponent } from '../car/car.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.page.html',
  styleUrls: ['./search-products.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonModal, IonContent, 
    IonHeader,
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,  
    IonImg, 
    IonList, 
    IonLabel,
    IonList,
    IonItem,
    IonInput,
    IonIcon, 
    IonButton, 
    IonButtons, 
    IonSpinner, 
    IonInput,
    IonCard, 
    IonThumbnail,  
    IonTabButton, 
    IonTabs, 
    IonTabBar, 
    CARComponent,
    IonModal, 
    IonAvatar, 
    IonSearchbar, 
    IonSelectOption,
    IonCardHeader, 
    IonCardContent,
    IonCardTitle,
    RouterLink,
    NavBarrComponent
   ]
})
export class SearchProductsPage implements OnInit {
  productos: Producto[] = [];
  term: string = '';
  codigo: string = '';
  logoPath: string = 'assets/imagenes/logo.jpeg';

  constructor(private firestoreService: FirestoreService,
    private router: Router,
  ) { 
    this.loadproductos();
    addIcons({ grid, home, person });
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

  details(id: string): void {
    this.router.navigateByUrl(`/details/${id}`);
  }
  searchProductos() {
    if (this.term && this.codigo) {
      this.firestoreService.searchProductos(this.term, this.codigo).subscribe(data => {
        this.productos = data;
      });
    }
  }
 

}
