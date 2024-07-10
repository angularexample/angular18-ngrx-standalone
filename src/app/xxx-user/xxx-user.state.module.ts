import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {xxxUserReducer} from "./xxx-user.reducer";
import {xxxUserFeatureName} from "./xxx-user.types";
import {XxxUserEffects} from "./xxx-user.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(xxxUserFeatureName, xxxUserReducer),
    EffectsModule.forFeature([XxxUserEffects]),
  ],
})
export class XxxUserStateModule {
}
