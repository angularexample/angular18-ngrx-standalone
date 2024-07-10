import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {xxxPostFeatureName} from "./xxx-post.types";
import {xxxPostReducer} from "./xxx-post.reducer";
import {XxxPostEffects} from "./xxx-post.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(xxxPostFeatureName, xxxPostReducer),
    EffectsModule.forFeature([XxxPostEffects]),
  ],
})
export class XxxPostStateModule {
}
