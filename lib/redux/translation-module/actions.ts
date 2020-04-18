import { Action } from '@/types/types';

export const SET_LANG_DICT_ACTION = 'SET_LANG_DICT_ACTION';
export const setLangDictAction: Action<Record<string, any>> = payload => ({
  type: SET_LANG_DICT_ACTION,
  payload,
});

export const FETCH_LANG_ACTION = 'FETCH_LANG_MIHANIZM56';
export const fetchLangAction: Action<string> = payload => ({
  type: FETCH_LANG_ACTION,
  payload,
});
