import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTranslationsDict } from '@/redux/translation-module';

type PropsType = {
  translatedDict: Record<string, any>;
};

export const ConnectedWrapperFunction = (Component: any) =>
  class WrappedContainer extends PureComponent<PropsType> {
    translate = (key: string) => this.props.translatedDict[key] || key;

    render = () => (
      <Component
        i18n={this.translate}
        _hiddenPrivatePropToMakeRerenderOnly={this.props.translatedDict}
      />
    );
  };

const mapStateToProps = (store: any) => ({
  translatedDict: getTranslationsDict(store),
});

export const TranslationHOC = (Component: any) =>
  connect(mapStateToProps)(ConnectedWrapperFunction(Component));
