import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro/libro.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  agregarLibroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private libroService: LibroService
  ) { }

  ngOnInit() {
    this.agregarLibroForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      nombre: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required]
    })
  }

  get agregarLibroFromCtrl(){
    return this.agregarLibroForm.controls;
  }

  onSubmit(){

  }

}
