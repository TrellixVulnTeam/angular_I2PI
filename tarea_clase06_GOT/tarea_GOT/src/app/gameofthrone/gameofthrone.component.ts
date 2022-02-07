import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from '../services/gameofthrones.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {
  characters:any;
  constructor(private gotService:GameofthronesService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.gotService.getGotCharacter().subscribe( resp => {
      this.characters = resp;
    }

    )
  }
}
