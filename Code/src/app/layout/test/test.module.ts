import { TestQuestionComponent } from './test-process/test-question/test-question.component';
import { TestProcessComponent } from './test-process/test-process.component';
import { TestRoutingModule } from './test-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToggleButtonModule} from 'primeng/togglebutton';

import { CountdownModule } from 'ngx-countdown';

import { InstructionComponent } from './instruction/instruction.component';



@NgModule({
  declarations: [
    InstructionComponent,
    TestProcessComponent,
    TestQuestionComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    TabMenuModule,
    ProgressBarModule,
    NzStatisticModule,
    CountdownModule,
    ToggleButtonModule,
    FormsModule,
  ]
})
export class TestModule { }
