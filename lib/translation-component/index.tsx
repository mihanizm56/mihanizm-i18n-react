import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getTranslationsDictionary } from '@/redux/translation-module';
import { findText } from '@/utils/find-text';

type PropsType = {
  tKey: string;
};

export const TranslationComponent = memo(({ tKey }: PropsType) => {
  const dictionary = useSelector((store: any) =>
    getTranslationsDictionary(store),
  );

  const translatedText = useMemo(() => findText({ dictionary, tKey }), [
    dictionary,
    tKey,
  ]);

  return translatedText;
});
