import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';



const routes: Routes = [
  {path:"agregar-libro",component:AgregarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
