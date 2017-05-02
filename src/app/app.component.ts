import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 11, name: 'Mr Nice'},
  {id: 12, name: 'Superman'},
  {id: 13, name: 'Batman'}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
