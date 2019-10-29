import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  pseudoEnter: string;
  nom1 = 'Elias';
  nom2 = 'Zakaria';
  nom3 = '';
  nom4 = '';
  nom5 = '';
  nom6 = '';
  nom7 = '';
  nom8 = '';
  nom9 = '';
  nom10 = '';
  virgule = ' | ';

  constructor() {}

  ngOnInit() {}

  envoyer() {
    alert("le formulaire à été envoyé");
  }



}