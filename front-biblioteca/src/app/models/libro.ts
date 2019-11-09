/**
 * Modelo con la informacion correspondiente a una tarea
 */
export class Libro {
    constructor(
        public id: number,
        public isbn: string,
        public nombre: string,
        public autor: string,
        public estado: string,
        public editorial: string
    ){}
}