import {Action, createReducer, createSelector, on} from "@ngrx/store";
import {NotificationActions} from "../actions";

export interface State {
    notifications: {
        detail: string | null;
        summary: string | null;
        severity: string | null;
        code: string | null;
        statusText: string | null;
    }
}

export const initialState: State = {
    notifications: {
        detail: null,
        summary: null,
        severity: null,
        code: null,
        statusText: null
    }
}

export const notificationReducer = createReducer(
    initialState,
    on(
        NotificationActions.NotificationSuccess,
        (state, action) => {
            return {
                ...state,
                notifications: {
                    detail: action.message,
                    code: action.code,
                    statusText: action.statusText,
                    summary: 'Success',
                    severity: 'success'
                }
            }
        }
    ),
    on(
        NotificationActions.NotificationWarning,
        (state, action) => {
            return {
                ...state,
                notifications: {
                    detail: action.message,
                    code: action.code,
                    statusText: action.statusText,
                    summary: 'Warning',
                    severity: 'warn'
                }
            }
        }
    ),
    on(
        NotificationActions.NotificationError,
        (state, action) => {
            return {
                ...state,
                notifications: {
                    detail: action.message,
                    code: action.code,
                    statusText: action.statusText,
                    summary: 'Error',
                    severity: 'error'
                }
            }
        }
    )
)

export function reducer(state: undefined | State, action: Action) {
    return notificationReducer(state, action)
}

export const selectState = (state: State) => state;
export const notificationsState = (state: State) => state.notifications;

export const notificationMessage = createSelector(
    selectState,
    notificationsState,
    (notificationState, notification) => {
        return notification;
    }
)
