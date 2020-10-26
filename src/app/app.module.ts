import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';

import { AppComponent } from './app.component';
import { HeaderComponent }  from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { GraCertComponent } from './gra-cert/gra-cert.component';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';


const appRoutes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'login', component: SigninComponent },
  {
    path: 'dashboard', component: HeaderComponent, 
    children: [
      { path: 'home', component: HomepageComponent },
      { path: 'gra-certificate', component: GraCertComponent },
    ]
  },
  

  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent, 
    HomepageComponent, 
    HeaderComponent, 
    GraCertComponent, 
    SigninComponent, HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: true
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
