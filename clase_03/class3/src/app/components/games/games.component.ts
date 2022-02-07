import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

export interface Game {
  name:string,
  description:string,
  plattform:string,
  img:string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

items:Game [] = [];  
carrito:Game [] = [];

  constructor(private gamesService:GamesService) {}  

  ngOnInit(): void {
    this.gamesService.getData();
    this.setUp();
  }

  setUp() {
    this.items = this.gamesService.getData();
  }

  addCarrito(element:any) {
    console.log("se agrega el index antes del get item: ",element);
    console.log(this.gamesService.getItem(element));
    this.carrito.push(this.gamesService.getItem(element));
  }

}
