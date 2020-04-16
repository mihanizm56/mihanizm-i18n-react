import { ITranslationStorage } from '@/types/types';
import { SET_LANG_ACTION } from './actions';

const initialState: ITranslationStorage = {
  data: {},
};

export const translationReducer = (
  state: ITranslationStorage = initialState,
  { type, payload }: any,
) => {
  switch (type) {
    case SET_LANG_ACTION:
      return { ...state, data: { ...payload } };

    default:
      return state;
  }
};
