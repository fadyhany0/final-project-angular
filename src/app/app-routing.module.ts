
import { CreatComponent } from './creat/creat.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatetaecherComponent } from './taecher/updatetaecher/updatetaecher.component';


const routes: Routes = [
  {path: "Ho" , component : HomeComponent},
  {path: "" , component : HomeComponent},
  {path: "lt" , component : ListComponent},
  {path: "ct" , component : CreatComponent},
  {path: "lt/:id" , component : UpdatetaecherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
