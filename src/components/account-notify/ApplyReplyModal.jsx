import PropTypes from 'prop-types';

function ApplyReplyModal({ onClose }) {
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade show d-block notify"
        aria-hidden="false"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0 p-lg-7 py-7 px-4">
              <h1 className="modal-title fw-bolder lh-xs">回覆申請通知</h1>
              <img
                src="./assets/images/icon/x.svg"
                alt="Close"
                className="ms-auto pointer p-2"
                onClick={onClose}
              />
            </div>
            <div className="modal-body p-lg-7">
              {/* 表單內容（略） */}
              <form>{/* ...這裡保持原樣即可... */}</form>
            </div>
            <div className="modal-footer p-7 p-lg-7">
              <button className="btn btn-primary" onClick={onClose}>
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ApplyReplyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ApplyReplyModal;
