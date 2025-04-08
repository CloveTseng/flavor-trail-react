import * as bootstrap from 'bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import InputText from '../formElements/InputText';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ReceiveModal = ({ app, onClose }) => {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { getCodePC: '', getCodePhone: '' },
    mode: 'onTouched',
  });

  const popoverRefPC = useRef(null);
  const popoverRefPhone = useRef(null);
  const isProcessingRef = useRef(false);

  const [, setShowCodeHint] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [, setCancelClickCountPC] = useState(0);
  const [, setCancelClickCountPhone] = useState(0);
  const [isCorrectCode, setIsCorrectCode] = useState(null);

  const getCodePCValue = watch('getCodePC');
  const getCodePhoneValue = watch('getCodePhone');

  useEffect(() => {
    if (getCodePCValue || getCodePhoneValue) {
      setShowCodeHint(false);
    }
  }, [getCodePCValue, getCodePhoneValue]);

  useEffect(() => {
    let popoverPC = null;
    let popoverPhone = null;

    if (popoverRefPC.current) {
      popoverPC = new bootstrap.Popover(popoverRefPC.current, {
        trigger: 'focus',
      });
    }
    if (popoverRefPhone.current) {
      popoverPhone = new bootstrap.Popover(popoverRefPhone.current, {
        trigger: 'focus',
      });
    }
    return () => {
      popoverPC?.dispose();
      popoverPhone?.dispose();
    };
  }, []);

  if (!app) return null;

  const title = app.post.title;
  const replyMessage = app.replyMessage;
  const postId = app.post.id;
  const redeemCode = app.post.redeemCode;
  const appId = app.id;

  const refreshPage = () => window.location.reload();

  const changeAPPStatus = async () => {
    if (isProcessingRef.current) return;
    isProcessingRef.current = true;
    try {
      await toast.promise(
        axios.patch(`${BASE_URL}/applications/${appId}`, {
          status: '已取消',
        }),
        {
          success: '已放棄此筆領取，若需恢復，請重新提交『我要領取』',
          error: '操作失敗，請稍候再試',
        }
      );
      refreshPage();
    } catch (errors) {
      toast.error(`取消領取失敗: ${errors.message || '未知錯誤'}`);
    } finally {
      onClose();
    }
  };

  const handleCancelClickPC = () => {
    setCancelClickCountPC((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 2) {
        setCancelClickCountPC(0);
        changeAPPStatus();
      }
      return newCount;
    });
  };

  const handleCancelClickPhone = () => {
    setCancelClickCountPhone((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 2) {
        setCancelClickCountPhone(0);
        changeAPPStatus();
      }
      return newCount;
    });
  };

  const handleCheckCode = () => {
    const codePC = getCodePCValue;
    const codePhone = getCodePhoneValue;
    if (!codePC && !codePhone) {
      setIsCorrectCode(null);
      return;
    }
    const correct = codePC === redeemCode || codePhone === redeemCode;
    setIsCorrectCode(correct);

    if (correct) {
      setIsCodeVerified(true);
      setShowCodeHint(false);
      setValue('getCodePC', redeemCode);
      setValue('getCodePhone', redeemCode);
    }
  };

  const handleFocus = () => setShowCodeHint(true);

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
                src="./assets/images/icon/x.svg"
                className="ms-auto pointer p-2"
                data-bs-dismiss="modal"
                onClick={onClose}
              />
            </div>
            <div className="modal-body p-lg-7 py-7 px-4">
              {postId && (
                <Link to={`/post/${postId}`} className="d-block mb-7">
                  <div className="d-flex justify-content-between align-items-center alert alert-secondary p-1 border-0 bg-gray-200">
                    <div className="d-flex align-items-center">
                      <img
                        src={app.post.imagesUrl}
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
                <img src="./assets/images/icon/path.svg" />
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
                <button
                  ref={popoverRefPC}
                  type="button"
                  className="btn btn-white"
                  id="cancelApplyPopoverPC"
                  data-bs-toggle="popover"
                  title="確認放棄領取？"
                  data-bs-custom-class="custom-popover"
                  data-bs-content="放棄後若需領取，需再次提交『我要領取』"
                  onClick={handleCancelClickPC}
                >
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
                      onFocus={handleFocus}
                      disabled={isCodeVerified}
                    />
                    {isCorrectCode === false && (
                      <p className="text-sm text-danger">領取碼不正確</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary text-nowrap py-4"
                    id="orderNowPC"
                    onClick={handleCheckCode}
                    disabled={!getCodePCValue || isCodeVerified}
                  >
                    {isCodeVerified ? '已領取' : '馬上領取'}
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- 手機版 - 馬上領取 --> */}
            <div className="d-sm-none border-top text-end">
              <div className="my-7 mx-4">
                <button
                  ref={popoverRefPhone}
                  type="button"
                  className="btn btn-white"
                  id="cancelApplyPopoverPhone"
                  data-bs-toggle="popover"
                  title="確認放棄領取？"
                  data-bs-custom-class="custom-popover"
                  data-bs-content="放棄後若需領取，需再次提交『我要領取』"
                  onClick={handleCancelClickPhone}
                >
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
                  disabled={!getCodePhoneValue || isCodeVerified}
                >
                  {isCodeVerified ? '已領取' : '馬上領取'}
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
                      onFocus={handleFocus}
                      disabled={isCodeVerified}
                    />
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary fw-bold h6 text-nowrap"
                        id="giveUpBtn"
                        onClick={handleCheckCode}
                        disabled={!getCodePhoneValue || isCodeVerified}
                      >
                        {isCodeVerified ? '已領取' : '確定'}
                      </button>
                    </div>
                  </div>
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
};
ReceiveModal.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.number.isRequired,
    replyMessage: PropTypes.string.isRequired,
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imagesUrl: PropTypes.string.isRequired,
      redeemCode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ReceiveModal;
