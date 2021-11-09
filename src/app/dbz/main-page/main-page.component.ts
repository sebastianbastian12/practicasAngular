/*Anotacion#1 Prevent default con event:any and $event en html----------
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  agregar(event:any){
    event.preventDefault()
  console.log('hey....');
  }
} ---------------------------------------------------*/

/* Anotacion#2 obtener event.target.value a traves de un metodo y llamado de evento (input)-$event

import { Component } from '@angular/core';

interface Personaje{
  nombre: String;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  nuevo:Personaje ={
    nombre:'Truncks',
    poder: 14000
  }

  agregar(){

  console.log(this.nuevo);
  }
  cambiarNombre(event:any){
    console.log(event.target.value);
  } */

/*Anotacion#3 Impresion de listas con *ng-for, agreagacion a array con push(), y objeto vacio para reiniciar en el evento de input

import { Component } from '@angular/core';

interface Personaje{
  nombre: String;
  poder: number;
}
interface Character{
  name: String;
  reference: String;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] = [
    { nombre: 'Goku',
    poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]
  comics: Character[] = [
    {name: 'Batman',
  reference: 'DC'},
  {
    name:'Spiderman',
    reference: 'Marvel'
  }
  ]
  nuevo:Personaje ={
    nombre:'Truncks',
    poder: 14000
  }
  comic: Character = {
    name: 'Ironman',
    reference: 'Marvel'
  }

  agregar(){
  console.log(this.nuevo);
  this.personajes.push(this.nuevo);
  this.nuevo = {
    nombre: '',
    poder: 0
  }

  }
  add(){
    console.log(this.comic);
    this.comics.push(this.comic);
    this.comic = {
      name:'',
      reference:''
    }
  }

} */


import { Component } from '@angular/core';

interface Personaje{
  nombre: String;
  poder: number;
}
interface Character{
  name: String;
  reference: String;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] = [
    { nombre: 'Goku',
    poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]
  comics: Character[] = [
    {name: 'Batman',
  reference: 'DC'},
  {
    name:'Spiderman',
    reference: 'Marvel'
  }
  ]
  nuevo:Personaje ={
    nombre:'Truncks',
    poder: 14000
  }
  comic: Character = {
    name: 'Ironman',
    reference: 'Marvel'
  }

  agregar(){
  console.log(this.nuevo);
  this.personajes.push(this.nuevo);
  this.nuevo = {
    nombre: '',
    poder: 0
  }

  }
  add(){
    console.log(this.comic);
    this.comics.push(this.comic);
    this.comic = {
      name:'',
      reference:''
    }
  }

}





