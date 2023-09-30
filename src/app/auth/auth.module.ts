import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistreComponent } from './registre/registre.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes = [
{path : 'registre' , component:RegistreComponent}
]
@NgModule({
  declarations: [
    RegistreComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
