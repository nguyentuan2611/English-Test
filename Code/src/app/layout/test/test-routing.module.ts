import { TestProcessComponent } from './test-process/test-process.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { TestComponent } from './test.component';



const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
        { path: '', component: InstructionComponent },
        { path: 'test-process', component: TestProcessComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
