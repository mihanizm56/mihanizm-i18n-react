import { ITranslationStorage } from '@/types/types';
import {
  SET_LANG_DICT_ACTION,
  SET_LANG_DICT_BACKEND_ERRORS_ACTION,
} from './actions';

const initialState: ITranslationStorage = {
  dictionary: {},
  backendErrors: {},
  locale: 'en',
};

export const translationReducer = (
  state: ITranslationStorage = initialState,
  { type, payload }: any,
) => {
  switch (type) {
    case SET_LANG_DICT_ACTION:
      return {
        ...state,
        dictionary: payload.dictionary,
        locale: payload.locale,
      };

    case SET_LANG_DICT_BACKEND_ERRORS_ACTION:
      return {
        ...state,
        backendErrors: payload,
      };

    default:
      return state;
  }
};
