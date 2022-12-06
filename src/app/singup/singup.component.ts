import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signForm!:FormGroup

  constructor(private formBuilder: FormBuilder,private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signForm= this.formBuilder.group({
      name:[''],
      mobile:[''],
      email:[''],
      password:['']
    })
  }
  signUp(){
    this._http.post<any>("http://localhost:3000/signup",this.signForm.value)
    .subscribe(res=>{
      alert("register succesfully");
      this.signForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("kuch to garbar hai daya");
    }
    )


  }

}
