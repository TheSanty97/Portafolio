import { ApiramComponent } from './apiram/apiram.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

//Indicamos al sistema las rutas de los componentes
const routes: Routes = [
  { path: '', component: HomeComponent }, //Ruta de la ventana principal
  { path: 'sobremi', component: SobremiComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'api', component: ApiramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
