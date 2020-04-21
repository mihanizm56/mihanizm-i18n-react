import { FetchDictionaryActionParams } from '@/types/types';
import { setLangDictAction } from './actions';

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

    if (data && data.tr) {
      dispatch(setLangDictAction({ dictionary: data.tr, locale: lang }));
    }
  } catch (error) {
    console.error('error when fetch new dict', error);
  }
};
