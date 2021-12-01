import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  // {path:'',component:AppComponent ,redirectTo: 'crud/home', pathMatch: 'full'},
const routes: Routes = [
  {path:'',component:DashboardComponent },
  {path:'home',component:HomeComponent},
  {path:'detail/:productId',component:DetailComponent},
  {path:'create',component:CreateComponent},
  {path:'update/:productId',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
