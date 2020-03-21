import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  tryb = 'logowanie';
  isLoading = false;
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
              private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.tryb = params.tryb;
      }
    );
    console.log(this.tryb);
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
   // localStorage.setItem('user', authForm.value.email);
    this.isLoading = true;
    setTimeout(() => {
      this.authService.login(authForm.value.email, authForm.value.password);
      this.isLoading = false;
      this.router.navigate(['']);
    }, 1500);

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
