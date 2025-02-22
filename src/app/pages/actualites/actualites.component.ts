import { Component, NgModule, OnInit } from '@angular/core';
import axios from 'axios'; 
import * as $ from 'jquery';


import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss'],
 imports: [ CommonModule]

})

export class ActualitesComponent implements OnInit {
  newsList: any[] = [];
  private nasaApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  
  constructor() {}

  ngOnInit(): void {
    // Récupérer les actualités avec Axios
    console.log(typeof $);

    axios.get(this.nasaApiUrl)
      .then((response) => {
        this.newsList = [response.data]; 
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des actualités :', error);
      });
  }

}
