import { TestProcessComponent } from './test-process/test-process.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { TestComponent } from './test.component';
import { TestQuestionComponent } from './test-process/test-question/test-question.component';
import { AuthGuard } from 'src/app/auth/auth.guard';



const routes: Routes = [
  {
    path: '',
    component: TestComponent, canActivate: [AuthGuard],
    children: [
        { path: '', component: InstructionComponent, canActivate: [AuthGuard] },
        { path: 'test-process', component: TestProcessComponent, canActivate: [AuthGuard],
          children: [
            { path: '', redirectTo: 'test-question/', canActivate: [AuthGuard]  },
            { path: 'test-question', redirectTo: 'test-question/', canActivate: [AuthGuard]  },
            { path: 'test-question/:index', component: TestQuestionComponent, canActivate: [AuthGuard] },
      ] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
