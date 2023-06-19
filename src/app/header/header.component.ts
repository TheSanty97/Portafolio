import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    x: any;

  //funcion que aplica estilo al menu seleccionado y quita el seleccionado anteriormente
  seleccionar(link: { className: string; }) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez seleccionada una opcion en el modo responsive
    this.x = document.getElementById("nav");
    this.x.className = "";
  }

 //funcion que muestra el menu responsive
  responsiveMenu() {
    var x = document.getElementById("nav");
    if (this.x.className === "") {
        this.x.className = "responsive";
    } else {
        this.x.className = "";
    }
  }

}
