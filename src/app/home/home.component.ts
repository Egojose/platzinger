import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

friends : User[];

  constructor() { 
    let myUser1: User =  {
      nick: 'Jose',
      subnick: 'Hola',
      mail: 'jose@jose.com',
      edad: 35,
      friend: true,
      uid: 1
    };

    let myUser2: User =  {
      nick: 'Juan',
      subnick: 'hello',
      mail: 'juan@juan.com',
      edad: 30,
      friend: true,
      uid: 2
    };

    let myUser3: User =  {
      nick: 'Pedro',
      subnick: 'hi',
      mail: 'Pedro@pedro.com',
      edad: 25,
      friend: true,
      uid: 3
    };

    let myUser4: User =  {
      nick: 'Ana',
      subnick: 'anita',
      mail: 'ana@ana.com',
      edad: 30,
      friend: true,
      uid: 4
    };

    let myUser5: User =  {
      nick: 'Luis',
      subnick: 'lucho',
      mail: 'luis@luis.com',
      edad: 38,
      friend: true,
      uid: 5
    };
    this.friends = [myUser1, myUser2, myUser3, myUser4, myUser5]
  }

  ngOnInit() {
  }

}
