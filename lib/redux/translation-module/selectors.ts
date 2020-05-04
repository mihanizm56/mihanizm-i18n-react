import { createSelector } from 'reselect';
import { ITranslationStorage, ITranslationStoragePart } from '@/types/types';

const tranlationState = (state: ITranslationStoragePart) =>
  state
    ? state.translationStorage
    : {
        dictionary: {},
        locale: '',
      };

export const getTranslationsDictionary = createSelector(
  [tranlationState],
  ({ dictionary }: ITranslationStorage) => dictionary,
);

export const getTranslationsLocale = createSelector(
  [tranlationState],
  ({ locale }: ITranslationStorage) => locale,
);
