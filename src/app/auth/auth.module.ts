import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistreComponent } from './registre/registre.component';
import { RouterModule } from '@angular/router';


const routes = [
{path : 'registre' , component:RegistreComponent}
]
@NgModule({
  declarations: [
    RegistreComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
