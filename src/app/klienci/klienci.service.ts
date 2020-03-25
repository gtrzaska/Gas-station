import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class KlienciService {
  /*
  * [0] id
  * [1] imie
  * [2] nazwisko
  * [3] email
  * [4] ulica
  * [5] miasto
  * [6] kod pocztowy
  */
  users = [[0, 'Janusz', 'Kołolsky', 'januszlpg@luj.com', 'Długa 13', 'Kraków', '12-345'],
    [1, 'Władysław', 'Jagiełło', 'wladziu@luj.com', 'Piwna 11', 'Kraków', '76-366'],
    [2, 'imie', 'nazwisko', 'mail@luj.com', 'Ulica 13', 'Zbąszynek', '12-555'],
    [3, 'Bruce', 'Lee', 'blee@luj.com', 'Poniedziałkowy Dół 7', 'Kraków', '12-355'],
  ];
}
