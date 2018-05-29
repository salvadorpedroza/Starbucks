import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css'],
})
export class CajaComponent implements OnInit {
  @Output() boton = new EventEmitter();
  @Input() listaproductos: any[];//copia esta
  info={destino:"seleccion"}
  constructor() {
    //this.actuallista = new EventEmitter<[{}]>();
    this.boton = new EventEmitter<{}>();//copia esta
   }

  ngOnInit() {
  }

  suma(producto:{}){
    for(var i=0; i<this.listaproductos.length;i++){
      if(this.listaproductos[i] == producto){
        this.listaproductos[i].cantidad++;
      }
    }
  }

  resta(producto: {}){
    for(var i=0; i<this.listaproductos.length;i++){
      if(this.listaproductos[i] == producto){
        if(this.listaproductos[i].cantidad>1)
          this.listaproductos[i].cantidad--;
      }
    }
  }

  eliminar_producto(producto: {}){
    for(var i=0; i<this.listaproductos.length;i++){
      if(this.listaproductos[i] == producto){
        this.listaproductos.splice(i, 1);
        break;
      }
    }
  }

  cancelar(){ 
   this.listaproductos.splice(0,this.listaproductos.length);
   this.boton.emit(this.info);
  }

  agregar_otro(){
    this.boton.emit(this.info);
  }


}
