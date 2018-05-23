import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ventanasComponent } from '../ventanas/ventanas.component';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.component.html',
  styleUrls: ['./preparacion.component.css']
})
export class PreparacionComponent implements OnInit {
  menuItems : any[];

  constructor() {
    this.menuItems = [
      { path: '../../assets/images/chico.jpg', title: 'CHICO $20' },
      { path: '../../assets/images/mediano.jpg', title: 'MEDIANO $35' },
      { path: '../../assets/images/grande.jpg', title: 'GRANDE $49' },
      { path: '../../assets/images/jumbo.jpg', title: 'JUMBO $59' }
    ]
  }

  ngOnInit() {
  }

}
