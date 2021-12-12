import { NbCardModule, 
  NbLayoutModule, 
  NbIconModule, 
  NbButtonModule, 
  NbDatepickerModule, 
  NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbDatepickerModule,
    NbInputModule,
    FormsModule
  ]
})
export class HomeModule { }
