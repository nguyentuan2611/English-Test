import { TestRoutingModule } from './test-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzSpinModule } from 'ng-zorro-antd/spin';

import { InstructionComponent } from './instruction/instruction.component';
import { TestProcessComponent } from './test-process/test-process.component';



@NgModule({
  declarations: [
    InstructionComponent,
    TestProcessComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    NzSpinModule
  ]
})
export class TestModule { }
