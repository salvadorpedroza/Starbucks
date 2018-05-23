import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra2',
  templateUrl: './extra2.component.html',
  styleUrls: ['./extra2.component.css']
})
export class Extra2Component implements OnInit {
  menuItems : any[];
  constructor() { this.menuItems = [
    { path: '../../assets/images/chocochips.jpg', title: 'CHOCO CHIPS' },
    { path: '../../assets/images/chispasdecolores.jpg', title: 'CHISPAS DE COLORES' },
    { path: '../../assets/images/canelaenpolvo.jpg', title: 'CANELA' },
    { path: '../../assets/images/lunetas.jpeg', title: 'LUNETAS' }
  ]  }

  ngOnInit() {
  }

}
