import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarPrestamoComponent } from './components/agregar-prestamo/agregar-prestamo.component';


const routes: Routes = [{path:"agregar-prestamo",component:AgregarPrestamoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
