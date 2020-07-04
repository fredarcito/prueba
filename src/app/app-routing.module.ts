import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'form', 
    pathMatch: 'full'
  },
  {
    path: 'form',
    children:[
    {
      path: '',
      loadChildren: './modules/form/form.module#FormModule'
    }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
