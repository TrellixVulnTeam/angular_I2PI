import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Game} from "../games/games.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input() dataInput:Game = {name:"",description:"",plattform:"",img:""};
@Input() indexInput:number = 0;
@Output() selectGame:EventEmitter<any>;
  constructor(private router:Router) {
    this.selectGame = new EventEmitter();
   }

  ngOnInit(): void {
    console.log(this.dataInput);
  }

  buyGame() {
    console.log("Estoy acaaaaa");
    this.selectGame.emit(this.indexInput);
  }
  detailGame(index:any) {
    this.router.navigate(['/game',index])
  }

}  
