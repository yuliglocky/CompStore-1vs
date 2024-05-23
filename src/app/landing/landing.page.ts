import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader,  
  IonTitle, 
  IonToolbar,
  IonContent, 
  IonCard, 
  IonButton,
  IonButtons, 
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonSearchbar,
  IonMenu,
  IonApp,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonTabButton,
  IonCardHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonTabs,
  IonTabBar,
  IonIcon,
  IonRouterLink,
  NavController,
  IonBackButton,
  IonSegment,
  IonSegmentButton 
} from '@ionic/angular/standalone';
import { SearchComponent } from '../component-basic/search/search.component';
import { NavBarrComponent } from '../component-basic/nav-barr/nav-barr.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [
    IonHeader,  
    IonTitle, 
    IonToolbar,
    IonContent, 
    IonCard, 
    IonButton,
    IonButtons, 
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonSearchbar,
    IonMenu,
    IonApp,
    IonMenuButton,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonTabButton,
    IonCardHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonTabs,
    IonTabBar,
    IonIcon,
    IonRouterLink,
    IonBackButton,
    IonSegment,
    IonSegmentButton, 
    SearchComponent ,
     NavBarrComponent
  ],
})
export class LandingPage implements OnInit {
  appleImage = 'assets/img/apple.png';
  lenovoImage = 'assets/img/lenovo.png';
  hpImage = 'assets/img/hp.png';
  dellImage = 'assets/img/dell.png';
  asusImage = 'assets/img/asus.png';
  canonImage = 'assets/img/canon.png';
  
  publicidadImage1 = 'assets/img/publicidad.png';
  publicidadImage2 = 'assets/img/publicidad2.png';
  
  banner1Image = 'assets/img/banner1.png';
  
  popImage1 = 'assets/img/pop.png';
  popImage2 = 'assets/img/pop2.png';
  popImage3 = 'assets/img/pop3.png';
  popImage4 = 'assets/img/pop4.png';
  popImage5 = 'assets/img/pop5.png';
  popImage6 = 'assets/img/pop6.png';
  popImage7 = 'assets/img/pop7.png';
  popImage8 = 'assets/img/pop8.png';
  
  banner2Image = 'assets/img/banner2.png';
  constructor() { }

  ngOnInit() {
  }

}
