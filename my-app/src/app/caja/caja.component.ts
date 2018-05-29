import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css'],
})
export class CajaComponent implements OnInit {
  @Output() boton = new EventEmitter();
  @Input() listaproductos: any[];//copia esta
  nuevoproducto = {tipo: "", nombre:"", precio: 0, cantidad:1, tipoleche:""}//copia esta
  info={destino:"seleccion"}
  constructor() {
    //this.actuallista = new EventEmitter<[{}]>();
    this.boton = new EventEmitter<{}>();//copia esta

   }

  ngOnInit() {
  }

  suma(producto:string){
    for(var i=0; i<this.listaproductos.length;i++){
      if(this.listaproductos[i].producto == producto){
        this.listaproductos[i].cantidad++;
      }
    }
  }

  resta(producto:string){
    for(var i=0; i<this.listaproductos.length;i++){
      if(this.listaproductos[i].producto == producto){
        this.listaproductos[i].cantidad--;
      }
    }
  }

  nuevo_producto(){//copia esta
    this.listaproductos.push(this.nuevoproducto);//copia esta
  }//copia esta

  eliminar_producto(producto: {}){
    for(var i=0; i<this.listaproductos.length;i++){
      if(this.listaproductos[i] == producto){
        this.listaproductos.splice(i, 1);
        break;
      }
    }

  }

  cancelar(){
   delete this.listaproductos; 
   this.boton.emit(this.info);
  }


}
