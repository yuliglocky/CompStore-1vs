import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav-barr',
  templateUrl: './nav-barr.component.html',
  styleUrls: ['./nav-barr.component.scss'],
  standalone: true,
  imports: [ RouterLink

  ]
})
export class NavBarrComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
