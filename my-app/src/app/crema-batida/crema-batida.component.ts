import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-crema-batida',
  templateUrl: './crema-batida.component.html',
  styleUrls: ['./crema-batida.component.css']
})
export class CremaBatidaComponent implements OnInit {
  menuItems : any[];
  @Output() boton = new EventEmitter();
  info={destino:"",crema:""}
  d=0
  constructor() {
    this.boton = new EventEmitter<{}>();
    this.menuItems = [
    { path: '../../assets/images/cremabatida.png', title: 'CON CREMA BATIDA' },
    { path: '../../assets/images/sincremabatida.png', title: 'SIN CREMA BATIDA' }
  ] }

  ngOnInit() {
  }
  siguiente(){
    if(this.d==1)
    {
    $(document).ready(function() 
    {
       
        { 
          $('.s4').css('border', '0px'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); 
         }
     
     });
     this.info.destino="caja"
    this.boton.emit(this.info);
    }
    else{
      $(document).ready(function()
      {
         $("#mostrarmodal4").modal("show");
      });
    }
  }
  regresar(){

    $(document).ready(function() 
    { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
       
        { 
          $('.s4').css('border', '0px'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); 
         }
     
});
    this.info.destino="extra"
    this.boton.emit(this.info);
  }
  seleccion(){
    this.info.destino="seleccion"
    this.boton.emit(this.info);
  }
  public concrema(){
    this.info.crema="Si"
    this.d=1
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
            $('.s1').css('border', '4px solid #023f26'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px');
            }
        
  });
  }

  public sincrema(){
    this.info.crema="No"
    this.d=1
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s2').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px'); 
            }
        
  });
  }



}
