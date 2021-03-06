import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {CennikComponent} from './cennik/cennik.component';
import {KlienciComponent} from './klienci/klienci.component';
import {KlientDaneComponent} from './klienci/klient-dane/klient-dane.component';
import {PracownicyComponent} from "./pracownicy/pracownicy.component";
import {PracownicyDaneComponent} from "./pracownicy/pracownicy-dane/pracownicy-dane.component";
import {PracownikNowyComponent} from "./pracownicy/pracownik-nowy/pracownik-nowy.component";
import {ProfilComponent} from "./profil/profil.component";
import {RezerwacjaComponent} from "./rezerwacja/rezerwacja.component";
import {HistoriaComponent} from "./historia/historia.component";
import {ProgramLojalnosciowyComponent} from "./program-lojalnosciowy/program-lojalnosciowy.component";
import {MonitoringComponent} from "./monitoring/monitoring.component";
import {DostawyComponent} from "./dostawy/dostawy.component";
import {DaneKontaktoweComponent} from "./dane-kontaktowe/dane-kontaktowe.component";

const appRoutes: Routes = [
  {path: '', component: DaneKontaktoweComponent},
  {
    path: 'auth/:tryb', component: AuthComponent, children: [
      {path: ':tryb', component: AuthComponent},
    ]
  },
  {path: 'cennik', component: CennikComponent},
  {path: 'rezerwacja', component: RezerwacjaComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'program-lojalnosciowy', component: ProgramLojalnosciowyComponent},
  {path: 'monitoring', component: MonitoringComponent},
  {path: 'dostawy', component: DostawyComponent},
  {path: 'profil', component: ProfilComponent},
  {
    path: 'klienci', component: KlienciComponent,
    children: [
      {path: ':id', component: KlientDaneComponent},
      {path: 'auth/:tryb', component: AuthComponent},
    ]
  },
  {
    path: 'pracownicy', component: PracownicyComponent,
    children: [
      {path: 'dodaj-pracownika', component: PracownikNowyComponent},
      {path: ':id', component: PracownicyDaneComponent},
      //    {path: 'auth/:tryb', component: AuthComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
