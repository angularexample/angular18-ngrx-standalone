import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {XxxUserApiResponse} from "./xxx-user.types";

export const XxxUserActions = createActionGroup({
    source: 'xxxUser',
    events: {
        'getUsers': emptyProps(),
        'getUsersError': emptyProps(),
        'getUsersSuccess': props<{ payload: XxxUserApiResponse }>(),
        'selectUser': props<{ userId: number }>(),
        'showUsers': emptyProps(),
    },
});
