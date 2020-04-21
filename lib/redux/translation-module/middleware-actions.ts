import { FetchDictionaryActionParams } from '@/types/types';
import { setLangDictAction, setLangDictBackendErrorsAction } from './actions';

export const fetchDictionaryAction = async ({
  dispatch,
  lang,
  request,
}: FetchDictionaryActionParams) => {
  try {
    const { data, error, errorText } = await request(lang);

    if (error) {
      throw new Error(errorText);
    }

    if (data && data.dictionary) {
      dispatch(
        setLangDictAction({ dictionary: data.dictionary, locale: lang }),
      );
    }
  } catch (error) {
    console.error('error when fetch new dict', error);
  }
};

export const fetchDictionaryBackendErrorsAction = async ({
  dispatch,
  lang,
  request,
}: FetchDictionaryActionParams) => {
  try {
    const { data, error, errorText } = await request(lang);

    if (error) {
      throw new Error(errorText);
    }

    if (data && data.dictionary) {
      dispatch(setLangDictBackendErrorsAction(data.dictionary));
    }
  } catch (error) {
    console.error('error when fetch new dict', error);
  }
};
