import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

public heroes:string[] = ['Spiderman', 'Batman','Ironman', 'Superman'];
public heroeBorrado:string = '';
public digitos:string[] = ['0', '1', '2', '3', '4', '5'];
public edad: string = '20';
public mirarEdad: string = '';
public mensaje:string = 'Eres mayor de edad, '+'tienes ' + this.edad +' años';
public mensaje2:string = 'Lo siento eres menor de edad ' + this.edad;
borrarPersonaje(){
  this.heroeBorrado = this.heroes.shift() || '';
}
mirarMensaje(){
  return this.mirarEdad = this.mensaje;
}


}
