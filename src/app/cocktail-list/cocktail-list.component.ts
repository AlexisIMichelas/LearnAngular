// cocktail-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Cocktail, CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
