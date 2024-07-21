import { Component } from '@angular/core';
import { GlobalNavbarComponent } from 'src/app/GlobalComponent/navbar-properties';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nav !: any

  constructor(private globalNavbarComponent:GlobalNavbarComponent){
    this.nav= this.globalNavbarComponent
  }
}
