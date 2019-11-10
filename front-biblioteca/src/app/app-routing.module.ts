import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';


const routes: Routes = [
  { path: 'agregar-libro', component: AgregarLibroComponent },
  { path: 'listar-libros', component: ListaLibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
