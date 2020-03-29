import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {ProfilService} from "./profil.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  zipPattern = /^\d{2}-\d{3}$/;
  peselPattern = /^\d{11}$/;
  nipPattern = /^\d{10}$/;
  regonPattern = /^\d{9}$/;
  zipcode = false;
  pesel = false;
  nip = false;
  regon = false;
  isAuth = false;
  public email: string;
  public uprawnienia: number;

  constructor(private authService: AuthService, public profilService: ProfilService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
      if (this.isAuth) {
        this.email = user.email;
        this.uprawnienia = +user.uprawnienia;
      }
    });
    this.profilDane();
  }

  profilDane() {
    this.profilService.profil(this.email, +this.uprawnienia)
  }

  edytuj(form: NgForm) {
    if (this.uprawnienia > 0) {
      this.profilService.edytujProfil(this.email, this.uprawnienia, form.value.imie, form.value.nazwisko, form.value.haslo, form.value.stanowisko);
    } else {
      this.profilService.edytujProfil(this.email, this.uprawnienia, form.value.imieu, form.value.nazwiskou, form.value.haslou, null, form.value.ulica, form.value.miasto, form.value.kodPocztowy, form.value.pesel, form.value.regon, form.value.nip);
    }
  }

  usun() {
    this.profilService.usunProfil(this.email, this.uprawnienia);
    this.authService.logout();
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

}
