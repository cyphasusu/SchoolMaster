import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-gra-cert',
  templateUrl: './gra-cert.component.html',
  styleUrls: ['./gra-cert.component.css']
})
export class GraCertComponent implements OnInit {

  submitButtonTitle = "Save";
  isLoading = false;

  payload={
    email:'',
    location_excel:'',
    location_pdf:''
  }

  usr_email:any;
  initial_path:any;
  final_path:any;

  constructor(private toastr: ToastrService, private service: ApiService) { }

  ngOnInit() {
  }

 

  toggleLoading = () => {
    //Perform field validation here
    this.isLoading = true;
    this.submitButtonTitle = "Saving...";

    var payload = JSON.stringify(this.payload)
  
    this.service.GRAParamSave(payload).subscribe(data=>{
  
    if(data['responseCode'] === '000'){
           
      this.isLoading = false;
      this.submitButtonTitle = "Save";
      this.showSuccess();
         
    } 
     else {
            this.showFailure()
            this.isLoading = false;
            this.submitButtonTitle = "Save";
       }
  
    });


    // //Faking an API call
    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.submitButtonTitle = "Save";
    //   this.showSuccess();
    // }, 3000);
  };


  showSuccess(){
    this.toastr.success('Saved successfully');
  }

  showFailure(){
    this.toastr.error('Failed to save parameters!', "Error");
  }

}
