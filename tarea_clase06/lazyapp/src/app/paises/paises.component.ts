import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:any;
  constructor(private paisesServices:PaisesService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(){
    this.paisesServices.getPaises().subscribe(resp => {
      this.paises = resp;
      console.log(this.paises);
    })
  }

}
  