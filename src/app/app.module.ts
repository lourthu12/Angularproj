import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './sign/signup/signup.component';
import { AboutComponent } from './new/about/about.component';
import { ContactpageComponent } from './contact/contactpage/contactpage.component'
import { TermsComponent } from './terms/terms.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './index/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactpageComponent,
    TermsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
