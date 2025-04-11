import { useState } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const CopyUid = ({ uid, disabled }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await toast.promise(navigator.clipboard.writeText(uid), {
        success: '領取碼複製成功',
        error: '複製失敗，請稍候再試',
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('複製失敗', error);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      handleCopy();
    }
  };

  const disabledImg = disabled
    ? './assets/images/icon/x.svg'
    : './assets/images/icon/copy.svg';
  const copyUidClass = `px-2 text-end d-inline-flex align-items-center ${
    disabled ? 'text-gray-400 cursor-default' : 'cursor-pointer'
  }`;

  return (
    <span onClick={handleClick} className={copyUidClass}>
      {copied ? (
        <>
          <img
            src="./assets/images/icon/check.svg"
            alt="copy"
            className="px-1"
          />
          <span className="text-gray-700 px-1">已複製</span>
        </>
      ) : (
        <>
          <img
            src={disabledImg}
            alt={disabled ? '無法複製' : '複製'}
            className="px-1"
            style={{
              filter:
                'invert(73%) sepia(81%) saturate(7492%) hue-rotate(157deg) brightness(98%) contrast(101%)',
            }}
          />
          <span className="text-gray-700 px-1 ">
            {disabled ? '複製碼已過期' : '複製領取碼'}
          </span>
        </>
      )}
    </span>
  );
};
CopyUid.propTypes = {
  uid: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CopyUid;
