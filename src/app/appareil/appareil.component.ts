import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']

})
export class AppareilComponent implements OnInit {

  appareilName: string = 'PC N°';
  appareilStatus: string = 'R.A.S.';
  isAuth = false;
  
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
   }

   onAllumer() {
    alert('changement sauvgardé');
 }
}