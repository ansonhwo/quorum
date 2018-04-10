import { Action, combineReducers } from '@ngrx/store';
import * as MainActions from '../actions/main';

export type Action = MainActions.All;

export interface Notification {
  id: string;
  title: string;
  content: string;
};

export interface MainState {
  notifications: [Notification]
};

export function notificationReducer(state = [], action) {
  switch (action.type) {
    case MainActions.ADD_NOTIFICATION:
      return [ ...state, ...action.payload ];
    case MainActions.DELETE_NOTIFICATION:
      return state.filter(notification => notification.id !== action.payload.id);
    case MainActions.RESET:
      return [];
    default:
      return state;
  }
}

export const mainReducers = combineReducers({
  notifications: notificationReducer
});