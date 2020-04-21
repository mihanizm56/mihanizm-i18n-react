import {
  FETCH_LANG_ACTION,
  fetchDictionaryAction,
} from '@/redux/translation-module';
import { TranslationRequestType } from '@/types/types';

export const translationMiddleware = (
  requestToFetchDict: TranslationRequestType,
) => (store: any) => (next: any) => (action: any) => {
  if (action.type === FETCH_LANG_ACTION && action.payload) {
    return fetchDictionaryAction({
      dispatch: store.dispatch,
      lang: action.payload,
      request: requestToFetchDict,
    });
  }

  return next(action);
};
