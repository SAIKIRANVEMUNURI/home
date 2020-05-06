import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { RegisterComponent } from './register/register.component';

const appRoutes : Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'javacourse/:coursecode',component:MyCoursesComponent,data:{username:'Sai',role:'Manager'}},
  {path:'pythoncourse/:coursecode',component:MyCoursesComponent,data:{username:'pranay',role:'Senoir Manager'}},
  {path: '**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    MyCoursesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
