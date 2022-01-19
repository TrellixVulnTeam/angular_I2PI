import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root', //con este nombre se puede usar este componente en otros html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'class1';

  ngOnInit(){
    let aux = "HOLA"
    const name = "LUIS"

    aux = "HELLO"
    console.log("Hola mundo")
    console.log(aux + " " + name)
  }
}




