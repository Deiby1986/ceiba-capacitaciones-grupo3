import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro/libro.service';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros: Observable<Libro[]>

  constructor(
    private libroService:LibroService
  ) { }

  ngOnInit() {
    this.libros = this.libroService.obtener();
  }

}
