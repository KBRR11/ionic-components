import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxPageRoutingModule } from './checkbox-routing.module';

import { CheckboxPage } from './checkbox.page';
import { ComponetsModule } from '../../components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxPageRoutingModule,
    ComponetsModule
  ],
  declarations: [CheckboxPage]
})
export class CheckboxPageModule {}
