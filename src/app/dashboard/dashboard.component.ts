import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';

import { HeroSearchComponent } from '../hero-search/hero-search.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){

  }

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().
      subscribe((heroes) => this.heroes = heroes.slice(1,5));
  }

}
