import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [ RouterLink

  ]
})
export class SearchComponent  implements OnInit {
  logoPath: string = 'assets/imagenes/logo.jpeg';
  constructor() { }

  ngOnInit() {}

}
