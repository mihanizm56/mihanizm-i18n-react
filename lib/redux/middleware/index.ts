import {
  FETCH_LANG_ACTION,
  fetchDictionaryAction,
} from '@/redux/translation-module';
import { TranslationMiddlewareParams } from '@/types/types';

export const translationMiddleware = ({
  url,
  request,
}: TranslationMiddlewareParams) => (store: any) => (next: any) => (
  action: any,
) => {
  if (action.type === FETCH_LANG_ACTION && action.payload) {
    return fetchDictionaryAction({
      dispatch: store.dispatch,
      lang: action.payload,
      url,
      request,
    });
  }

  return next(action);
};
