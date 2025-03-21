import axios from 'axios';
import dayjs from 'dayjs';
import { Modal } from 'bootstrap';
import toast from 'react-hot-toast';
import AlertModal from './AlertModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { getLoginUserInfo } from '../redux/LoginStateSlice';
import PropTypes from 'prop-types';
const { VITE_BASE_URL } = import.meta.env;

const FoodApplyModal = ({ foodApplyModalRef, applyInfo }) => {
  const { postId, postTitle, postImgUrl, userId, userNickname } = applyInfo;
  const [message, setMessage] = useState(
    '我看到你分享的貼文，感覺非常美味！我想要領取一些，請問我可以過去拿嗎？非常感謝你的分享！😊'
  );
  const dispatch = useDispatch();

  const closeApplyModal = () => {
    const foodModal = Modal.getInstance(foodApplyModalRef.current);
    foodModal.hide();
  };

  const applyFood = async () => {
    try {
      await axios.post(`${VITE_BASE_URL}/applications`, {
        postId,
        userId,
        type: '申請通知',
        message,
        status: '待回覆',
        created_time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      });
      dispatch(getLoginUserInfo(userId));
      toast.success('尊敬的尋者唷！領取申請已送出，請靜候通知！');
    } catch (error) {
      AlertModal.errorMessage({
        title: '連線失敗',
        text: `${error}，請稍後再試`,
      });
    } finally {
      closeApplyModal();
    }
  };
  return (
    <div
      className="modal fade notify"
      id="notifyApplyModal"
      tabIndex="-1"
      ref={foodApplyModalRef}
    >
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
        <div className="modal-content bg-white">
          <div className="modal-header border-0 p-lg-7 py-7 px-4">
            <h1 className="modal-title fw-bolder lh-xs" id="ModalToggleLabel">
              我要領取
            </h1>
            <img
              src="./assets/images/icon/x.svg"
              alt=""
              className="ms-auto pointer p-2"
              onClick={closeApplyModal}
            />
          </div>
          <div className="modal-body p-lg-7 py-7 px-4">
            <Link
              onClick={closeApplyModal}
              to={`/post/${postId}`}
              alt=""
              className="d-block mb-7"
            >
              <div className="d-flex justify-content-between align-items-center alert alert-secondary p-1 border-0">
                <div className="d-flex align-items-center">
                  <img
                    src={postImgUrl}
                    alt={postTitle}
                    className="nofify-modal-img rounded-1"
                  />
                  <h5 className="fw-bold ps-5 text-nowrap overflow-hidden text-overflow pe-2">
                    {postTitle}
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
            <div className="d-flex align-items-center mb-7">
              <img src="./assets/images/icon/path.svg" alt="" />
              <h4 className="fw-bold fs-5 fs-lg-4 ps-2">
                我喜歡你的食物，我想要領取！
              </h4>
            </div>
            <h6 className="fw-bold mb-2">{`${userNickname}:`}</h6>
            <input
              className="form-control"
              type="text"
              name=""
              id=""
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="modal-footer py-7 p-lg-7">
            <button type="button" className="btn" onClick={closeApplyModal}>
              取消
            </button>
            <button
              className="btn btn-primary"
              data-bs-target="#notifyApplyModal2"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              onClick={applyFood}
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodApplyModal.propTypes = {
  foodApplyModalRef: PropTypes.object,
  applyInfo: PropTypes.shape({
    postId: PropTypes.string,
    postTitle: PropTypes.string,
    postImgUrl: PropTypes.string,
    userId: PropTypes.string,
    userNickname: PropTypes.string,
  }),
};

export default FoodApplyModal;
