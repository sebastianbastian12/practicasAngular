import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})

export class ContadorComponent{
  public title:string = 'practicasAngular#1';
  public digito:number = 5;
  public sumador:number = 10;
  /* Abajo modo de sumar de 10 en 10 teniendo dos num de ref digito y sumador */
 /*  suma(){
    this.digito += this.sumador;
  } */

  operador(e:number){
     this.sumador += e;
  }
}
