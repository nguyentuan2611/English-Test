import { TestQuestionComponent } from './test-process/test-question/test-question.component';
import { TestProcessComponent } from './test-process/test-process.component';
import { TestRoutingModule } from './test-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';

import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';

import { CountdownModule } from 'ngx-countdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InstructionComponent } from './instruction/instruction.component';
import { TestModuleService } from './test-module.service';
import { TestResultComponent } from './test-process/test-result/test-result.component';



@NgModule({
  declarations: [
    InstructionComponent,
    TestProcessComponent,
    TestQuestionComponent,
    TestResultComponent
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
    ButtonModule,
    NzSpinModule,
    NzResultModule,
    FontAwesomeModule,
    NzIconModule,
    NzProgressModule,
    DividerModule,
  ],
  providers: [
    TestModuleService
  ]
})
export class TestModule { }
