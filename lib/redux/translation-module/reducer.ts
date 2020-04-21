import { ITranslationStorage } from '@/types/types';
import { SET_LANG_DICT_ACTION } from './actions';

const initialState: ITranslationStorage = {
  dictionary: {},
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

    default:
      return state;
  }
};
