import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const DeletePostModal = () => {
  const deletePost = async () => {
    try {
      const res = await axios.delete(`${BASE_URL}/posts/`);
      alert('貼文刪除成功');
      window.location.reload();
    } catch (error) {
      console.log(error.message);
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

export default DeletePostModal;
