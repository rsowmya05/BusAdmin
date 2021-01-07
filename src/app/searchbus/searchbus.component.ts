import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {

  registerForm: FormGroup ;
  
  submitted=false;
  constructor(private formBuilder:FormBuilder) {
      this.registerForm=this.formBuilder.group({});
  }
  

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      
      boardingPoint:['',[Validators.required]],
      destPoint:['',Validators.required]
      
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

    // alert('Details Added successfully');

  }
}
