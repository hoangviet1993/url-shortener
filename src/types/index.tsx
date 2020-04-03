
type SetStringFunc = (inputList: string | null) => void;

export interface IFormValues {
  urlInput: string;
}

export interface IShortenedLinkProp {
  hashID: string;
  url: string;
}

export interface IShortenedLinksProp {
  shortlyLinks: string | null;
}

export interface ILinkFormProp {
  setshortlyLinks: SetStringFunc;
}

export interface ILink {
  hashID: string,
  url: string,
}
