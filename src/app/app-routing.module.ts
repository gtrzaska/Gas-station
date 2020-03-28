import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CennikComponent } from './cennik/cennik.component';
import { KlienciComponent } from './klienci/klienci.component';
import { KlientDaneComponent } from './klienci/klient-dane/klient-dane.component';

const appRoutes: Routes = [
  {
    path: 'auth/:tryb', component: AuthComponent, children: [
      {path: ':tryb', component: AuthComponent},
    ]
  },
  {path: 'cennik', component: CennikComponent},
  {path: 'klienci', component: KlienciComponent,
    children: [
      {path: ':id', component: KlientDaneComponent},
      {path: 'auth/:tryb', component: AuthComponent},
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
