import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { EnvironmentComponent } from './environment/environment.component';
import { ApplicationComponent } from './application/application.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent
  },
   
  {
    path: 'client', component: ClientComponent
  },
  {
    path: 'Environment', component: EnvironmentComponent
  },
  {
    path: 'Application', component: ApplicationComponent
  },
  {
    path: '**', component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
