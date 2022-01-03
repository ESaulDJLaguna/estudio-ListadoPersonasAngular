import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  //* ATRIBUTOS

  //* CONSTRUCTOR
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  //* MÉTODOS
  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get<any[]>(
      //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
      'URL/datos.json?auth=' + token
    );
  }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      // .post(
      .put(
        //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
        'URL/datos.json?auth=' + token,
        personas
      )
      .subscribe(
        (response) =>
          console.log('Resultado de guardar las personas' + response),
        (error) => console.log('Error al guardar Personas: ' + error)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
    url = 'URL/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log('Resultado de modificar Persona: ' + response),
      (error) => console.log('Error en modificar Persona: ' + error)
    );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    //TODO. Sustituir solo la palabra URL por la que se obtiene cuando se crea una base de datos de tipo 'Realtime Database' en firebase
    url = 'URL/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Resultado de eliminar Persona: ' + response),
      (error) => console.log('Error en eliminar Persona: ' + error)
    );
  }
}
