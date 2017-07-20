
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HeadModule } from './head/head.module';

import { ToolListComponent } from './toolList/toolList.component';
import { FormsComponent } from './forms/forms.component';
import { InputBoxComponent } from './forms/inputBox/inputBox.component';
import { DateComponent } from './date/date.component';
import { ModalsComponent } from '../modals/modals.component';
import { Modaltype1Component } from '../modals/modaltype1/modaltype1.component';
import { Modaltype2Component } from '../modals/modaltype2/modaltype2.component';
import { Modaltype3Component } from '../modals/modaltype3/modaltype3.component';



@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, FormsModule, HeadModule
  ],
  declarations: [HomeComponent,
  ToolListComponent, FormsComponent,
  DateComponent,
  ModalsComponent,
  Modaltype1Component,
  Modaltype2Component,
  Modaltype3Component,
  InputBoxComponent]
})
export class HomeModule {}
