import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getTranslationsDict } from '@/redux/translation-module';

type PropsType = {
  tKey: string;
};

export const TranslationComponent = memo(({ tKey }: PropsType) => {
  const translatedDict = useSelector((store: any) =>
    getTranslationsDict(store),
  );

  const translatedText = useMemo(() => translatedDict[tKey] || tKey, [
    tKey,
    translatedDict,
  ]);

  return translatedText;
});
