import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {PracownicyService} from "../pracownicy.service";

@Component({
  selector: 'app-pracownicy-dane',
  templateUrl: './pracownicy-dane.component.html',
  styleUrls: ['./pracownicy-dane.component.css']
})
export class PracownicyDaneComponent implements OnInit {

  id: number;
  user;


  constructor(private route: ActivatedRoute,
              public pracownicyService: PracownicyService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.user = this.pracownicyService.users[this.id];
        console.log(this.user);
      }
    );

  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
  }

  usun() {
    this.pracownicyService.usunPracownika(this.user[3]);
  }

  edytuj(form: NgForm) {
    this.pracownicyService.edytujPracownika(this.user[3], form.value.imie, form.value.nazwisko, form.value.stanowisko, this.user[4]);
  }

}
