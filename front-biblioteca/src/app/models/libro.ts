/**
 * Modelo con la informacion correspondiente a una tarea
 */
export interface Libro {

    id?: number;
    isbn: string;
    nombre: string;
    autor: string;
    estado?: string;
    editorial: string;

}