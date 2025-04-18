import axios from 'axios';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Modal } from 'bootstrap';
import { toast } from 'react-hot-toast';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const DeletePostModal = ({ postId, onDeleteSuccess }) => {
  const modalRef = useRef(null);

  const deletePost = async () => {
    try {
      await toast.promise(axios.delete(`${BASE_URL}/posts/${postId}123`), {
        loading: '刪除中...',
        success: '貼文刪除成功',
        error: '刪除失敗，請稍候再試',
      });
      const modalInstance = Modal.getInstance(modalRef.current);
      modalInstance.hide();
      onDeleteSuccess();
    } catch (error) {
      toast.error(`刪除貼文時發生錯誤: ${error.message || '未知錯誤'}`);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="deletePostModal"
        tabIndex="-1"
        aria-labelledby="deletePostModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deletePostModal">
                刪除貼文
              </h1>
            </div>
            <div className="modal-body text-danger py-10">
              確認刪除此篇貼文？
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-white"
                onClick={deletePost}
              >
                確認刪除貼文
              </button>
              <button
                type="button"
                className="btn btn-dark fw-bold h6"
                data-bs-dismiss="modal"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DeletePostModal.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDeleteSuccess: PropTypes.func.isRequired,
};

export default DeletePostModal;
