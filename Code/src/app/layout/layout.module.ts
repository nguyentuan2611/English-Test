import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ant-lib
import { NzTabsModule } from 'ng-zorro-antd/tabs';

// prime-lib
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DividerModule} from 'primeng/divider';


import { LayoutRoutingModule } from './layout-routing.module';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { DangkyComponent } from './Dangky/dang-ky.component';
import { DangNhapComponent } from './DangNhap/dang-nhap/dang-nhap.component';
import { AuthGuard } from '../auth/auth.guard';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    TestComponent,
    DangkyComponent,
    DangNhapComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    NzTabsModule,
    FieldsetModule,
    ScrollPanelModule,
    DividerModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, DatePipe]
})
export class LayoutModule { }
