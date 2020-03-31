import axios from 'axios';
import { FormikHelpers } from 'formik';
import * as constants from '../../constants';

export function loadHashIDFromLocalStorage(url: string): string | undefined {
  const serializedUrl = JSON.stringify(url);
  const serializedHashID = localStorage.getItem(serializedUrl);
  return (serializedHashID ? JSON.parse(serializedHashID) : undefined);
}

export function saveUrlToLocalStorage(
  urlInput: string, formActions: FormikHelpers<constants.IFormValues>): void {
  const relinkUrl = 'https://rel.ink/api/links/';
  axios.post(relinkUrl, {
    url: urlInput
  })
    .then((response) => {
      const serializedUrl = JSON.stringify(response.data.url);
      const serializedHashID = JSON.stringify(response.data.hashid);
      try {
        localStorage.setItem(serializedUrl, serializedHashID);
      } catch (localStorageError) {
        formActions.setFieldError(
          constants.urlFieldInputName, 'Fail to save data to local storage.');
      }
    }, (relinkError) => {
      formActions.setFieldError(
        constants.urlFieldInputName, relinkError.response.data.url);
    });
}
