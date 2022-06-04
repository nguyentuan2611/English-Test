import { DangkyComponent } from './Dangky/dang-ky.component';
import { DangNhapComponent } from './DangNhap/dang-nhap/dang-nhap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth/auth.guard';
import { InfoUserComponent } from './info-user/info-user.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'login', component: DangNhapComponent,},
        { path: 'register', component: DangkyComponent,},
        { path: 'infoUser', component: InfoUserComponent, canActivate: [AuthGuard]},
        { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule), canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
