import React, { useState } from 'react';
import * as types from '../../../types';
import CopyToClipboardButton 
  from '../../CopyToClipboardButton/CopyToClipboardButton';
import ShortenedLink from '../../ShortenedLink/ShortenedLink';
import './ShortenedLinks.css';

function ShortenedLinks(props: types.IShortenedLinksProp) {
  const [isCopied, setIsCopied] = useState(false);
  const [showCopiedButtonHash, setShowCopiedButtonHash] = useState('');
  const shortenedLinks = props.shortlyLinks ? 
    JSON.parse(props.shortlyLinks) : [];
  return(
    <div className="shortened-links-container">
      {shortenedLinks.map((link: types.ILink) => {
        return(
          <ShortenedLink
            key={link.hashID}
            url={link.url}
            hashID={link.hashID}
          >
            {(isCopied && showCopiedButtonHash === link.hashID) 
              ? <CopyToClipboardButton
                hashID={link.hashID}
                isCopied={true}
                setIsCopied={setIsCopied}
                setShowCopiedButtonHash={setShowCopiedButtonHash}
              /> 
              : <CopyToClipboardButton
                hashID={link.hashID}
                isCopied={false}
                setIsCopied={setIsCopied}
                setShowCopiedButtonHash={setShowCopiedButtonHash}
              />
            }
          </ShortenedLink>
        );
      })}
    </div>
  );
}

export default ShortenedLinks;
