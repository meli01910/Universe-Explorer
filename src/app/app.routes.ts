import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { GalaxiesComponent } from './pages/galaxies/galaxies.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { SystemeSolaireComponent } from './pages/systeme-solaire/systeme-solaire.component';
import { EtoilesComponent } from './pages/etoiles/etoiles.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'', component:AccueilComponent},
    { path: 'galaxies', component: GalaxiesComponent } ,
     { path: 'actualites', component: ActualitesComponent },
    {path: 'systeme-solaire', component: SystemeSolaireComponent },
    {path:'etoiles', component: EtoilesComponent}


];
