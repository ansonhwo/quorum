import * as mainActions from '../actions';

export type Action = mainActions.All;

export interface State {
  loading: boolean
};

const initialState: State = {
  loading: false
};

export function mainReducer(state = initialState, action: Action) {
  switch (action.type) {
    case mainActions.ShowLoader:
      return { ...state, loading: true };
    case mainActions.HideLoader:
      return { ...state, loading: false };
    default:
      return state;
  }
}