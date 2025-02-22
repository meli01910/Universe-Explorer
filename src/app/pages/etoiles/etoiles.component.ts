
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.scss'],
  imports:[CommonModule]
  ,animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
  ]
})

export class EtoilesComponent implements OnInit {

  // Liste des étoiles avec leurs détails
  stars = [
    {
      name: 'Soleil',
      image: 'https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/soleil.jpg',
      description: 'Notre étoile principale, source de lumière et de chaleur.',
      details: {
        distanceFromEarth: '149.6 million km',
        temperature: '5,500°C (surface)',
        spectralType: 'G2V',
        apparentMagnitude: '-26.74',
        funFact: 'Le Soleil représente 99.86% de la masse totale du système solaire.'
      }
    },
    {
      name: 'Proxima Centauri',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiJhgbmD1tMskijkpup2te7GQpuvkJ6PjJogHTEbNN6e7w3OQaccFlCo&usqp=CAE&s',
      description: 'L\'étoile la plus proche du système solaire.',
      details: {
        distanceFromEarth: '4.24 années-lumière',
        temperature: '3,042°C',
        spectralType: 'M5.5Ve',
        apparentMagnitude: '11.13',
        funFact: 'Proxima Centauri fait partie du système Alpha Centauri.'
      }
    },
    {
      name: 'Sirius',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEPNULSxjOWSrSIBa-gUo6k6jCxWU9InkqNczp4lZrwiAthExHEdjX1w&usqp=CAE&s',
      description: 'L\'étoile la plus brillante dans le ciel nocturne.',
      details: {
        distanceFromEarth: '8.6 années-lumière',
        temperature: '9,940°C',
        spectralType: 'A1V',
        apparentMagnitude: '-1.46',
        funFact: 'Sirius est en réalité un système binaire composé de deux étoiles.'
      }
    },
    {
      name: 'Bételgeuse',
      image: 'https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2024/09/design-sans-titre-2024-09-03t103830.642-750x410.png',
      description: 'Une supergéante rouge dans la constellation d\'Orion.',
      details: {
        distanceFromEarth: '642.5 années-lumière',
        temperature: '3,500°C',
        spectralType: 'M1-2Ia-Iab',
        apparentMagnitude: '0.42',
        funFact: 'Bételgeuse est l\'une des plus grandes étoiles connues.'
      }
    }
  ];

  selectedStar: any = null;

  constructor() { }

  ngOnInit(): void {
   
  }


  voirDetails(star: any): void {
    this.selectedStar = star;
  }

 
  closeModal(): void {
    this.selectedStar = null;
  }
}