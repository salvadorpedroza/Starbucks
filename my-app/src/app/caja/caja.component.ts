import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  menuItems: any[];
  constructor() {
    this.menuItems = [
      { path: '../../assets/images/chico.jpg', title: 'CHICO $20' },
      { path: '../../assets/images/mediano.jpg', title: 'MEDIANO $35' },
      { path: '../../assets/images/grande.jpg', title: 'GRANDE $49' },
      { path: '../../assets/images/chico.jpg', title: 'CHICO $20' }
    ]
     
   }

  ngOnInit() {
  }

}
