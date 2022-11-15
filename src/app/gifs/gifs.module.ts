import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { GifPageComponent } from './gif-page/gif-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    ResultadosComponent,
    GifPageComponent,
    BusquedaComponent
  ],
  exports:[
    ResultadosComponent,
    GifPageComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
