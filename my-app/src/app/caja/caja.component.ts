import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css'],
})
export class CajaComponent implements OnInit {
  
  @Output() boton = new EventEmitter();
  @Input() listaproductos: any[];//copia esta
  info={destino:"seleccion"}
  total=0
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


  confirmar(){
    $(document).ready(function()
      {
         $("#mostrarmodal6").modal("show");
      });
  }

  cancelar(){
    this.listaproductos.splice(0,this.listaproductos.length);
    this.info.destino="inicio";
    this.boton.emit(this.info);
  }

  agregar_otro(){
    this.info.destino="seleccion";
    this.boton.emit(this.info);
  }


  pagar(){
    if(this.listaproductos != undefined){
      if(this.listaproductos.length>0){
        this.total=0;
        for(var i=0; i<this.listaproductos.length;i++){
            this.total = this.total + this.listaproductos[i].precio*this.listaproductos[i].cantidad;
        }

        $(document).ready(function()
        {
          $("#mostrarmodal8").modal("show");
        });
      }else{
        $(document).ready(function()
        {
          $("#mostrarmodal10").modal("show");
        });
      }
    }else{
      $(document).ready(function()
      {
         $("#mostrarmodal10").modal("show");
      });
    }
  }
}
