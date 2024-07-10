import {Routes} from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./xxx-home/xxx-home.routes').then(m => m.xxxHomeRoutes)
    },
    {
        path: 'user',
        loadChildren: () => import('./xxx-user/xxx-user.module').then(m => m.XxxUserModule)
    },
    {
        path: 'post',
        loadChildren: () => import('./xxx-post/xxx-post.module').then(m => m.XxxPostModule)
    }
];
