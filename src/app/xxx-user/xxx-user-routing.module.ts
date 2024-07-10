import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XxxUserComponent} from "./xxx-user.component";

const routes: Routes = [
  {path: '', component: XxxUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XxxUserRoutingModule { }
