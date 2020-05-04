import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import {
  getTranslationsDictionary,
  getTranslationsLocale,
} from '@/redux/translation-module';

type PropsType = {
  tKey: string;
  options?: Record<string, any>;
};

export const TranslationComponent = React.memo(
  ({ tKey, options }: PropsType) => {
    const dictionary = useSelector((store: any) =>
      getTranslationsDictionary(store),
    );
    const locale = useSelector((store: any) => getTranslationsLocale(store));

    const phraseFormDict = useMemo(() => dictionary[tKey] || tKey, [
      dictionary,
      tKey,
    ]);

    const message = new IntlMessageFormat(phraseFormDict, locale).format(
      options,
    );

    return message;
  },
);
