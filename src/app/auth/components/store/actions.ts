import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTRE,
  props<{ username: string; email:string ; password: string }>()
);
