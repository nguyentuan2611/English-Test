import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    MenubarModule,
    ButtonModule,
    NzTabsModule,
    FieldsetModule,
    ScrollPanelModule,
    DividerModule

  ]
})
export class LayoutModule { }
