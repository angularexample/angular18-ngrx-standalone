import { Route } from '@angular/router';
import { XxxPostComponent } from './xxx-post.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { xxxPostFeatureName } from './xxx-post.types';
import { xxxPostReducer } from './xxx-post.reducer';
import { XxxPostEffects } from './xxx-post.effects';
import { XxxPostEditComponent } from './xxx-post-edit/xxx-post-edit.component';

export const xxxPostRoutes: Route[] = [
  {
    path: '',
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(xxxPostFeatureName, xxxPostReducer),
        EffectsModule.forFeature([XxxPostEffects]),
      )
    ],
    children: [
      {
        path: '',
        component: XxxPostComponent,
      },
      {
        path: 'edit',
        component: XxxPostEditComponent,
      },
    ],
  },
];
