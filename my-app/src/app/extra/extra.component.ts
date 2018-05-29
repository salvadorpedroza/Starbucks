import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
declare var jQuery:any;
declare var $:any;
 
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  menuItems : any[];
  @Output() boton = new EventEmitter();
  info={destino:"",ingrediente:""}
  z=0
  constructor() {
    this.boton = new EventEmitter<{}>();
    this.menuItems = [
    { path: '../../assets/images/almendrapolvo.jpg', title: 'ALMENDRAS' },
    { path: '../../assets/images/cocopolvo.jpg', title: 'COCO' },
    { path: '../../assets/images/nuezpolvo.jpg', title: 'NUEZ' },
    { path: '../../assets/images/chocolatepolvo.jpg', title: 'CHOCOLATE' }
  ] }

  ngOnInit() {
  }

  siguiente(){
    if(this.z==1)
   {
    $(document).ready(function() 
    {
       
        { 
          $('.s4').css('border', '0px'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); 
         }
     
     });
    this.info.destino="crema"
    this.boton.emit(this.info);
    }
    else
    {
      $(document).ready(function()
   {
      $("#mostrarmodal3").modal("show");
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
    this.info.destino="leche"
    this.boton.emit(this.info);
  }

  seleccion(){
    this.info.destino="seleccion"
    this.boton.emit(this.info);
  }


  public ingre1(){
    this.info.ingrediente="almendras";
    this.z=1
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
            $('.s1').css('border', '4px solid #023f26'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px');
            }
        
  });
  }

  public ingre2(){
    this.info.ingrediente="coco";
    this.z=1
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s2').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s3').css('border', '0px'); $('.s4').css('border', '0px'); 
            }
        
  });
  }
  
  public ingre3(){
    this.info.ingrediente="nuez";
    this.z=1
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s3').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s4').css('border', '0px'); 
            }
        
  });
  }
  public ingre4(){
    this.info.ingrediente="chocolate";
    this.z=1
    $(document).ready(function() 
       { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
          
           { 
             $('.s4').css('border', '4px solid #023f26'); $('.s1').css('border', '0px'); $('.s2').css('border', '0px'); $('.s3').css('border', '0px'); 
            }
        
  });
  }


}
