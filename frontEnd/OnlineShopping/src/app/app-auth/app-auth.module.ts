import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
];

const routes: Routes  = [
  {path: '', redirectTo:'/sign-in', pathMatch:'full' },
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '**', redirectTo:'/sign-in'}
];


@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    modules
  ]
})
export class AppAuthModule { }
