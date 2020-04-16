import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getTranslationsDict,
  fetchLangAction,
} from '@/redux/translation-module';
import { Action } from '@/types/types';

type PropsType = {
  fetchLang: Action<string>;
  translatedList: Record<string, any>;
};

export const ConnectedWrapperFunction = (Component: any) =>
  class WrappedContainer extends PureComponent<PropsType> {
    translate = (key: string) => this.props.translatedList[key] || '';

    fetchLang = (lang: string) => this.props.fetchLang(lang);

    render = () => (
      <Component
        changeLocale={this.fetchLang}
        i18n={this.translate}
        test={this.props.translatedList}
      />
    );
  };

const mapStateToProps = (store: any) => ({
  translatedList: getTranslationsDict(store),
});

export const TranslationHOC = (Component: any) =>
  connect(
    mapStateToProps,
    {
      fetchLang: fetchLangAction,
    },
  )(ConnectedWrapperFunction(Component));
