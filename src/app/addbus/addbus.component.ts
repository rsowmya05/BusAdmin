import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {


  registerForm: FormGroup ;
  //busname:string="hello";
  submitted=false;
  constructor(private formBuilder:FormBuilder) {
      this.registerForm=this.formBuilder.group({});
  }
   
  
  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      //busname:['',[Validators.required, Validators.minLength(6),Validators.pattern('^[A-Z][A-Za-z0-9_-]{6,}$')]],
      busname:['',[Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{6,}$')]],
      seats:['',[Validators.required,Validators.min(0)]],
      boardingPoint:['',[Validators.required]],
      destPoint:['',Validators.required],
      arrival:['',Validators.required],
      dept:['',Validators.required],
      duration:['',[Validators.required,Validators.min(0.1)]],
      fare:['',[Validators.required,Validators.min(100)]],
      date:['',Validators.required]
    })
  }

  get f() { 
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;

    if (this.registerForm.invalid) 
    {
      return;
    }

    alert('Details Added successfully');

  }
}
