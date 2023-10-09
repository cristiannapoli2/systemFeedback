import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTagComponent } from './form-tag/form-tag.component';
import { TabTagComponent } from './tab-tag/tab-tag.component';
import { FormFeedbackComponent } from './form-feedback/form-feedback.component';
import { HomeComponent } from './home/home.component';
import { TabFeedbackComponent } from './tab-feedback/tab-feedback.component';
import { FormUserComponent } from './form-user/form-user.component';
import { TabUserComponent } from './tab-user/tab-user.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './servizi/route-guard.service';

const routes: Routes = [
  { path: "formTag/:id", component: FormTagComponent,canActivate:[RouteGuardService]},
  { path: "tabellaTag", component: TabTagComponent,canActivate:[RouteGuardService]},
  { path: "formFeed/:id", component: FormFeedbackComponent,canActivate:[RouteGuardService]},
  { path: "home", component: HomeComponent,canActivate:[RouteGuardService]},
  { path: "tabellaFeed", component: TabFeedbackComponent,canActivate:[RouteGuardService]},
  { path: "formUser/:id", component: FormUserComponent,canActivate:[RouteGuardService]},
  { path: "tabellaUser", component: TabUserComponent,canActivate:[RouteGuardService]},
  { path: "", component: LoginComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
