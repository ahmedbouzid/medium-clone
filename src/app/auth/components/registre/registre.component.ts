import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../store/actions';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {


  registForm !: FormGroup ;

  constructor(
    private fb : FormBuilder,
    private store : Store

    ){}

  ngOnInit(): void {
this.initializeForm()

  }

  initializeForm(){
    this.registForm = this.fb.group({
      username : ['' , [Validators.required]] ,
      email : ['' , [Validators.required]] ,
      password : ['' , [Validators.required]]
    })
  }

  submitForm(){
    if(this.registForm.valid)
    console.log(this.registForm.value);
    this.store.dispatch(registerAction(this.registForm.value))

  }
}
