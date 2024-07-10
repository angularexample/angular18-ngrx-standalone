import {EffectsModule} from "@ngrx/effects";
import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {XxxContentEffects} from "./xxx-content.effects";
import {xxxContentFeatureName} from "./xxx-content.types";
import {xxxContentReducer} from "./xxx-content.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(xxxContentFeatureName, xxxContentReducer),
    EffectsModule.forFeature([XxxContentEffects]),
  ],
})
export class XxxContentStateModule {
}
