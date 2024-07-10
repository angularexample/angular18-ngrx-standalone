import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XxxHomeComponent} from "./xxx-home.component";

const routes: Routes = [
  {path: '', component: XxxHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XxxHomeRoutingModule { }
