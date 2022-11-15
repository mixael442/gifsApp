import { Component} from '@angular/core';
import { ServicesService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados(){
    return this.gifService.resultados
  }

  constructor(private gifService:ServicesService) { }


}
