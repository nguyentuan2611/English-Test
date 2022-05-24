import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


  const routes: Routes = [
      { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
      { path: '**', component: ErrorComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
