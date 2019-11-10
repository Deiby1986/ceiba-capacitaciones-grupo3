import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Libro } from 'src/app/models/libro';
import { environment } from "../../helper/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(
    private http: HttpClient
  ) { }

  agregarLibro(libro: Libro){
    return this.http.post<any>(environment.endpointBacken + '/libro/agregar', libro)
    .pipe(map(res => {
      console.log("Usuario respuesta", res);
      
      return res;
    }));
  }

  obtener():Observable<Libro[]>{
    return this.http.get<any>(environment.endpointBacken + '/libro/agregar')
  }
}
