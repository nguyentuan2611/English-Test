import { DangNhapComponent } from './DangNhap/dang-nhap/dang-nhap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TrangchuComponent } from './trangchu/trangchu.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', component: TrangchuComponent },
        { path: 'login', component: DangNhapComponent,},
        { path: 'signup', component: DangNhapComponent,},
        // {
        //     path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        // },
        // {
        //     path: 'document', loadChildren: () => import('./document/document.module').then(m => m.DocumentModule),
        // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
