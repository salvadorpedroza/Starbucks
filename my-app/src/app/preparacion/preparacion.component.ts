import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.component.html',
  styleUrls: ['./preparacion.component.css']
})
export class PreparacionComponent implements OnInit {
  menuItems : any[];

  constructor() {
    this.menuItems = [
      { path: '../../assets/images/chico.jpg', title: '$43' },
      { path: '../../assets/images/mediano.jpg', title: 'PREDICTIONS' },
      { path: '../../assets/images/grande.jpg', title: 'HISTOGRAM' },
      { path: '../../assets/images/jumbo.jpg', title: 'HISTOGRAM' }
    ]
  }

  ngOnInit() {
  }

}
