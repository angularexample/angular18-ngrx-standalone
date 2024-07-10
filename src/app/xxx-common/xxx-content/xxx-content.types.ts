export interface XxxContent {
  contentModel?: XxxContentModel;
  key: string;
  status: XxxContentStatus;
}

export interface XxxContentModel {
  bodyText?: string;
  pageTitle?: string;
}

export const xxxContentFeatureName = 'xxxContent';

export const xxxContentInitialState: XxxContentState = {
  contents: [],
};

export interface XxxContentState {
  contents: XxxContent[];
}

export enum XxxContentStatus {
  DEFAULT = 'DEFAULT',
  EMPTY = 'EMPTY',
  ERROR = 'ERROR',
  LOADED = 'LOADED',
  LOADING = 'LOADING',
}
