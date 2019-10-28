import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  nom: string;

  constructor() {
    this.nom = 'Elias';
   }

  ngOnInit() {}

  envoyer() {
    alert("le formulaire à été envoyé");
  }



}