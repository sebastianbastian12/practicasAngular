import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';
import { HeroesModule } from './heroes/heroe/heroes.module';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
