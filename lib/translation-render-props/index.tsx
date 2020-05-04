import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import {
  getTranslationsDictionary,
  getTranslationsLocale,
} from '@/redux/translation-module';

type PropsType = {
  dictionary: Record<string, any>;
  locale: string;
  children({ i18n }: any): JSX.Element;
};

export const WrappedComponent = React.memo(
  ({ dictionary, children, locale }: PropsType) => {
    const i18n = useCallback(
      (key: string, options?: Record<string, any>) => {
        const phraseFormDict = dictionary[key] || key;

        const message = new IntlMessageFormat(phraseFormDict, locale).format(
          options,
        );

        return message;
      },
      [dictionary, locale],
    );

    return children({ i18n });
  },
);

const mapStateToProps = (store: any) => ({
  dictionary: getTranslationsDictionary(store),
  locale: getTranslationsLocale(store),
});

export const TranslationRenderProps = connect(mapStateToProps)(
  WrappedComponent,
);
