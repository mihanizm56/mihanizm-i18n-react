export { TranslationHOC } from './translation-hoc';
export {
  getTranslationsDictionary,
  getTranslationsLocale,
  setLangDictAction,
  fetchLangAction,
  translationReducer as translationStorage,
} from './redux/translation-module';
export { translationMiddleware } from './redux/middleware';
export { TranslationRenderProps } from './translation-render-props';
export { TranslationComponent } from './translation-component';
