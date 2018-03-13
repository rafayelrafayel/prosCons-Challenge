import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ProsDetailComponent} from './components/pros-detail/pros-detail.component';
import {ConsDetailComponent} from './components/cons-detail/cons-detail.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/pros/:id', component: ProsDetailComponent },
  { path: 'detail/cons/:id', component: ConsDetailComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
