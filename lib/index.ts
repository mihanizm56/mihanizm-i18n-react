export { TranslationHOC } from './translation-hoc';
export {
  getTranslationsDictionary,
  getTranslationsBackendErrorsDictionary,
  getTranslationsLocale,
  setLangDictAction,
  fetchLangAction,
  setLangDictBackendErrorsAction,
  fetchLangDictBackendAction,
  translationReducer as translationStorage,
} from './redux/translation-module';
export { translationMiddleware } from './redux/middleware';
export { TranslationRenderProps } from './translation-render-props';
export { TranslationComponent } from './translation-component';
