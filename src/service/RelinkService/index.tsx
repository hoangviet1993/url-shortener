import axios from 'axios';
import * as constants from '../../constants';

export const createLinkHashID = async (urlInput: string) => {
  try {
    const response = await axios.post(constants.relinkUrl, {
      url: urlInput
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
