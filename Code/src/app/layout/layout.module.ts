import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ant-lib
import { NzTabsModule } from 'ng-zorro-antd/tabs';

// prime-lib
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import { LayoutRoutingModule } from './layout-routing.module';
import { TrangchuComponent } from './trangchu/trangchu.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TrangchuComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    MenubarModule,
    TabViewModule,
    ButtonModule,
    NzTabsModule,
    FieldsetModule,
    ScrollPanelModule

  ]
})
export class LayoutModule { }
