
type SetShortlyLinks = (shortlyLinks: string | null) => void;

type SetHashIDFunc = (hashID: string) => void;

type SetIsCopied = (isCopied: boolean) => void;

export interface IFormValues {
  urlInput: string;
}

export interface IShortenedLinkProp {
  children: React.ReactNode;
  hashID: string;
  url: string;
}

export interface IShortenedLinksProp {
  shortlyLinks: string | null;
}

export interface ILinkFormProp {
  setshortlyLinks: SetShortlyLinks;
}

export interface ILink {
  hashID: string;
  url: string;
}

export interface ICopyToClipboardButtonProp {
  hashID: string;
  isCopied: boolean;
  setIsCopied: SetIsCopied;
  setShowCopiedButtonHash: SetHashIDFunc;
}
