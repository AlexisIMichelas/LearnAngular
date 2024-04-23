// cocktail.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Cocktail[] {
    return [
      { nom: 'Mojito', prix: 8.5, image: 'mojito.jpg' },
      { nom: 'Cosmopolitan', prix: 9.0, image: 'cosmopolitan.jpg' },
      { nom: 'Margarita', prix: 7.5, image: 'margarita.jpg' }
      // Ajoutez autant de cocktails que vous le souhaitez
    ];
  }
}

export interface Cocktail {
  nom: string;
  prix: number;
  image: string;
}
