import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crema-batida',
  templateUrl: './crema-batida.component.html',
  styleUrls: ['./crema-batida.component.css']
})
export class CremaBatidaComponent implements OnInit {
  menuItems : any[];
  constructor() {this.menuItems = [
    { path: '../../assets/images/cremabatida.png', title: 'CON CREMA BATIDA' },
    { path: '../../assets/images/sincremabatida.png', title: 'SIN CREMA BATIDA' }
  ] }

  ngOnInit() {
  }

}
