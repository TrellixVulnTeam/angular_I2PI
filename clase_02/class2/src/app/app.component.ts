import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { GamesService } from './services/games.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'Tarea';
  data:string = '';

  
  
  constructor(private gamesService:GamesService) {


  }
  
  ngOnInit(): void {
    console.log("Inicio app.component.ts");
    this.data = "Luis Palomino";
  }

  verData() {
    this.gamesService.getGames();
  }
  
}



