import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilllistComponent } from './billlist/billlist.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'billist', component: BilllistComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
