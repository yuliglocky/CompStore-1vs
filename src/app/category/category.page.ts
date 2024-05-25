import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader,
   IonTitle, 
   IonToolbar,
   IonButton,
   IonLabel, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SearchComponent } from '../component-basic/search/search.component';
import { RouterLink } from '@angular/router';
import { NavBarrComponent } from '../component-basic/nav-barr/nav-barr.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonLabel, 
    IonContent, 
    IonHeader, 
    IonTitle, IonToolbar, 
    CommonModule,
    FormsModule, 
    IonButton,
    SearchComponent,
    RouterLink, 
    NavBarrComponent]
})
export class CategoryPage implements OnInit {

  constructor(private router: Router) { }

  navigateToCategoryDetail(codigo: string) {
    this.router.navigateByUrl(`/category-detail/${codigo}`);
  }

  ngOnInit() {
  }

  

}
