import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CennikComponent } from './cennik/cennik.component';

const appRoutes: Routes = [
  {
    path: 'auth/:tryb', component: AuthComponent, children: [
      {path: ':tryb', component: AuthComponent},
    ]
  },
  {path: 'cennik', component: CennikComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
