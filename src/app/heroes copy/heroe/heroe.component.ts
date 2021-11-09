import { Component } from "@angular/core";


@Component({
  selector:'app-heroe',
  templateUrl:'./heroe.component.html'
})

export class HeroeComponent{
  public nombre:string = 'Ironman';
  public edad:number = 40;
  public franquicia:string = 'Marvel';

  obtenerNombre():string {
    return `${this.nombre} - ${this.edad}`;
  }
  get caps(){
    return this.nombre.toUpperCase();
  }

  CambiarFranquicia():void{
    this.franquicia = 'DC';
    this.edad = 38;
    this.nombre = 'Batman';
  }
}
