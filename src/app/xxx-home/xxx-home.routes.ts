import {EffectsModule} from "@ngrx/effects";
import {importProvidersFrom} from "@angular/core";
import {Route} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {XxxContentEffects} from "../xxx-common/xxx-content/xxx-content.effects";
import {xxxContentFeatureName} from "../xxx-common/xxx-content/xxx-content.types";
import {xxxContentReducer} from "../xxx-common/xxx-content/xxx-content.reducer";
import {XxxHomeComponent} from "./xxx-home.component";

export const xxxHomeRoutes: Route[] = [
    {
        path: '',
        providers: [
            importProvidersFrom(
                StoreModule.forFeature(xxxContentFeatureName, xxxContentReducer),
                EffectsModule.forFeature([XxxContentEffects])
            )
        ],
        children: [
            {
                path: '',
                component: XxxHomeComponent,
            }
        ],
    },
];
