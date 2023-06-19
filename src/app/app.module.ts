import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Instanciamos el paquete para APIs
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiramComponent } from './apiram/apiram.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiramComponent,
    SobremiComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   //Agregamos el paquete a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

