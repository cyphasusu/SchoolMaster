import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component ({
   selector: 'app-header-component',
   templateUrl: '/home.component.html',
})


export class HomeComponent implements OnInit {

   constructor( private router:Router) { }

   ngOnInit() {
   }

 

   redirectToGRA() {
      this.router.navigateByUrl('dashboard/gra-certificate');
  }
}