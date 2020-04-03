import React from 'react';
import * as types from '../../../types';
import ShortenedLink from '../../ShortenedLink/ShortenedLink';
import './ShortenedLinks.css';

function ShortenedLinks(props: types.IShortenedLinksProp) {
  const shortenedLinks = props.shortlyLinks ? 
    JSON.parse(props.shortlyLinks) : [];
  const shortenedLinksElements: JSX.Element[] = [];
  shortenedLinks.forEach((link: types.ILink) => {
    shortenedLinksElements.unshift(
      <ShortenedLink
        key={link.hashID}
        url={link.url}
        hashID={link.hashID}
      />
    );
  });
  return(
    <div className="shortened-links-container">
      {shortenedLinksElements}
    </div>
  );
}

export default ShortenedLinks;
