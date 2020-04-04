import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {KlienciService} from '../klienci.service';

@Component({
  selector: 'app-klient-dane',
  templateUrl: './klient-dane.component.html',
  styleUrls: ['./klient-dane.component.css']
})
export class KlientDaneComponent implements OnInit {
  zipPattern = /^\d{2}-\d{3}$/;
  peselPattern = /^\d{11}$/;
  nipPattern = /^\d{10}$/;
  regonPattern = /^\d{9}$/;
  zipcode = false;
  czyFirma = false;
  pesel = false;
  nip = false;
  regon = false;
  id: number;
  user;
  peselPom: string;
  regonPom: string;

  constructor(private route: ActivatedRoute,
              public klienciService: KlienciService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.user = this.klienciService.users[this.id];
        console.log(this.user);
        this.peselPom = this.user[7];
        this.regonPom = this.user[8];
        console.log(this.peselPom + " -  - " + this.regonPom);
        if (this.user[7] === '') {
          this.czyFirma = true;
        } else {
          this.czyFirma = false;
        }
      }
    );

  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
  }

  usun() {
    this.klienciService.usunKlienta(+this.user[0], this.user[3]);
  }

  edytuj(form: NgForm) {
    this.klienciService.edytujKlienta(this.user[3], form.value.imie, form.value.nazwisko, form.value.ulica, form.value.miasto, form.value.kodPocztowy, form.value.pesel, form.value.regon, form.value.nip, this.user[10]);
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
    if (this.czyFirma) {
      this.user[7] = '';
      this.user[8] = this.regonPom;
    } else {
      this.user[8] = '';
      this.user[7] = this.peselPom;
    }
  }
}
