import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {XxxPostComponent} from "./xxx-post.component";
import {XxxPostEditComponent} from "./xxx-post-edit/xxx-post-edit.component";

const routes: Routes = [
  {path: '', component: XxxPostComponent},
  {path: 'edit', component: XxxPostEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XxxPostRoutingModule {
}
