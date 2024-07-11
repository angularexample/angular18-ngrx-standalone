import {createActionGroup, props} from '@ngrx/store';
import {XxxContent, xxxContentFeatureName} from "./xxx-content.types";

export const XxxContentActions = createActionGroup({
    source: xxxContentFeatureName,
    events: {
        'getContent': props<{ key: string }>(),
        'getContentError': props<{ key: string }>(),
        'getContentSuccess': props<{ content: XxxContent }>(),
        'showContent': props<{ key: string }>(),
    },
});
