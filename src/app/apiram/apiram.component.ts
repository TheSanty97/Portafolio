import { Observable } from 'rxjs';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiram',
  templateUrl: './apiram.component.html',
  styleUrls: ['./apiram.component.css']
})

export class ApiramComponent implements OnInit {
 //Creamos una variable para guardar los datos que retorne de la Api
  data: any[] = [];

  //Cuando es un Array se coloca [] y si es un objeto se coloca {}

  constructor(private ApiService: ApiService) { } //Llamamos a nuestro servicio creado

  ngOnInit(): void {
    this.llenarData()  //Llama al metodo de traer datos al inciar el programa
  }

  //Creamos un metodo para traer los datos de la Api
  llenarData() {
    this.ApiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

}
