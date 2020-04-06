import {
  Button,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as types from '../../types';

const CopyButton = withStyles({
  '@media (max-width: 960px)': {
    root: {
      width: '100%',
    },
  },
  root: {
    '&:hover': {
      backgroundColor: '#9BE3E2',
    },
    backgroundColor: 'hsl(180, 66%, 49%)',
    borderRadius: '5px',
    color: 'white',
    display: 'inline-flex',
    fontSize: '12px',
    fontWeight: 700,
    minWidth: '110px',
    padding: '6px 30px',
    textTransform: 'none',
  },
})(Button);

const cyanBackgroundColor: React.CSSProperties = {
  backgroundColor: 'hsl(180, 66%, 49%)',
};
const darkVioletBackgroundColor: React.CSSProperties = {
  backgroundColor: 'hsl(257, 27%, 26%)',
};

const defaultCopyText = 'Copy';
const copiedText = 'Copied';

function CopyToClipboardButton(props: types.ICopyToClipboardButtonProp) {
  const redirectedLink = `https://rel.ink/${props.hashID}`;
  const copyButtonText = props.isCopied ? copiedText : defaultCopyText;
  const copyButtonBackgroundColor = 
    props.isCopied ? darkVioletBackgroundColor : cyanBackgroundColor;

  return(
    <CopyToClipboard
      text={redirectedLink}
      onCopy={() => {
        props.setShowCopiedButtonHash(props.hashID);
        props.setIsCopied(true);
      }}
    >
      <CopyButton
        style={copyButtonBackgroundColor}
      >
        {copyButtonText}
      </CopyButton>
    </CopyToClipboard>
  );
}

export default CopyToClipboardButton;
