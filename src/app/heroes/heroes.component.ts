import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  constructor(private heroService: HeroService){
  }
  heroes: Hero[] = [];
  selectedHero?: Hero;
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  
  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
