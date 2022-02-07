import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {
  url:string = 'http://hp-api.herokuapp.com/api/characters/house/gryffindor';
  constructor(private http:HttpClient) { }

  getHouse(){
    return this.http.get(this.url);
  }
}
