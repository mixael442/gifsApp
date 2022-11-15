import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaisesFrontera, Gif } from '../../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiKey:string="QZQ6RlSogdlTy4zlezEw5jnSRwsXCrWv";
  private _historial:any[]=[];
  public resultados:Gif[]= [];

  get historial(){
    
     return [...this._historial];
  }

  constructor(private http: HttpClient) {

   }

  BuscarGif(query:string){

    

    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.slice(0,10)
    }

    this.http.get<PaisesFrontera>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
              .subscribe( resp => {
                  console.log(resp.data)
                  this.resultados = resp.data
               } )
  }

}
