import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
declare var jQuery:any;
declare var $:any;
 
@Component({
  selector: 'app-leche',
  templateUrl: './leche.component.html',
  styleUrls: ['./leche.component.css']
})
export class LecheComponent implements OnInit {
menuItems : any[];
@Output() boton = new EventEmitter();
  constructor() {
    this.boton = new EventEmitter<string>();
    this.menuItems = [
    
    { path: '../../assets/images/santaclara.png', title: 'SANTA CLARA' },
    { path: '../../assets/images/lala.png', title: 'LALA' },
    { path: '../../assets/images/sellorojo.png', title: 'SELLO ROJO' },
    { path: '../../assets/images/sanmarcos.png', title: 'SAN MARCOS' }
  ] }

  ngOnInit() {
  }
  siguiente(){
    this.boton.emit("extra");
  }
  regresar(){
    this.boton.emit("vasos");
  }
  seleccion(){
    this.boton.emit("seleccion");
  }

  public leche1(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
            $('.s1').css('border', '4px solid #023f26'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px');
            }
        
  });
  }

  public leche2(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s2').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px'); 
            }
        
  });
  }
  
  public leche3(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s3').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s4').css('border', '0px'); 
            }
        
  });
  }
  public leche4(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s4').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); 
            }
        
  });
  }


}
