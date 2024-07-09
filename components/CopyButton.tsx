// components/CopyButton.tsx

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './copy-button.module.css';

interface CopyButtonProps {
  code: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className={styles.copyButton}>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button>{copied ? 'Copied!' : 'Copy'}</button>
      </CopyToClipboard>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CopyButton;
