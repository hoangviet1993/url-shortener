import { FormikHelpers } from 'formik';
import * as constants from '../../constants';
import * as types from '../../types';

export function isUrlInLocalStorage(url: string): boolean {
  const serializedUrl = JSON.stringify(url);
  const serializedHashID = localStorage.getItem(serializedUrl);
  return (serializedHashID ? true : false);
}

export function saveToLocalStorage(
  key: string,
  value: string,
  formActions: FormikHelpers<types.IFormValues>): void {
  const serializedKey = JSON.stringify(key);
  const serializedValue = JSON.stringify(value);
  try {
    localStorage.setItem(serializedKey, serializedValue);
  } catch (localStorageError) {
    formActions.setFieldError(
      constants.urlFieldInputName, 'Fail to save data to local storage.');
  }
};

export function saveNewLinkToLocalStorage(
  newLink: types.ILink,
  formActions: FormikHelpers<types.IFormValues>): void {
  let shortenedLinks = [];
  const localStorageLinks = localStorage.getItem(
    constants.serializedShortlyKey);
  if (localStorageLinks) {
    shortenedLinks = JSON.parse(localStorageLinks);
  }
  shortenedLinks.push(newLink);
  saveToLocalStorage(constants.shortlyKey, shortenedLinks, formActions);
}
