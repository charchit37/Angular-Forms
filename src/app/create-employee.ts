import {FormGroup, FormBuilder} from '@angular/forms';

export function customValidationEmail(controlName: string)  {
  

  return (formGroup : FormGroup) => {
    // console.log(formGroup.controls[controlName]);
    const email = formGroup.controls[controlName];

    const emailDomain = email.value.substring(email.value.lastIndexOf('@') + 1)
    const emailFirst =  email.value.indexOf('@');


    if (email.errors) {
      // return if another validator has already found an error on the matchingControl
      return;
      }



    if((emailDomain == 'gmail.com' || emailDomain == 'yahoo.com' || emailDomain == 'hotmail.com') && emailFirst >= 1)
    {
        email.setErrors(null);
    }
    else
    {
        email.setErrors({emailValid:true})
    }



  }        
  
}

export function passwordEven(controlName : string , matchingControlName : string){

  return (formGroup : FormGroup) => {

        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[matchingControlName];

      if(password.errors)
      {
        return;
      }
      else
      {
        if(isNaN(password.value))
        {
            password.setErrors({passwordValid:true});
        }
        else
        {
            password.setErrors(null);
        }
      }
      
      if(confirmPassword.errors)
      {
                return;
      }
      else
      {

          if(password.value === confirmPassword.value)
          {
                return null;
          }
          else
          {
                confirmPassword.setErrors({confirmPasswordValid:true});
          }  
      
      }
      
  }

}