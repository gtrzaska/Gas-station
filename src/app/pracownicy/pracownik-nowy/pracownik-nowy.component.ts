import {Component, OnInit} from '@angular/core';
import {PracownicyService} from "../pracownicy.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-pracownik-nowy',
  templateUrl: './pracownik-nowy.component.html',
  styleUrls: ['./pracownik-nowy.component.css']
})
export class PracownikNowyComponent implements OnInit {

  constructor(public pracownicyService: PracownicyService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.pracownicyService.dodajPracownika(form.value.imie, form.value.nazwisko, form.value.email, form.value.haslo, form.value.stanowisko)
  }

}
