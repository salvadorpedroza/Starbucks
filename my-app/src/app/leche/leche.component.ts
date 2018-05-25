import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-leche',
  templateUrl: './leche.component.html',
  styleUrls: ['./leche.component.css']
})
export class LecheComponent implements OnInit {
menuItems : any[];
@Output() boton = new EventEmitter();
  constructor() {
    this.boton = new EventEmitter<string>();
    this.menuItems = [
    
    { path: '../../assets/images/santaclara.png', title: 'SANTA CLARA' },
    { path: '../../assets/images/lala.png', title: 'LALA' },
    { path: '../../assets/images/sellorojo.png', title: 'SELLO ROJO' },
    { path: '../../assets/images/sanmarcos.png', title: 'SAN MARCOS' }
  ] }

  ngOnInit() {
  }
  siguiente(){
    this.boton.emit("extra");
  }
  regresar(){
    this.boton.emit("vasos");
  }


}
