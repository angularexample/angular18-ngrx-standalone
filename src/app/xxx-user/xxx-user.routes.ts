import {EffectsModule} from "@ngrx/effects";
import {importProvidersFrom} from "@angular/core";
import {Route} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {XxxContentEffects} from "../xxx-common/xxx-content/xxx-content.effects";
import {xxxContentFeatureName} from "../xxx-common/xxx-content/xxx-content.types";
import {xxxContentReducer} from "../xxx-common/xxx-content/xxx-content.reducer";
import {XxxUserComponent} from "./xxx-user.component";
import {XxxUserEffects} from "./xxx-user.effects";
import {xxxUserFeatureName} from "./xxx-user.types";
import {xxxUserReducer} from "./xxx-user.reducer";

export const xxxUserRoutes: Route[] = [
    {
        path: '',
        providers: [
            importProvidersFrom(
                StoreModule.forFeature(xxxContentFeatureName, xxxContentReducer),
                EffectsModule.forFeature([XxxContentEffects]),
                StoreModule.forFeature(xxxUserFeatureName, xxxUserReducer),
                EffectsModule.forFeature([XxxUserEffects]),
            )
        ],
        children: [
            {
                path: '',
                component: XxxUserComponent,
            }
        ],
    },
];
