import { createSelector } from 'reselect';
import { ITranslationStorage, ITranslationStoragePart } from '@/types/types';

const tranlationState = (state: ITranslationStoragePart) =>
  state.translationStorage;

export const getTranslationsDict = createSelector(
  [tranlationState],
  (state: ITranslationStorage) => (state ? state.data : {}),
);
