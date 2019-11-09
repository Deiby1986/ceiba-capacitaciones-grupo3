import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Libro } from 'src/app/models/libro';
import { environment } from "../../helper/environment";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(
    private http: HttpClient
  ) { }

  agregarLibro(libro: Libro){
    return this.http.post<any>(environment + '/libro/agregar', libro)
    .pipe(map(res => {
      console.log("Usuario respuesta", res);
      
      return res;
    }));
  }
}
