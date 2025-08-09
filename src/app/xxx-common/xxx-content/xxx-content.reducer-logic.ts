import { XxxContent, XxxContentState, XxxContentStatus } from "./xxx-content.types";

export const xxxGeContent = (state: XxxContentState, action: { key: string }) => {
  const contents: XxxContent[] = <XxxContent[]>JSON.parse(JSON.stringify(state.contents));
  let content: XxxContent | undefined = contents.find((item: XxxContent) => item.key === action.key);
  if (content === undefined) {
    content = {
      key: action.key,
      status: XxxContentStatus.LOADING
    };
    contents.push(content);
  } else {
    content.contentModel = undefined;
    content.status = XxxContentStatus.LOADING;
  }
  return {
    ...state,
    contents
  }
}

export const xxxGetContentError = (state: XxxContentState, action: { key: string }) => {
  const contents: XxxContent[] = <XxxContent[]>JSON.parse(JSON.stringify(state.contents));
  let content: XxxContent | undefined = contents.find((item: XxxContent) => item.key === action.key);
  if (content === undefined) {
    content = {
      key: action.key,
      status: XxxContentStatus.ERROR
    };
    contents.push(content);
  } else {
    content.status = XxxContentStatus.ERROR
  }
  return {
    ...state,
    contents
  }
}

export const xxxGetContentSuccess = (state: XxxContentState, action: { content: XxxContent }) => {
  const contents: XxxContent[] = <XxxContent[]>JSON.parse(JSON.stringify(state.contents));
  let content: XxxContent | undefined = contents.find((item: XxxContent) => item.key === action.content.key);
  let status: XxxContentStatus = XxxContentStatus.LOADED;
  if (action.content.contentModel === undefined) {
    status = XxxContentStatus.EMPTY;
  }
  if (content === undefined) {
    content = {
      contentModel: action.content.contentModel,
      key: action.content.key,
      status
    };
    contents.push(content);
  } else {
    content.contentModel = action.content.contentModel;
    content.status = status;
  }
  return {
    ...state,
    contents
  }
}
