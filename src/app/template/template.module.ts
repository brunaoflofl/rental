import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrocelComponent } from './carrocel/carrocel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CarrocelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CarrocelComponent
  ]
})
export class TemplateModule { }
