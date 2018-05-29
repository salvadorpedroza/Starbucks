import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
 
  @Input() listaproductos: any[];//copia esta
  nuevoproducto = {tipo: "", nombre:"", precio: 0, cantidad:1, tipoleche:""}//copia esta
  constructor() {
    
    this.listaproductos = new Array<Object>();//copia esta
  
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

  eliminar_producto(producto:string){
    for(var i=0; i<this.listaproductos.length;i++){
      if(this.listaproductos[i].producto == producto){
        delete this.listaproductos[i];
      }
    }

  }


}
