import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import {customValidationEmail,passwordEven} from '../../app/create-employee';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit {

  Registration : FormGroup;
  submitted : boolean = false;

  arrCountry : any = [];
  arrState : any = [];
  arrCity : any = [];

  State : any = [{name:'Gujarat',value:'Gujarat'}];
  City : any = [{name:'Surat',value:'Surat'}];

  state : any = [{name:'California',value:'California'}];
  city : any = [{name:'Alabama',value:'Alabama'}];


  hobby: any = [{name:'Cricket',value:'cricket',checked:false},
  {name:'Football',value:'football',checked:false},
  {name:'Hockey',value:'hockey',checked:false},
  {name:'Vollyball',value:'vollyball',checked:false}

];


  constructor(private fb : FormBuilder) {

    this.Registration = this.fb.group({

      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      gender:['',Validators.required],
      company:[''],
      address:[''],
      country: ['',Validators.required],
      state: ['',Validators.required],
      pincode:['',Validators.required],
      city:['',Validators.required]

  },
  {
    validator: [customValidationEmail('email'),passwordEven('password','confirmPassword')]
  })

  }


  ngOnInit(): void {
  }

  addForm()
  {
    this.submitted = true;

    if(this.Registration.invalid)
    {
      return;
    }
    else
    {
      alert('Form submitted successfully check console');
      console.log(this.Registration.value);
      this.Registration.reset;
    }
    
  }

  addCountry(event)
  {
    console.log(event.target.value);

    if(event.target.value == 'India')
    {
          this.arrState = this.State;
          this.arrCity = this.City; 
          console.log(this.arrState);
          console.log(this.arrCity);       
    }
    else
    {
      if(event.target.value == 'Usa')
      {
        this.arrState = this.state;
        this.arrCity = this.city;
        console.log(this.arrState);
          console.log(this.arrCity);
      }
    }
   
    
    }
  }


