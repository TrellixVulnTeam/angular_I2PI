import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

@Input() carrito:Game [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
