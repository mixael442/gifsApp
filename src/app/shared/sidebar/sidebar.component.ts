import { Component } from '@angular/core';
import { ServicesService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {

  constructor(private gifsService:ServicesService) { }

  get historial(){
    return this.gifsService.historial
  }

  buscar(termino:string){
    this.gifsService.BuscarGif(termino)
  }

}
