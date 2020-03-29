import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthComponent} from './auth/auth.component';
import {FormsModule} from '@angular/forms';
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
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
