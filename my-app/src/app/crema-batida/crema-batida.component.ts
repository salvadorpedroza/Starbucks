import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-crema-batida',
  templateUrl: './crema-batida.component.html',
  styleUrls: ['./crema-batida.component.css']
})
export class CremaBatidaComponent implements OnInit {
  menuItems : any[];
  @Output() boton = new EventEmitter();
  constructor() {
    this.boton = new EventEmitter<string>();
    this.menuItems = [
    { path: '../../assets/images/cremabatida.png', title: 'CON CREMA BATIDA' },
    { path: '../../assets/images/sincremabatida.png', title: 'SIN CREMA BATIDA' }
  ] }

  ngOnInit() {
  }
  siguiente(){
    this.boton.emit("caja");
  }
  regresar(){
    this.boton.emit("extra");
  }


}
