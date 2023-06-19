import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosComponent } from '../proyectos/proyectos.component';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  pagina = [1,2,3,4,5,6,7,8,9,10];

//Definimos la variable que sera la url de la Api
  private urlApi = 'https://rickandmortyapi.com/api/character/' + this.pagina;

  //En el parametro del constructor colocamos la clase http para poder hacer consultas
  constructor(private http: HttpClient) { }

  //Creamos un metodo para obtener los datos de la Api
  public getData(): Observable<any>{  // Indicamos que es Observable porque no sabemos el tipo de dato que retornara la Api
    return this.http.get<any>(this.urlApi); //Indicamos que el metodo retorna la url de la Api
  }

}
