import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactpageComponent } from './contact/contactpage/contactpage.component';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './new/about/about.component';
import { SignupComponent } from './sign/signup/signup.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "contactpage", component: ContactpageComponent },
  { path: "signup", component: SignupComponent },
  { path: "terms", component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
