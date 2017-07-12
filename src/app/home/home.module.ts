
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

import { HomeTopComponent } from './homeTop/homeTop.component';
import { ToolListComponent } from './toolList/toolList.component';
import { FormsComponent } from './forms/forms.component';
import { InputBoxComponent } from './forms/inputBox/inputBox.component';
import { DateComponent } from './date/date.component';
import { ModalsComponent } from '../modals/modals.component';
import { Modaltype1Component } from '../modals/modaltype1/modaltype1.component';
import { Modaltype2Component } from '../modals/modaltype2/modaltype2.component';
import { Modaltype3Component } from '../modals/modaltype3/modaltype3.component';

import { Lbx1Component } from './homeTop/lbx1/lbx1.component';
import { Lbx2Component } from './homeTop/lbx2/lbx2.component';
import { DynamicComponent } from './homeTop/dynamic-component';



@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, FormsModule
  ],
  entryComponents: [ Lbx1Component, Lbx2Component ],
  declarations: [HomeComponent, HomeTopComponent,
  ToolListComponent, FormsComponent,
  DateComponent,
  ModalsComponent,
  Modaltype1Component,
  Modaltype2Component,
  Modaltype3Component,
  Lbx1Component,
  Lbx2Component,
  DynamicComponent,
  InputBoxComponent]
})
export class HomeModule {}
