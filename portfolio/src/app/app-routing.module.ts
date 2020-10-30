import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './page-components/contact/contact.component';
import { LandingComponent } from './page-components/landing/landing.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
