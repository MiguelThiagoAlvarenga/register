import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutRegisterComponent } from "./components/layout-register/layout-register.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import {RegisterPersonComponent} from "./components/register-person/register-person.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'person', component: LayoutRegisterComponent },
  { path: 'register-person', component: RegisterPersonComponent },
  { path: 'update-person/:id', component: RegisterPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
