import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-deletegame',
  templateUrl: './deletegame.component.html',
  styleUrls: ['./deletegame.component.css']
})
export class DeletegameComponent implements OnInit {

  id:any;


  constructor(private gamesService : GamesService, private router:ActivatedRoute, private _route:Router) { 

    this.router.params.subscribe( data => {       
      this.id =data['id'];
      this.gamesService.deleteGame(this.id).subscribe(resp =>{
        let data:any = resp;
      });      
    });

    this._route.navigate(['/games'])    


  }

  ngOnInit(): void {
  }


}
