import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  menuItems : any[];
  constructor() {this.menuItems = [
    { path: '../../assets/images/almendrapolvo.png', title: 'ALMENDRAS' },
    { path: '../../assets/images/cocopolvo.png', title: 'COCO' },
    { path: '../../assets/images/nuezpolvo.jpg', title: 'NUEZ' },
    { path: '../../assets/images/chocolatepolvo.jpg', title: 'CHOCOLATE' }
  ] }

  ngOnInit() {
  }

}
