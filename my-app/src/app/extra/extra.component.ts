import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  menuItems : any[];
  @Output() boton = new EventEmitter();
  constructor() {
    this.boton = new EventEmitter<string>();
    this.menuItems = [
    { path: '../../assets/images/almendrapolvo.png', title: 'ALMENDRAS' },
    { path: '../../assets/images/cocopolvo.png', title: 'COCO' },
    { path: '../../assets/images/nuezpolvo.png', title: 'NUEZ' },
    { path: '../../assets/images/chocolatepolvo.png', title: 'CHOCOLATE' }
  ] }

  ngOnInit() {
  }
  siguiente(){
    this.boton.emit("crema");
  }
  regresar(){
    this.boton.emit("leche");
  }
  seleccion(){
    this.boton.emit("seleccion");
  }



}
