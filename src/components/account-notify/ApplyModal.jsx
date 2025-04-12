import PropTypes from 'prop-types';
import { Link } from 'react-router';

function ApplyModal({ app, onClose, onAgree }) {
  if (!app) return null;

  const title = app.post.title;
  const message = app.message;
  const postId = app.post.id;
  const postImage = Array.isArray(app.post.imagesUrl)
    ? app.post.imagesUrl[0]
    : app.post.imagesUrl;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div
        className="modal fade show d-block notify"
        aria-hidden="false"
        tabIndex="-1"
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content bg-white">
            <div className="modal-header border-0 p-lg-7 py-7 px-4">
              <h1 className="modal-title fw-bolder lh-xs">申請通知</h1>
              <img
                src="./assets/images/icon/x.svg"
                alt="Close"
                className="ms-auto pointer p-2"
                onClick={onClose}
              />
            </div>

            <div className="modal-body p-lg-7 py-7 px-4">
              {postId && (
                <Link to={`/post/${postId}`} className="d-block mb-7">
                  <div className="d-flex justify-content-between align-items-center alert alert-secondary p-1 border-0 bg-gray-200">
                    <div className="d-flex align-items-center">
                      <img
                        src={postImage}
                        alt="icon-smile"
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
                <img src="./assets/images/icon/path.svg" alt="icon-path" />
                <h4 className="fw-bold fs-5 fs-lg-4 ps-2">
                  我喜歡你的食物，我想要領取！
                </h4>
              </div>

              <h6 className="fw-bold mb-2">{app.user.nickName}：</h6>
              <p className="text-gray-700 d-inline-block">{message}</p>
            </div>

            <div className="modal-footer py-7 p-lg-7">
              <button type="button" className="btn" onClick={onClose}>
                拒絕
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onAgree();
                }}
              >
                同意
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ApplyModal.propTypes = {
  app: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imagesUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
    }).isRequired,
    user: PropTypes.shape({
      nickName: PropTypes.string.isRequired,
    }).isRequired,
    message: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired,
};

export default ApplyModal;
