import { Component, OnInit, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ventanasComponent } from '../ventanas/ventanas.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.component.html',
  styleUrls: ['./preparacion.component.css']
})
export class PreparacionComponent implements OnInit {
  
  menuItems : any[];
 @Output() boton = new EventEmitter();
  constructor() {
    this.boton = new EventEmitter<string>();
    this.menuItems = [
      { path: '../../assets/images/chico.jpg', title: 'CORTO $20' },
      { path: '../../assets/images/mediano.jpg', title: 'ALTO $35' },
      { path: '../../assets/images/grande.jpg', title: 'GRANDE $49' },
      { path: '../../assets/images/jumbo.jpg', title: 'VENTI $59' }
    ]
  }
  ngOnInit() {
  }
  siguiente(){
    this.boton.emit("leche");
  }
  regresar(){
    this.boton.emit("seleccion");
  }


}
