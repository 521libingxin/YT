
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TjjmComponent } from './tjjm.component';

export const routes: Routes = [
  { path: '', component: TjjmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TjjmRoutingModule {}
