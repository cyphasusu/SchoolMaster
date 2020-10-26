import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';



@Component ({
   selector: 'my-app',
   encapsulation: ViewEncapsulation.None,
   templateUrl: '/login.component.html',
   styleUrls: ['/login.component.css']
})


export class LoginComponent  {

    submitButtonTitle = "Save";
    isLoading = false;
  
    payload={
      email:'',
      password:''
    }
  
    usr_email:any;
    user_password:any;

    constructor( private router: Router, private toastr: ToastrService, private service: ApiService) {
    }



    toggleLoading = () => {
        //Perform field validation here
        this.isLoading = true;
        this.submitButtonTitle = "Signing In...";
    
        var payload = JSON.stringify(this.payload)
      
        this.service.Login(payload).subscribe(data=>{
      
        if(data['responseCode'] === '000'){
               
          this.isLoading = false;
          this.submitButtonTitle = "Sign In";
          //this.showSuccess();
          this.router.navigateByUrl('dashboard/home');
             
        } else if(data['responseCode'] === '020'){
            this.showWrongCredentials()
            this.isLoading = false;
            this.submitButtonTitle = "Sign In";
        }
         else {
                this.showFailure()
                this.isLoading = false;
                this.submitButtonTitle = "Sign In";
           }
      
        });
    
      };
    
    
      showSuccess(){
        this.toastr.success('Saved successfully');
      }
    
      showFailure(){
        this.toastr.error('Failed to sign in!', "Error");
      }

      showWrongCredentials(){
        this.toastr.error('Wrong email or password!', "Error");
      }
    

    // login() {
    //     this.router.navigateByUrl('dashboard/home');
    // }


}