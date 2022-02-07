import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-detailgame',
  templateUrl: './detailgame.component.html',
  styleUrls: ['./detailgame.component.css']
})
export class DetailgameComponent implements OnInit {

game:any;


  constructor(private activatedRouter:ActivatedRoute,
              private gamesService:GamesService) { 
this.activatedRouter.params.subscribe(data => {
  console.log(data['id']);
  this.game = this.gamesService.getItem(data['id']);
  console.log(this.game);
});

  }

  ngOnInit(): void {}
  

}
  