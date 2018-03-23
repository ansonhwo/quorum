import { Action } from '@ngrx/store';
export const ShowLoader = 'Show Loader';
export const HideLoader = 'Hide Loader';

export class SHOW_LOADER implements Action {
  readonly type = ShowLoader;

  constructor(public payload: string) {}
}

export class HIDE_LOADER implements Action {
  readonly type = HideLoader;

  constructor(public payload: string) {}
}

export type All = SHOW_LOADER | HIDE_LOADER;