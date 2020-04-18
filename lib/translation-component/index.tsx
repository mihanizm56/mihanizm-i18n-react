import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getTranslationsDictionary } from '@/redux/translation-module';

type PropsType = {
  tKey: string;
};

export const TranslationComponent = memo(({ tKey }: PropsType) => {
  const translatedDict = useSelector((store: any) =>
    getTranslationsDictionary(store),
  );

  const translatedText = useMemo(() => translatedDict[tKey] || tKey, [
    tKey,
    translatedDict,
  ]);

  return translatedText;
});
