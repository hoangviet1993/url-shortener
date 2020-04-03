import React, { useState } from 'react';
import * as constants from '../../../constants';
import LinkForm from '../../LinkForm/LinkForm';
import ShortenedLinks from '../ShortenedLinks/ShortenedLinks';
import './ShortenDemo.css';

const ShortenDemo = () => {
  const intialLinkValue = localStorage.getItem(constants.serializedShortlyKey);
  const [shortlyLinks, setshortlyLinks] = useState(intialLinkValue);
  return (
    <div>
      <div className="split-color-container">
        <div className="violet-container">
          <LinkForm setshortlyLinks={setshortlyLinks}/>
        </div>
      </div>
      <ShortenedLinks shortlyLinks={shortlyLinks} />
    </div>
  );
};

export default ShortenDemo;
