import {
  FETCH_LANG_ACTION,
  FETCH_LANG_DICT_BACKEND_ACTION,
  fetchDictionaryAction,
  fetchDictionaryBackendErrorsAction,
} from '@/redux/translation-module';
import { TranslationRequestsType } from '@/types/types';

export const translationMiddleware = ({
  requestToFetchDict,
  requestToFetchBackendErrorsDict,
}: TranslationRequestsType) => (store: any) => (next: any) => (action: any) => {
  if (action.type === FETCH_LANG_ACTION && action.payload) {
    return fetchDictionaryAction({
      dispatch: store.dispatch,
      lang: action.payload,
      request: requestToFetchDict,
    });
  }

  if (action.type === FETCH_LANG_DICT_BACKEND_ACTION && action.payload) {
    return fetchDictionaryBackendErrorsAction({
      dispatch: store.dispatch,
      lang: action.payload,
      request: requestToFetchBackendErrorsDict,
    });
  }

  return next(action);
};
