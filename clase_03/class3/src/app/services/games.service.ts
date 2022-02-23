import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private items:any = [{
    name:"Super Mario Kart",
    description: "Juego de aventuras",
    platform : "Nintendo",
    img : "./assets/images/mariokart.jpg"
    },
    {
    name:"Gran turismo",
    description: "Juego de carreras",
    platform : "PlayStation",
    img : "./assets/images/gt.jpg"
    },
    {
    name:"GTA",
    description: "Juego de aventuras",
    platform : "Todas las plataformas",
    img : "./assets/images/gta.jpg"
    },
    {
    name:"Mortal Kombat",
    description: "Juego de peleas",
    platform : "Todas las plataformas",
    img : "./assets/images/mk.jpg"
    },
    {
    name:"Pokemon",
    description: "Juego de estrategia y aventura",
    platform : "Nintendo Switch",
    img : "./assets/images/pokemon.jpg"
    }]
  constructor() { }


  getData() {
    console.log(this.items);
    return this.items;
  }

  getItem(index: string | number) {
    return this.items[index]
  }
}



https://jira.tools.rfsc.cl/browse/QA22-2174
https://jira.tools.rfsc.cl/browse/QA22-2150
https://jira.tools.rfsc.cl/browse/QA22-2150
https://jira.tools.rfsc.cl/browse/QA22-2145