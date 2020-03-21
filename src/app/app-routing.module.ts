import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  {
    path: 'auth/:tryb', component: AuthComponent, children: [
      {path: ':tryb', component: AuthComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
