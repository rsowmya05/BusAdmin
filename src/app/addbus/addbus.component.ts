import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  
  myForm:FormGroup;
  
  constructor() { 
    
    this.myForm = new FormGroup({
      busname:new FormControl(null,Validators.required),
      seats:new FormControl(null,Validators.required),
      boardingPoint:new FormControl(null,Validators.required),
      destPoint:new FormControl(null,Validators.required),
      arrival:new FormControl(null,Validators.required),
      dept:new FormControl(null,Validators.required),
      duration:new FormControl(null,Validators.required),
      date:new FormControl(null,Validators.required),
      fare:new FormControl(null,Validators.required)
    });


  }    
  public get busname() : any {
    return this.myForm.get("busname");
  }

  
  ngOnInit(): void {
  }


}
