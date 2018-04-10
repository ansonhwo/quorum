import { Action } from '@ngrx/store';
import { Notification } from '../reducers/main';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const RESET = 'RESET';

export class AddNotification implements Action {
  readonly type = ADD_NOTIFICATION;
  constructor(public payload: Notification) {}
}

export class DeleteNotification implements Action {
  readonly type = DELETE_NOTIFICATION;
  constructor(public payload: any) {}
}

export class ResetNotification implements Action {
  readonly type = RESET;
  constructor(public payload: any) {}
}

export type All = AddNotification | DeleteNotification;