import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameofthronesService {
  url:string = 'https://thronesapi.com/api/v2/Characters';

  constructor(private http:HttpClient) { }

  getGotCharacter():Observable<any> {
    return this.http.get(this.url);
  }
}


