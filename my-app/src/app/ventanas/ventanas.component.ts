import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
//import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PreparacionComponent } from '../preparacion/preparacion.component';
declare var jQuery:any;
declare var $:any;
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
  producto = {tipo: "", nombre:"", precio: 0, cantidad:1, tipoleche:"", ingrediente:"", crema:"", id:""}
  listaproductos=new Array<{}>();




  
  
  constructor() {
    this.images = new Array<string>();
    
    this.images[0]= "../../assets/images/promo1.jpg";
    this.images[1]="../../assets/images/promo2.PNG";
    this.images[2]="../../assets/images/promo3.png";
   }

  ngOnInit() {
  }
  
  nuevo_producto(){
    this.listaproductos.push(this.producto);
    delete this.producto;
    this.producto = {tipo: "", nombre:"", precio: 0, cantidad:1, tipoleche:"", ingrediente:"", crema:"",id:""};
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
    this.listaproductos.splice(0,this.listaproductos.length);
    this.reset()
    this.mostrar_inicio = true;
  }

  regresar(){
    $(document).ready(function()
      {
         $("#mostrarmodal23").modal("show");
    });
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
    this.playAudio(1);
  }
  caja(){
    this.nuevo_producto();
    this.reset()
    this.mostrar_caja = true;
  }
  leche(){
    this.reset()
    this.mostrar_leche = true;
    this.playAudio(2);
  }
  extra(){
    this.reset()
    this.mostrar_extra = true;
    this.playAudio(3);
  }
  crema(){
    this.reset()
    this.mostrar_crema = true;
    this.playAudio(4);
  }

  playAudio(bandera:number){
    let audio1 = new Audio();
    let audio2 = new Audio();
    let audio3 = new Audio();
    let audio4 = new Audio();
    if(bandera==1){
        audio1.src = "../../../assets/audio/vasos.mp3";
        audio1.load();
        audio1.play();
      }
      if(bandera==2){ 
        audio2.src = "../../../assets/audio/leche.mp3";
        audio2.load();
        audio2.play();
      }
      if(bandera==3){ 
        audio3.src = "../../../assets/audio/extra.mp3";
        audio3.load();
        audio3.play();
      }
      if(bandera==4){ 
        audio4.src = "../../../assets/audio/crema.mp3";
        audio4.load();
        audio4.play();
      }
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
  click2(press: {destino:string, tipoleche:string}){
      
    this.producto.tipoleche=press.tipoleche;
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
  click3(press: {destino:string,ingrediente:string}){
      
    this.producto.ingrediente=press.ingrediente;
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
  click4(press: {destino:string,crema:string}){
      
    this.producto.crema=press.crema;
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
  click5(press: {destino:string}){
      
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
    if(press.destino=="inicio")
      this.inicio()
  }





  mentas(){
    this.producto.id="mentas"
    this.producto.nombre="Mentas"
    this.producto.precio= 29
    this.producto.tipo="antojo"
    this.caja();
  }
  barra(){
    this.producto.id="barra"
    this.producto.nombre="B. saludable"
    this.producto.precio= 39
    this.producto.tipo="antojo"
    this.caja();
  }
  galleta(){
    this.producto.id="galleta"
    this.producto.nombre="Galleta S. Free"
    this.producto.precio= 49
    this.producto.tipo="antojo"
    this.caja();
  }
  desayuno1(){
    this.producto.id="croissant"
    this.producto.nombre="Croissant J/Q"
    this.producto.precio= 69
    this.producto.tipo="desayuno"
    this.caja();
  }
  desayuno2(){
    this.producto.id="panini1"
    this.producto.nombre="Panini T. Quesos"
    this.producto.precio= 69
    this.producto.tipo="desayuno"
    this.caja();
  }
  desayuno3(){
    this.producto.id="panini2"
    this.producto.nombre="Panini M/Tomato"
    this.producto.precio= 69
    this.producto.tipo="desayuno"
    this.caja();
  }
  panaderia1(){
    this.producto.id="panelote"
    this.producto.nombre="Pan de elote"
    this.producto.precio= 45
    this.producto.tipo="panaderia"
    this.caja();
  }
  panaderia2(){
    this.producto.id="dona"
    this.producto.nombre="Dona de Chocolate"
    this.producto.precio= 39
    this.producto.tipo="panaderia"
    this.caja();
  }
  panaderia3(){
    this.producto.id="rollocanela"
    this.producto.nombre="Rollo De Canela"
    this.producto.precio= 49
    this.producto.tipo="panaderia"
    this.caja();
  }

  metees1(){
    this.producto.id="telemon1"
    this.producto.nombre="P. G. Tea Lemonade"
    this.producto.tipo="tees"
    this.vasos();
  }
  metees2(){
    this.producto.id="telemon2"
    this.producto.nombre="S. G. Tea Lemonade"
    this.producto.tipo="tees"
    this.vasos();
  }
  metees3(){
    this.producto.id="mintblend"
    this.producto.nombre="Mint Blend"
    this.producto.tipo="tees"
    this.vasos();
  }
  mecafes1(){
    this.producto.id="mocha"
    this.producto.nombre="Mocha"
    this.producto.tipo="cafes"
    this.vasos();
  }
  mecafes2(){
    this.producto.id="cappuccino"
    this.producto.nombre="Cappuccino"
    this.producto.tipo="cafes"
    this.vasos();
  }
  mecafes3(){
    this.producto.id="espresso"
    this.producto.nombre="Espresso"
    this.producto.tipo="cafes"
    this.vasos();
  }
  mefrapes1(){
    this.producto.id="cafe"
    this.producto.nombre="Cafe"
    this.producto.tipo="Frapes"
    this.vasos();
  }
  mefrapes2(){
    this.producto.id="cajeta"
    this.producto.nombre="Cajeta"
    this.producto.tipo="Frapes"
    this.vasos();
  }
  mefrapes3(){
    this.producto.id="chip"
    this.producto.nombre="Chip"
    this.producto.tipo="Frapes"
    this.vasos();
  }

}
