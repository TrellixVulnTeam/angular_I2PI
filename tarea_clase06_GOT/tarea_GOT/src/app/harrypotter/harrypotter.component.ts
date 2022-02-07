import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {
  characters:any;
  constructor(private hpService:HarrypotterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters() {
    this.hpService.getHouse().subscribe(resp => {
      this.characters = resp;
    })
  }
}
