import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { FormoduleComponent } from './task5/formodule/formodule.component';
import { Task5Component } from './task5/task5.component';



const routes: Routes = [
  {
    path:'',
    component: Task4Component
  },

  {
    path:'Task1' , 
    component:Task1Component
  },

  {
    path:'Task2', 
    component:Task2Component
  },

  {
    path:'Task3', 
    component:Task3Component
  },

  {
    path:'Task4',
    component:Task4Component,
  }, 

  {
    path: 'course/new',
    component: Task4Component
  },
 
  {
   path: 'course/:id/edit',
   component: Task4Component
  },

  {
    path:'Task5',
    component:Task5Component
  },
  {
    path: 'courses/new',
    component: Task5Component
  },
 
  {
   path: 'courses/:id/edit',
   component: Task5Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
