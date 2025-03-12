import { useState } from 'react';

const CopyUid = ({ uid }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(uid);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('複製失敗', error);
    }
  };
  return (
    <span
      onClick={handleCopy}
      className="px-2 text-end cursor-pointer d-inline-flex align-items-center"
    >
      {copied ? (
        <>
          <img
            src="/assets/images/icon/check.svg"
            alt="copy"
            className="px-1"
          />
          <span className="text-gray-700 px-1">已複製</span>
        </>
      ) : (
        <>
          <img src="/assets/images/icon/copy.svg" alt="copy" className="px-1" />
          <span className="text-gray-700 px-1 ">複製領取碼</span>
        </>
      )}
    </span>
  );
};

export default CopyUid;
