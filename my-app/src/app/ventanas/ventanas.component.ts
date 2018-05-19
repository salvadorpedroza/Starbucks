import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
//import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
  nbebidas=0;
  
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


}
