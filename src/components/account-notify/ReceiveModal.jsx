import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../formElements/InputText';
import { Link } from 'react-router';

function ReceiveModal({ app, onClose }) {
  if (!app) return null;

  const title = app.post.title;
  const replyMessage = app.replyMessage;
  const postId = app.post.id;
  const redeemCode = app.post.redeemCode;

  const [isCorrectCode, setIsCorrectCode] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showCodeHintPC, setShowCodeHintPC] = useState(false);
  const [showCodeHintPhone, setShowCodeHintPhone] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { getCodePC: '' }, mode: 'onTouched' });

  const getCodePCValue = watch('getCodePC');
  const getCodePhoneValue = watch('getCodePhone');

  const handleCheckCode = () => {
    const codePC = getCodePCValue;
    const codePhone = getCodePhoneValue;
    if (!codePC && !codePhone) return;
    const correct = codePC === redeemCode || codePhone === redeemCode;
    setIsCorrectCode(correct);
    if (correct) {
      isModalVisible(true);
      setTimeout(() => {
        setIsModalVisible(false);
      }, 1000);
    }
  };
  const handleFocusPC = () => {
    setShowCodeHintPC(true);
  };

  const handleFocusPhone = () => {
    setShowCodeHintPhone(true);
  };

  useEffect(() => {
    if (getCodePCValue) {
      setShowCodeHintPC(false);
    }
  }, [getCodePCValue]);

  useEffect(() => {
    if (getCodePhoneValue) {
      setShowCodeHintPhone(false);
    }
  }, [getCodePhoneValue]);

  return (
    <>
      <div
        className="modal fade notify"
        id="notifyClaimModal"
        tabIndex="-1"
        aria-labelledby="notifyModalLabel"
        aria-hidden="true"
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content bg-white">
            <div className="modal-header border-0 p-lg-7 py-7 px-4">
              <h1 className="modal-title fw-bolder lh-xs" id="ModalToggleLabel">
                領取通知
              </h1>
              <img
                src="/assets/images/icon/x.svg"
                alt=""
                className="ms-auto pointer p-2"
                data-bs-dismiss="modal"
                onClick={onClose}
              />
            </div>
            <div className="modal-body p-lg-7 py-7 px-4">
              {postId && (
                <Link to={`/post/${postId}`} alt="" className="d-block mb-7">
                  <div className="d-flex justify-content-between align-items-center alert alert-secondary p-1 border-0 bg-gray-200">
                    <div className="d-flex align-items-center">
                      <img
                        src={app.post.imagesUrl}
                        alt=""
                        className="nofify-modal-img rounded-1"
                      />
                      <h5 className="fw-bold ps-5 text-nowrap overflow-hidden text-overflow pe-2">
                        {title}
                      </h5>
                    </div>
                    <div className="p-2 me-sm-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="#484848"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}

              <div className="d-flex align-items-center mb-7">
                <img src="/assets/images/icon/path.svg" alt="" />
                <h4 className="fw-bold fs-5 fs-lg-4 ps-2 d-block d-md-inline">
                  我已經準備好囉～
                  <span className="d-block d-md-inline">
                    快來領取你的食物吧！
                  </span>
                </h4>
              </div>
              <p className="text-gray-700 d-inline-block">{replyMessage}</p>
            </div>
            {/* <!-- 電腦版 - 馬上領取 --> */}
            <div className="modal-footer p-7 d-sm-block d-none">
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-white" id="giveUpBtn">
                  放棄領取
                </button>
                <form className="d-flex align-items-center mb-2">
                  <div className="me-2">
                    <InputText
                      register={register}
                      errors={errors}
                      labelText="領取碼"
                      id="getCodePC"
                      name="getCodePC"
                      type="text"
                      onFocus={handleFocusPC}
                    />
                    {showCodeHintPC && (
                      <div
                        id="passwordHelpBlock"
                        className="form-text text-start ps-1 position-absolute"
                      >
                        請向發文者索取領取碼
                      </div>
                    )}
                    {isCorrectCode === false && (
                      <p className="text-sm text-danger">領取碼不正確</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary text-nowrap py-4"
                    id="orderNowPC"
                    onClick={handleCheckCode}
                    disabled={!getCodePCValue}
                  >
                    馬上領取
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- 手機版 - 馬上領取 --> */}
            <div className="d-sm-none border-top text-end">
              <div className="my-7 mx-4">
                <button type="button" className="btn btn-white" id="giveUpBtn">
                  放棄領取
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="orderNowPhone"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={handleCheckCode}
                  disabled={!getCodePhoneValue}
                >
                  馬上領取
                </button>
              </div>

              <div
                className="offcanvas offcanvas-bottom rounded-top bg-white mb-0 custom-offcanvas"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header pt-8 px-4 pb-6">
                  <h3
                    className="offcanvas-title fw-bold lh-sm"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    輸入領取號碼
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    onClick={onClose}
                  ></button>
                </div>
                <div className="pt-2 px-4 pb-7">
                  <div className="d-flex">
                    <InputText
                      register={register}
                      errors={errors}
                      labelText="領取碼"
                      id="getCodePhone"
                      name="getCodePhone"
                      type="text"
                      {...register('getCodePhone')}
                      onFocus={handleFocusPhone}
                    />
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary fw-bold h6 text-nowrap"
                        id="giveUpBtn"
                        onClick={handleCheckCode}
                        disabled={!getCodePhoneValue}
                      >
                        確定
                      </button>
                    </div>
                  </div>
                  {showCodeHintPhone && (
                    <div
                      id="passwordHelpBlock"
                      className="form-text text-start ps-1"
                    >
                      請向發文者索取領取碼
                    </div>
                  )}
                  {isCorrectCode === false && (
                    <p className="text-sm text-danger">領取碼不正確</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReceiveModal;
