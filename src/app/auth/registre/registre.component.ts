import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {


  registForm !: FormGroup ;

  constructor(private fb : FormBuilder){}

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

  }
}
