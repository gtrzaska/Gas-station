import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {first} from "rxjs/operators";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  tryb = 'logowanie';
  tryb2 = 'logowanie';
  poprawneDane = true;
  public isLoading = false;
  zipPattern = /^\d{2}-\d{3}$/;
  peselPattern = /^\d{11}$/;
  nipPattern = /^\d{10}$/;
  regonPattern = /^\d{9}$/;
  zipcode = false;
  czyFirma = false;
  pesel = false;
  nip = false;
  regon = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public authService: AuthService
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.tryb = params.tryb;
        this.tryb2 = params.tryb;
        if (this.tryb2 == 'rejestracja2') {
          this.tryb = 'rejestracja'
        }
      }
    );
    console.log(this.tryb);
  }

  onSubmit(authForm: NgForm) {
    this.isLoading = true;
    this.authService.user.subscribe(user => {
      console.log(user);
      this.isLoading = false;
    });
    if (this.tryb === 'logowanie') {

      this.authService.login(authForm.value.email, authForm.value.password);
    } else if (this.tryb === 'rejestracja') {
      this.authService.signup(authForm.value.imie, authForm.value.nazwisko, authForm.value.email,
        authForm.value.password, authForm.value.ulica, authForm.value.miasto,
        authForm.value.kodPocztowy, authForm.value.pesel, authForm.value.regon, authForm.value.nip, this.tryb2)
    }


  }

  kodPocztowyV(kod: string) {
    this.zipcode = this.zipPattern.test(kod);
    return this.zipcode;
  }

  peselV(pesel: string) {
    this.pesel = this.peselPattern.test(pesel);
    return this.pesel;
  }

  nipV(nip: string) {
    this.nip = this.nipPattern.test(nip);
    return this.nip;
  }

  regonV(nip: string) {
    this.regon = this.regonPattern.test(nip);
    return this.regon;
  }

  onFirma() {
    this.czyFirma = !this.czyFirma;
    this.pesel = this.czyFirma;
    this.regon = !this.czyFirma;
  }
}
