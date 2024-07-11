import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {XxxUserApiResponse, xxxUserFeatureName} from "./xxx-user.types";

export const XxxUserActions = createActionGroup({
    source: xxxUserFeatureName,
    events: {
        'getUsers': emptyProps(),
        'getUsersError': emptyProps(),
        'getUsersSuccess': props<{ payload: XxxUserApiResponse }>(),
        'selectUser': props<{ userId: number }>(),
        'showUsers': emptyProps(),
    },
});
