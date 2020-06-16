import { Injectable } from '@angular/core';
import { Persona } from "./persona";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  url = 'http://localhost:9000/api/v1/persona/';
  personas : Persona [] = [];
  persona : Persona = {
    id       : 0,
    nombre   : '',
    apellido : '',
    dni      : 0
  }

  constructor(private http: HttpClient){}

  getAll() : Observable <Persona[]> {
    return this.http.get<Persona[]>(this.url)
  }

  getOne(id : number) : Observable <Persona> {
    return this.http.get<Persona>(this.url + id)
  }

  post(persona : Persona) : Observable <Persona> {
    return this.http.post<Persona>(this.url, persona)
  }
  
  update(id : number, persona : Persona) : Observable <Persona> {
    return this.http.put<Persona>(this.url + id, persona)
  }

  delete(id : number) : Observable <any> {
    return this.http.delete<Persona>(this.url + id)
  }
}
