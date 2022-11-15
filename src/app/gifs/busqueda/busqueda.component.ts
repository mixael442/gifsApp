import { Component, ElementRef, ViewChild} from '@angular/core';
import { ServicesService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:ServicesService) { }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length===0){
      return;
    }

    this.gifsService.BuscarGif(valor);

    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
