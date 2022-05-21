import { TestComponent } from './test/test.component';
import { DangNhapComponent } from './DangNhap/dang-nhap/dang-nhap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'login', component: DangNhapComponent,},
        { path: 'signup', component: DangNhapComponent,},
        { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
