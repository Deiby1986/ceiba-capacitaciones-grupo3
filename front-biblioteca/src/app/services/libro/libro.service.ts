import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(
    private http: HttpClient
  ) { }

  agregarLibro(){
    return this.http.post<any>('/libro/agregar', {"email": email, "password": password})
    .pipe(map(res => {
      console.log("Usuario respuesta", res);
      
      return res;
    }));
  }
}
