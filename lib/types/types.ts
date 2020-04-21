import { Dispatch } from 'redux';

type TranslationRequestType = (lang?: string) => Promise<IResponse>;

export interface ITranslationStorage {
  dictionary: Record<string, any>;
  backendErrors: Record<string, any>;
  locale: string;
}

export interface ITranslationStoragePart {
  translationStorage: ITranslationStorage;
}

export type BaseAction = () => {
  type: string;
};
export type Action<T> = (
  payload: T,
) => {
  type: string;
  payload: T;
};

export type IResponse = {
  error: boolean;
  errorText: string;
  data: {
    tr?: Record<string, any>;
  } | null;
  additionalErrors: Record<string, any> | Array<any> | null;
};

export type FetchDictionaryActionParams = {
  dispatch: Dispatch;
  lang?: string;
  request: TranslationRequestType;
};

export type TranslationRequestsType = {
  requestToFetchDict: TranslationRequestType;
  requestToFetchBackendErrorsDict: TranslationRequestType;
};
