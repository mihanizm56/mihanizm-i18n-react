import {
  FETCH_LANG_ACTION,
  fetchDictionaryAction,
} from '@/redux/translation-module';
import { TranslationRequest } from '@/types/types';

export const translationMiddleware = (request: TranslationRequest) => (
  store: any,
) => (next: any) => (action: any) => {
  if (action.type === FETCH_LANG_ACTION && action.payload) {
    return fetchDictionaryAction({
      dispatch: store.dispatch,
      lang: action.payload,
      request,
    });
  }

  return next(action);
};
