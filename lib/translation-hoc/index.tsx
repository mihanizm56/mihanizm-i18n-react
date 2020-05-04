import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import {
  getTranslationsDictionary,
  getTranslationsLocale,
} from '@/redux/translation-module';

type PropsType = {
  dictionary: Record<string, any>;
  locale: string;
};

export const ConnectedWrapperFunction = (Component: any) =>
  class WrappedContainer extends PureComponent<PropsType> {
    translate = (key: string, options?: Record<string, any>) => {
      const { locale, dictionary } = this.props;

      const phraseFormDict = dictionary[key] || key;

      const message = new IntlMessageFormat(phraseFormDict, locale).format(
        options,
      );

      return message;
    };

    render() {
      return (
        <Component
          i18n={this.translate}
          _hiddenPrivatePropToMakeRerenderOnly={this.props.dictionary}
        />
      );
    }
  };

const mapStateToProps = (store: any) => ({
  dictionary: getTranslationsDictionary(store),
  locale: getTranslationsLocale(store),
});

export const TranslationHOC = (Component: any) =>
  connect(mapStateToProps)(ConnectedWrapperFunction(Component));
