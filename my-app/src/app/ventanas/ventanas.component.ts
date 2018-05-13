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
  mostrar_promociones = true;
  mostrar_inicio = false;
  mostrar_seleccion = false;
  nbebidas=0;
  
  constructor() {
    this.images = new Array<string>();
    
    this.images[0]= "../../assets/images/promo1.jpg";
    this.images[1]="../../assets/images/promo2.PNG";
    this.images[2]="../../assets/images/promo3.jpg";
   }

  ngOnInit() {
  }

  seleccion(){
    this.mostrar_promociones = false;
    this.mostrar_inicio = false;
    this.mostrar_seleccion = true;
    
  }


}
