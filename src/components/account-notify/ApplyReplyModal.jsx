function ApplyReplyModal() {
  return (
    <>
      <div
        className="modal fade notify"
        id="notifyApplyModal2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0 p-lg-7 py-7 px-4">
              <h1 className="modal-title fw-bolder lh-xs" id="ModalToggleLabel">
                回覆申請通知
              </h1>
              <img
                src="./assets/images/icon/x.svg"
                alt=""
                className="ms-auto pointer p-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-lg-7">
              <form action="/replay" method="post">
                <div className="notify mb-7 d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                  <label
                    htmlFor="InputTitle"
                    className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                  >
                    回覆標題
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 px-5 border-gray-400 rounded-3"
                    id="InputTitle"
                    placeholder="我已經準備好囉~快來領取你的食物吧!"
                  />
                </div>
                <div className="notify mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                  <label
                    htmlFor="InputPhone"
                    className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                  >
                    聯絡電話
                  </label>
                  <input
                    type="number"
                    className="form-control py-2 px-5 border-gray-400 rounded-3"
                    id="InputPhone"
                    placeholder="0912345678"
                  />
                </div>
                <div className="notify mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                  <label
                    htmlFor="pickUpCity"
                    className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                  >
                    領取地點
                  </label>
                  <div className="d-flex gap-2 col-lg-4">
                    <select
                      id="city"
                      name="city"
                      className="form-select py-2 px-5 border-gray-400 rounded-3 d-inline-blok w-auto"
                    >
                      <option disabled>請選擇縣市</option>
                      <option value="taipei">台北市</option>
                      <option value="newTaipei" selected>
                        新北市
                      </option>
                    </select>
                    <select
                      id="district"
                      name="district"
                      className="form-select py-2 px-5 border-gray-400 rounded-3"
                    >
                      <option value>新店區</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control py-2 px-5 border-gray-400 rounded-3"
                    id="InputTitle"
                    placeholder="玫瑰公園123號1樓"
                  />
                </div>
                <div className="notify mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                  <label
                    htmlFor="InputPhone"
                    className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                  >
                    領取時間
                  </label>
                  <div className="timePicker">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle rounded-3 border border-1 border-gray-400 d-flex align-items-center w-100 py-2 px-5"
                        id="time-range"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <div className="me-auto me-lg-5">14:00 - 16:00</div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <div className="dropdown-menu bg-gray-200 rounded-3 time-range-picker overflow-hidden">
                        <div className="d-flex">
                          {/* <!-- 開始時間 --> */}
                          <ul
                            className="list-unstyled dropdown-menu-start-time"
                            id="start-time"
                          ></ul>
                          {/* <!-- 結束時間 --> */}
                          <ul
                            className="list-unstyled dropdown-menu-end-time disabled"
                            id="end-time"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notify mb-7  d-flex flex-column flex-lg-row gap-2">
                  <label
                    htmlFor="replyMessage"
                    className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 mt-lg-3"
                  >
                    回覆訊息
                  </label>
                  <textarea
                    className="form-control py-2 px-5 border-gray-400 rounded-3"
                    id="replyMessage"
                    rows="5"
                  >
                    嗨!感謝你對我的食物分享活動感興趣,你所預訂的食物可以領取了!
                  </textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer p-7 p-lg-7">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ApplyReplyModal;
