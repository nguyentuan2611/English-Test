import { TestProcessComponent } from './test-process/test-process.component';
import { TestRoutingModule } from './test-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressBarModule} from 'primeng/progressbar';

import { InstructionComponent } from './instruction/instruction.component';



@NgModule({
  declarations: [
    InstructionComponent,
    TestProcessComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    TabMenuModule,
    ProgressBarModule
  ]
})
export class TestModule { }
