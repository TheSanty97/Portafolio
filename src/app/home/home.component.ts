import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service'; //clase de la api

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }


/*
  //detecto el scroll de la pagina para activar la animacion de habilidades
  window.onscroll = function () {
    efectoHabilidades()
  };

  //funcion que aplica la animacion de habilidades
  efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("c#").classList.add("barra-progreso4");
    }*/
}

//--------------------------------------------------------------------------//
//                         TIPOS DE DATOS TYPESCRIPT                       //

//                                NUMBER                                    //
//

//                                STRING                                    //
//

//                                BOOLEAN                                    //
//

//                                OBJECT                                    //
//

//                                ARRAY                                    //
//

//                              TUPLE                                    //
// funcionan como los arrays pero definiendo la cantidad de datos que tendra y su tipo

let file: [string, string] = ["imagen", "imagen.jpg"]
file = ["video","video.mp4"]

//                                ENUM                                    //
// sirve para declarar identificadores constantes globales enumerados
enum colors { red = "#ff0000", blue = "#0000ff", green = "#00ff00" };

const preferences =
{
  fontSize: 14,
  fontFamily: "Times New Roman",
  color: colors.red
}

//                                ANY                                    //
// sirve para declarar cualquier tipo de dato o valor
const number: any = true;

//                                UNION                                    //
// sirve para combinar varios tipos de datos en los usos
const numberString: number | string = "";

//                                LITERAL                                    //
// sirve para indicar los valores que quiero recibir
const navegador: "chrome" | "edge" = "chrome";

//                                ALIAS                                    //
// sirve para crear tipos de datos concretos
type browser = "chrome" | "edge";
