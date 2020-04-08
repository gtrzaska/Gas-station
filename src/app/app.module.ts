import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthComponent} from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CennikComponent} from './cennik/cennik.component';
import {KlienciComponent} from './klienci/klienci.component';
import {KlienciListaComponent} from './klienci/klienci-lista/klienci-lista.component';
import {KlientComponent} from './klienci/klienci-lista/klient/klient.component';
import {KlientDaneComponent} from './klienci/klient-dane/klient-dane.component';
import {PracownicyComponent} from './pracownicy/pracownicy.component';
import {PracownicyListaComponent} from './pracownicy/pracownicy-lista/pracownicy-lista.component';
import {PracownicyDaneComponent} from './pracownicy/pracownicy-dane/pracownicy-dane.component';
import {PracownikComponent} from './pracownicy/pracownicy-lista/pracownik/pracownik.component';
import {PracownikNowyComponent} from './pracownicy/pracownik-nowy/pracownik-nowy.component';
import {ProfilComponent} from './profil/profil.component';
import {RezerwacjaComponent} from './rezerwacja/rezerwacja.component';
import {RezerwacjaDodajComponent} from './rezerwacja/rezerwacja-dodaj/rezerwacja-dodaj.component';
import {RezerwacjaListaComponent} from './rezerwacja/rezerwacja-lista/rezerwacja-lista.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {HistoriaComponent} from './historia/historia.component';
import {HistoriaDaneComponent} from './historia/historia-dane/historia-dane.component';
import {MonitoringComponent} from './monitoring/monitoring.component';
import {ProgramLojalnosciowyComponent} from './program-lojalnosciowy/program-lojalnosciowy.component';
import {DostawyComponent} from './dostawy/dostawy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    CennikComponent,
    KlienciComponent,
    KlienciListaComponent,
    KlientComponent,
    KlientDaneComponent,
    PracownicyComponent,
    PracownicyListaComponent,
    PracownicyDaneComponent,
    PracownikComponent,
    PracownikNowyComponent,
    ProfilComponent,
    RezerwacjaComponent,
    RezerwacjaDodajComponent,
    RezerwacjaListaComponent,
    HistoriaComponent,
    HistoriaDaneComponent,
    MonitoringComponent,
    ProgramLojalnosciowyComponent,
    DostawyComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()

  ],
  providers: [HeaderComponent,
    MatDatepickerModule,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
