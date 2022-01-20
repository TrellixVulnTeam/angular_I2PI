import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private items:any[] = [
    {
      name: "Super mario kart",
      description: "Carreras",
      plattform: "Super Nintendo"
    },
    {
      name: "Mortal Kombat",
      description: "Peleas",
      plattform: "Super Nintendo"
    },
    {
      name: "Kirby",
      description: "Plataformas",
      plattform: "Super Nintendo"
    }


  ]
  constructor() { }

  getGames(){
    console.log("getGames() en games.service.ts:")
    console.log(this.items)
    return this.items;
  }
 
}

  