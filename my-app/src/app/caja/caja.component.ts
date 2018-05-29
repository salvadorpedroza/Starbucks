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
      {tipo: "", precio: 15, producto: 'Cafe Moka', cantidad :1 },
      { tipo: "",precio: 25, producto: 'Tee Chia', cantidad: 2 },
      { tipo: "",precio: 32, producto: 'Sandwich', cantidad: 3 },
      { tipo: "",precio: 28, producto: 'Frape Chocolate', cantidad:1 }
    ]
     
   }

  ngOnInit() {
  }

  suma(producto:string){
    for(var i=0; i<this.menuItems.length;i++){
      if(this.menuItems[i].producto == producto){
        this.menuItems[i].cantidad++;
      }
    }
  }

  resta(producto:string){
    for(var i=0; i<this.menuItems.length;i++){
      if(this.menuItems[i].producto == producto){
        this.menuItems[i].cantidad--;
      }
    }
  }

}
