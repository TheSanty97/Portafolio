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
    }
}*/

}
