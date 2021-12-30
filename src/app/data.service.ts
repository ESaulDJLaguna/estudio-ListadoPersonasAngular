import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  //* ATRIBUTOS

  //* CONSTRUCTOR
  constructor(private httpClient: HttpClient) {}

  //* MÉTODOS
  cargarPersonas() {
    return this.httpClient.get<any[]>(
      //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
      'URL/datos.json'
    );
  }

  guardarPersonas(personas: Persona[]) {
    this.httpClient
      // .post(
      .put(
        //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
        'URL/datos.json',
        personas
      )
      .subscribe(
        (response) =>
          console.log('Resultado de guardar las personas' + response),
        (error) => console.log('Error al guardar Personas: ' + error)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
    url = 'URL/datos/' + index + '.json';
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log('Resultado de modificar Persona: ' + response),
      (error) => console.log('Error en modificar Persona: ' + error)
    );
  }

  eliminarPersona(index: number) {
    let url: string;
    //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
    url = 'URL/datos/' + index + '.json';
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Resultado de eliminar Persona: ' + response),
      (error) => console.log('Error en eliminar Persona: ' + error)
    );
  }
}
