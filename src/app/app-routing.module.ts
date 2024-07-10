import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./xxx-home/xxx-home.module').then(m => m.XxxHomeModule)
  },
  {
    path: 'user',
    loadChildren: () =>  import('./xxx-user/xxx-user.module').then(m => m.XxxUserModule)
  },
  {
    path: 'post',
    loadChildren: () =>  import('./xxx-post/xxx-post.module').then(m => m.XxxPostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
