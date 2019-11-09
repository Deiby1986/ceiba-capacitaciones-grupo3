import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro/libro.service';
import { Libro } from 'src/app/models/libro';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalErrorComponent } from '../modal-error/modal-error.component';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  agregarLibroForm: FormGroup;
  libro: Libro;
  modalRef: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private libroService: LibroService,
    private modalService: BsModalService
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
    console.log("Agregando libro");
    
    if (this.agregarLibroForm.invalid) {
      return;
    }

    this.libro = {isbn: this.agregarLibroFromCtrl.isbn.value, 
      nombre: this.agregarLibroFromCtrl.nombre.value, 
      autor: this.agregarLibroFromCtrl.autor.value, 
      editorial: this.agregarLibroFromCtrl.editorial.value}

    this.libroService.agregarLibro(this.libro).subscribe( data => {
      console.log(data);
      
      //this.router.navigate(['/']);
    },
    error => {
      console.log("Error al agregar: ", error);
      const initialState = {
        mensaje: "Error al agregar el producto"
      };
      this.modalRef = this.modalService.show(ModalErrorComponent, {initialState});
      /*this.toastr.error('', "Error al agregar un libro.", {
        positionClass: 'toast-bottom-center'
      });*/
  });

  }

}
