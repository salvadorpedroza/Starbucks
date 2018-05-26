import { Component, OnInit, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ventanasComponent } from '../ventanas/ventanas.component';
import { EventEmitter } from '@angular/core';
declare var jQuery:any;
declare var $:any;
 
@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.component.html',
  styleUrls: ['./preparacion.component.css']
})
export class PreparacionComponent implements OnInit {
  
  menuItems : any[];
 @Output() boton = new EventEmitter();
 @Input() origen = "";
  constructor() {
    this.boton = new EventEmitter<string>();
    this.menuItems = [
      { path: '../../assets/images/chico.jpg', title: 'CORTO $20' },
      { path: '../../assets/images/mediano.jpg', title: 'ALTO $35' },
      { path: '../../assets/images/grande.jpg', title: 'GRANDE $49' },
      { path: '../../assets/images/jumbo.jpg', title: 'VENTI $59' }
    ]
  }
  ngOnInit() {
  }
  siguiente(){
    if (this.origen=="tees"){
      this.boton.emit("caja");
    }
    else
      this.boton.emit("leche");
    
  }
  regresar(){
    this.boton.emit("seleccion");
  }
  seleccion(){
    this.boton.emit("seleccion");
  }

  public vaso1(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
            $('.s1').css('border', '4px solid #023f26'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px');
            }
        
  });
  }

  public vaso2(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s2').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px'); 
            }
        
  });
  }
  public vaso3(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s3').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s4').css('border', '0px'); 
            }
        
  });
  }
  public vaso4(){
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s4').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); 
            }
        
  });
  }


}
