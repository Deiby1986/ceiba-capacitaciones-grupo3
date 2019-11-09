import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarPrestamoComponent } from './components/agregar-prestamo/agregar-prestamo.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [
    AppComponent,
    AgregarPrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
