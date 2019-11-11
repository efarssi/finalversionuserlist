import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  pseudoEnter: string;
  
  
  constructor() {}

  ngOnInit() {}

  envoyer() {
    alert("le formulaire à été envoyé");
  }



}