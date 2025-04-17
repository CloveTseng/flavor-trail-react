import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const DeletePostModal = ({ postId, onDeleteSuccess, isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const deletePost = async () => {
    setLoading(true);
    try {
      await toast.promise(axios.delete(`${BASE_URL}/posts/${postId}`), {
        loading: '刪除中...',
        success: '貼文刪除成功',
        error: '刪除失敗，請稍候再試',
      });
      onDeleteSuccess();
      onClose();
    } catch (error) {
      toast.error(`刪除貼文時發生錯誤: ${error.message || '未知錯誤'}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">刪除貼文</h1>
            </div>
            <div className="modal-body text-danger py-10">
              確認刪除此篇貼文？
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-white"
                onClick={deletePost}
                disabled={loading}
              >
                確認刪除貼文
              </button>
              <button
                type="button"
                className="btn btn-dark fw-bold h6"
                onClick={onClose}
                disabled={loading}
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
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeletePostModal;
