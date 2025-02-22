
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

interface Galaxy {
  name: string;
  description: string;
  image: string;
  details?: {
    distanceFromEarth: string;
    type: string;
    diameter: string;
    stars: string;
    funFact: string;
  };
}

@Component({
  selector: 'app-galaxies',
  templateUrl: './galaxies.component.html',
  styleUrls: ['./galaxies.component.scss'],
  imports: [CommonModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
  ]
})
export class GalaxiesComponent implements OnInit {
  galaxies: Galaxy[] = [
    {
      name: 'Voie Lactée',
      image: 'https://cnes.fr/sites/default/files/styles/16x9_lg/public/2024-12/voie-lactee.jpg.webp?itok=gt9Bvt1R',
      description: 'Notre galaxie, abritant des milliards d\'étoiles.',
      details: {
        distanceFromEarth: '0 (nous y sommes)',
        type: 'Spirale barrée',
        diameter: '100 000 années-lumière',
        stars: '100 à 400 milliards',
        funFact: 'Le Soleil met environ 230 millions d\'années pour orbiter autour du centre galactique.',
      },
    },
    {
      name: 'Andromède',
      image: 'https://cnes.fr/sites/default/files/styles/16x9_lg/public/2025-02/galaxie-andromede.jpg.webp?itok=gjmShw5m',
      description: 'La galaxie d\'Andromède, notre plus proche voisine.',
      details: {
        distanceFromEarth: '2,537 millions d\'années-lumière',
        type: 'Spirale',
        diameter: '220 000 années-lumière',
        stars: '1 000 milliards',
        funFact: 'Andromède et la Voie Lactée entreront en collision dans environ 4,5 milliards d\'années.',
      },
    },
    {
      name: 'Galaxie du Sombrero',
      image: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=60,format=auto/sources/images/diaporama/2085_-_30_ans_hubble/21%20-%20sombrero.jpg',
      description: 'Une galaxie célèbre pour son apparence de chapeau mexicain.',
      details: {
        distanceFromEarth: '29,3 millions d\'années-lumière',
        type: 'Spirale',
        diameter: '50 000 années-lumière',
        stars: '100 milliards',
        funFact: 'La Galaxie du Sombrero possède un énorme trou noir supermassif en son centre.',
      },
    },
    {
      name: 'Galaxie du Tourbillon',
      image: 'https://www.astroshop.de/CMS/images/text/category/messier_51_dietrich_singen_all.jpg',
      description: 'Une galaxie spirale en interaction avec une galaxie naine.',
      details: {
        distanceFromEarth: '23 millions d\'années-lumière',
        type: 'Spirale',
        diameter: '60 000 années-lumière',
        stars: '100 milliards',
        funFact: 'La Galaxie du Tourbillon est souvent utilisée pour étudier les interactions galactiques.',
      },
    },
    {
      name: 'Galaxie du Triangle',
      image: 'https://millenniumphoton.com/wp-content/uploads/2018/03/sjDr7IO1gS84_16536x16536_wmhqkGbg.jpg',
      description: 'Une galaxie spirale dans le groupe local.',
      details: {
        distanceFromEarth: '2,73 millions d\'années-lumière',
        type: 'Spirale',
        diameter: '50 000 années-lumière',
        stars: '40 milliards',
        funFact: 'La Galaxie du Triangle est la troisième plus grande galaxie du groupe local.',
      },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/']);
  }

  selectedGalaxy: any = null;

  voirDetails(galaxy: any) {
    this.selectedGalaxy = galaxy;
  }

  closeModal() {
    this.selectedGalaxy = null;
  }
}