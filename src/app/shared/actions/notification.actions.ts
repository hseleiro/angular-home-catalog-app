import {createAction, props} from "@ngrx/store";

export const NotificationSuccess = createAction(
    '[Notification API] Success Notification',
    props<{message: string}>()
)

export const NotificationWarning = createAction(
    '[Notification API] Warning Notification',
    props<{message: string}>()
)

export const NotificationError = createAction(
    '[Notification API] Error Notification',
    props<{message: string}>()
)
