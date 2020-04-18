import { createSelector } from 'reselect';
import { ITranslationStorage, ITranslationStoragePart } from '@/types/types';

const tranlationState = (state: ITranslationStoragePart) =>
  state.translationStorage;

export const getTranslationsDictionary = createSelector(
  [tranlationState],
  (state: ITranslationStorage) => (state ? state.dictionary : {}),
);

export const getTranslationsLocale = createSelector(
  [tranlationState],
  (state: ITranslationStorage) => (state ? state.locale : {}),
);
