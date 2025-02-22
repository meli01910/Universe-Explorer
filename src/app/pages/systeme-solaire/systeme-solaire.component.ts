// planets.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

interface Planet {
  name: string;
  description: string;
  image: string;
  details?: {
    distanceFromSun: string;
    temperature: string;
    orbitalPeriod: string;
    moons: string;
    funFact: string;
  };
}

@Component({
  selector: 'app-planets',
  templateUrl: './systeme-solaire.component.html',
  styleUrls: ['./systeme-solaire.component.scss'],
  imports:[CommonModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    
  ]
})
export class SystemeSolaireComponent implements OnInit {
  planets: Planet[] = [
    {
      name: 'Mercure',
      image: 'https://media.istockphoto.com/id/499771042/fr/photo/mercury-de-couleur.webp?a=1&b=1&s=612x612&w=0&k=20&c=0oM9CoCoaXdtD4qQ9pzk3kt5P0ighRRlyFirxV1Wbjs=',
      description: 'La planète la plus proche du Soleil.',
      details: {
        distanceFromSun: '57,91 millions de km',
        temperature: '-173°C à 427°C',
        orbitalPeriod: '88 jours terrestres',
        moons: 'Aucune',
        funFact: 'Mercure n\'a pratiquement pas d\'atmosphère.',
      },
    },
    {
      name: 'Vénus',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVudXN8ZW58MHx8MHx8fDA%3D',
      description: 'Une planète connue pour son effet de serre extrême.',
      details: {
        distanceFromSun: '108,2 millions de km',
        temperature: '462°C en moyenne',
        orbitalPeriod: '225 jours terrestres',
        moons: 'Aucune',
        funFact: 'Vénus est la planète la plus chaude du système solaire.',
      },
    },
    {
      name: 'Terre',
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbmV0ZXxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Notre planète, la seule connue pour abriter la vie.',
      details: {
        distanceFromSun: '149,6 millions de km',
        temperature: '15°C en moyenne',
        orbitalPeriod: '365,25 jours',
        moons: '1 (La Lune)',
        funFact: 'La Terre est la seule planète connue pour abriter la vie.',
      },
    },
    {
      name: 'Mars',
      image: 'https://media.istockphoto.com/id/647269852/fr/photo/plan%C3%A8te-mars.webp?a=1&b=1&s=612x612&w=0&k=20&c=dHEK5mLlKsDwS0isSCWzos7C20lwkB10f0K_q_7r4DU=',
      description: 'La planète rouge, cible de nombreuses missions d\'exploration.',
      details: {
        distanceFromSun: '227,9 millions de km',
        temperature: '-125°C à 20°C',
        orbitalPeriod: '687 jours terrestres',
        moons: '2 (Phobos et Deimos)',
        funFact: 'Mars possède la plus haute montagne du système solaire, Olympus Mons.',
      },
    },
    {
      name: 'Jupiter',
      image: 'https://plus.unsplash.com/premium_photo-1717550852933-972e61c7d6c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anVwaXRlcnxlbnwwfHwwfHx8MA%3D%3D',
      description: 'La plus grande planète du système solaire.',
      details: {
        distanceFromSun: '778,5 millions de km',
        temperature: '-145°C en moyenne',
        orbitalPeriod: '4 331 jours terrestres (environ 12 ans)',
        moons: '79 (dont Europe, Ganymède et Callisto)',
        funFact: 'Jupiter est si grande qu\'elle pourrait contenir 1 300 Terres.',
      },
    },
    {
      name: 'Saturne',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0dXJuZXxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Célèbre pour ses magnifiques anneaux.',
      details: {
        distanceFromSun: '1,43 milliards de km',
        temperature: '-178°C en moyenne',
        orbitalPeriod: '10 747 jours terrestres (environ 29 ans)',
        moons: '83 (dont Titan, la plus grande lune de Saturne)',
        funFact: 'Saturne a des anneaux composés principalement de glace et de poussière.',
      },
    },
    {
      name: 'Uranus',
      image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJhbnVzfGVufDB8fDB8fHww',
      description: 'La planète glacée qui tourne sur le côté.',
      details: {
        distanceFromSun: '2,87 milliards de km',
        temperature: '-224°C en moyenne',
        orbitalPeriod: '30 589 jours terrestres (environ 84 ans)',
        moons: '27 (dont Titania et Oberon)',
        funFact: 'Uranus tourne sur le côté, probablement à cause d\'une collision géante.',
      },
    },
    {
      name: 'Neptune',
      image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbnVzfGVufDB8fDB8fHww',
      description: 'La dernière planète, balayée par des vents supersoniques.',
      details: {
        distanceFromSun: '4,5 milliards de km',
        temperature: '-214°C en moyenne',
        orbitalPeriod: '59 800 jours terrestres (environ 165 ans)',
        moons: '14 (dont Triton)',
        funFact: 'Neptune a les vents les plus rapides du système solaire, atteignant 2 100 km/h.',
      },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/']);
  }

  selectedPlanet: any = null;

  voirDetails(planet: any) {
    this.selectedPlanet = planet;
  }

  closeModal() {
    this.selectedPlanet = null;
  }
}