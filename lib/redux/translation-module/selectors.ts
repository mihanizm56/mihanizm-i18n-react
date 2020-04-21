import { createSelector } from 'reselect';
import { ITranslationStorage, ITranslationStoragePart } from '@/types/types';

const tranlationState = (state: ITranslationStoragePart) =>
  state.translationStorage;

export const getTranslationsDictionary = createSelector(
  [tranlationState],
  (state: ITranslationStorage) => (state ? state.dictionary : {}),
);

export const getTranslationsBackendErrorsDictionary = createSelector(
  [tranlationState],
  (state: ITranslationStorage) => (state ? state.backendErrors : {}),
);

export const getTranslationsLocale = createSelector(
  [tranlationState],
  (state: ITranslationStorage) => (state ? state.locale : {}),
);
