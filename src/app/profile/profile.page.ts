import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
   IonHeader, 
  IonTitle,
   IonToolbar, 
   IonCard, 
   IonCardContent, 
   IonCardTitle, IonCardHeader, IonInput, IonLabel,IonItem} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { NavBarrComponent } from '../component-basic/nav-barr/nav-barr.component';
import { SearchComponent } from '../component-basic/search/search.component';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonContent, IonHeader,
    IonTitle, 
    IonToolbar, CommonModule, FormsModule, 
    IonCard, 
    IonCardContent, 
    RouterLink, 
    NavBarrComponent,
    SearchComponent, IonCardHeader, IonInput, IonLabel,IonItem]
})
export class ProfilePage implements OnInit {
  userData: any = null;

  constructor(private userService: AuthService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((data) => {
      this.userData = data;
    });
  }
}

