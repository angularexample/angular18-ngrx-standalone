import {createActionGroup, props} from '@ngrx/store';
import {XxxContent} from "./xxx-content.types";

export const XxxContentActions = createActionGroup({
    source: 'xxxContent',
    events: {
        // defining an event with payload using the `props` function
        'getContent': props<{ key: string }>(),
        'getContentError': props<{ key: string }>(),
        'getContentSuccess': props<{ content: XxxContent }>(),
        'showContent': props<{ key: string }>(),
    },
});
