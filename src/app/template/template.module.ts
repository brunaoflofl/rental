import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrocelComponent } from './carrocel/carrocel.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CarrocelComponent,
    FormComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CarrocelComponent,
    FormComponent,
    CardsComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
