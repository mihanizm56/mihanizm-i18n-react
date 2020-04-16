import { Dispatch } from 'redux';

export interface ITranslationStorage {
  data: Record<string, any>;
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
  data?: Record<string, any> | null;
  additionalErrors: Record<string, any> | Array<any> | null;
};

type RequestType = ({
  lang,
  url,
}: {
  lang: string;
  url: string;
}) => Promise<IResponse>;

export type FetchDictionaryActionParams = {
  dispatch: Dispatch;
  lang: string;
  url: string;
  request: RequestType;
};

export type TranslationMiddlewareParams = {
  url: string;
  request: RequestType;
};
