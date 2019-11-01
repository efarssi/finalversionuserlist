import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']

})
export class AppareilComponent implements OnInit {

  appareilName: string = 'PC';
  appareilStatus1: string = 'éteint';
  appareilStatus2: string = 'allumé';
  
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus1;
    return this.appareilStatus2;
  }

}