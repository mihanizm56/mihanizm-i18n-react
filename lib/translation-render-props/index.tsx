import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { getTranslationsDictionary } from '@/redux/translation-module';

type PropsType = {
  translatedDict: Record<string, any>;
  children({ i18n }: any): JSX.Element;
};

export const WrappedComponent = memo(
  ({ translatedDict, children }: PropsType) => {
    const i18n = useCallback((key: string) => translatedDict[key] || key, [
      translatedDict,
    ]);

    return children({ i18n });
  },
);

const mapStateToProps = (store: any) => ({
  translatedDict: getTranslationsDictionary(store),
});

export const TranslationRenderProps = connect(mapStateToProps)(
  WrappedComponent,
);
