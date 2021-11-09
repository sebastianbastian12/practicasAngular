import { NgModule } from '@angular/core';
import { ListadoComponent } from '../../heroes copy/listado/listado.component';
import { HeroeComponent } from '../../heroes copy/heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  exports:[
    ListadoComponent,
    HeroeComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
