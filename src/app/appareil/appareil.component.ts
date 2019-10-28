import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
})
export class AppareilComponent implements OnInit {

    appareilName: string;
    appareilStatus: string;

  constructor() { 
    this.appareilName = 'PC';
    this.appareilStatus = 'éteint';
  }

  ngOnInit() {
  }

}