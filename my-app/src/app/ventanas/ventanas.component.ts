import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
//import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PreparacionComponent } from '../preparacion/preparacion.component';
@Component({
  selector: 'app-ventanas',
  templateUrl: './ventanas.component.html',
  styleUrls: ['./ventanas.component.css']
})
export class ventanasComponent implements OnInit {
  images : string[];
  mostrar_promociones = false;
  mostrar_inicio = true;
  mostrar_seleccion = false;
  mostrar_bebidas = false;
  mostrar_alimentos = false;
  mostrar_tees = false;
  mostrar_cafes = false;
  mostrar_frapes = false;
  mostrar_desayunos = false;
  mostrar_panaderia = false;
  mostrar_antojos = false;
  mostrar_vasos = false;
  mostrar_caja = false;
  mostrar_leche = false;
  mostrar_extra = false;
  mostrar_crema = false;
  nbebidas=0;
  producto = {tipo: "", nombre:"", precio: 0, cantidad:1}
  

  
  
  constructor() {
    this.images = new Array<string>();
    
    this.images[0]= "../../assets/images/promo1.jpg";
    this.images[1]="../../assets/images/promo2.PNG";
    this.images[2]="../../assets/images/promo3.png";

   }

  ngOnInit() {
  }
  
  reset(){
    this.mostrar_promociones = false;
    this.mostrar_inicio = false;
    this.mostrar_seleccion = false; 
    this.mostrar_bebidas = false;
    this.mostrar_alimentos = false;
    this.mostrar_tees = false;
    this.mostrar_cafes = false;
    this.mostrar_frapes= false;
    this.mostrar_desayunos = false;
    this.mostrar_panaderia = false;
    this.mostrar_antojos = false;
    this.mostrar_vasos = false;
    this.mostrar_caja = false;
    this.mostrar_leche = false;
    this.mostrar_extra = false;
    this.mostrar_crema = false;
  }
  inicio(){
    this.reset()
    this.mostrar_inicio = true;
  }

  seleccion(){
    this.reset()
    this.mostrar_seleccion = true;
  }

  promociones(){
    this.reset()
    this.mostrar_promociones = true;
  }

  bebidas(){
    this.reset()
    this.mostrar_bebidas = true;
  }

  alimentos(){
    this.reset()
    this.mostrar_alimentos = true;
  }
  tees(){
    this.reset()
    this.mostrar_tees = true;
    this.producto.tipo = "tees"
  }
  cafes(){
    this.reset()
    this.mostrar_cafes = true;
  }
  frapes(){
    this.reset()
    this.mostrar_frapes = true;
  }
  desayunos(){
    this.reset()
    this.mostrar_desayunos = true;
  }
  panaderia(){
    this.reset()
    this.mostrar_panaderia = true;
  }
  antojos(){
    this.reset()
    this.mostrar_antojos = true;
  }
  vasos(){
    this.reset()
    this.mostrar_vasos = true;
  }
  caja(){
    this.reset()
    this.mostrar_caja = true;
  }
  leche(){
    this.reset()
    this.mostrar_leche = true;
  }
  extra(){
    this.reset()
    this.mostrar_extra = true;
  }
  crema(){
    this.reset()
    this.mostrar_crema = true;
  }


  click(press: {destino:string,precio:number}){
    this.producto.precio=press.precio;
    if(press.destino=="leche")
      this.leche()
    if(press.destino=="seleccion")
      this.seleccion()
    if(press.destino=="leche")
      this.leche()
    if(press.destino=="vasos")
      this.vasos()
    if(press.destino=="extra")
      this.extra()
    if(press.destino=="crema")
      this.crema()
    if(press.destino=="caja")
      this.caja()
  }

  mentas(){
    this.producto.nombre="mentas"
    this.producto.precio= 39
    this.producto.tipo="antojo"
    this.caja();
  }
  metees(){
    this.producto.nombre="Peach Green Tea Lemonade"
    this.producto.tipo="tees"
    this.vasos();
  }


}
