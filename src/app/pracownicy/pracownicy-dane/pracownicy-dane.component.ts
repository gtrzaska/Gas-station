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
  peselPom: string;
  regonPom: string;

  constructor(private route: ActivatedRoute,
              public pracownicyService: PracownicyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.user = this.pracownicyService.users[this.id];
        console.log(this.user);
        console.log(this.peselPom + " -  - " + this.regonPom);
      }
    );

  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
  }

  usun() {
    // this.klienciService.usunKlienta(this.user[3]);
  }

  edytuj(form: NgForm) {
    // this.klienciService.edytujKlienta(this.user[3], form.value.imie, form.value.nazwisko, form.value.ulica, form.value.miasto, form.value.kodPocztowy, form.value.pesel, form.value.regon, form.value.nip);
  }

}
