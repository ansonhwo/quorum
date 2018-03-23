import { ActionReducerMap } from '@ngrx/store';

import * as fromMain from './main';

export interface State {
  main: fromMain.State
}

export const reducers: ActionReducerMap<State> = {
  main: fromMain.mainReducer
}