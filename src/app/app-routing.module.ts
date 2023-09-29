import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTagComponent } from './form-tag/form-tag.component';
import { TabTagComponent } from './tab-tag/tab-tag.component';
import { FormFeedbackComponent } from './form-feedback/form-feedback.component';
import { HomeComponent } from './home/home.component';
import { TabFeedbackComponent } from './tab-feedback/tab-feedback.component';
import { FormUserComponent } from './form-user/form-user.component';
import { TabUserComponent } from './tab-user/tab-user.component';

const routes: Routes = [
  { path: "formTag/:id", component: FormTagComponent },
  { path: "tabellaTag", component: TabTagComponent },
  { path: "formFeed/:id", component: FormFeedbackComponent },
  { path: "", component: HomeComponent},
  { path: "tabellaFeed", component: TabFeedbackComponent},
  { path: "formUser/:id", component: FormUserComponent },
  {path: "tabellaUser", component: TabUserComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
