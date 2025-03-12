import ApplyModal from '../../components/account-notify/ApplyModal';
import ReceiveModal from '../../components/account-notify/ReceiveModal';
import AccountFilter from '../../components/account/AccountFilter';
import AccountFilterStatus from '../../components/account/AccountFilterStatus';

function AccountNotifications() {
  return (
    <>
      <AccountFilter />
      <AccountFilterStatus />
      <section className="container notifyList">
        <ul className="row">
          <li className="col-12 px-0">
            <a
              className="notify-cover row align-items-center position-relative stretched-link p-7 bg-white border-bottom border-gray-400 mx-4 round-top"
              data-bs-toggle="modal"
              data-bs-target="#notifyApplyModal"
            >
              <div className="notify-back w-100 h-100 position-absolute">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                    fill="#fff"
                  />
                </svg>
                <div className="fs-4 fw-medium text-white mt-7 mt-lg-0 ms-lg-7">
                  查看更多
                </div>
              </div>
              <div className="col-6 col-lg-1 order-lg-1 mb-5 mb-lg-0 px-0">
                <p className="bg-primary fs-6 text-white px-2 py-1 d-inline rounded-3 align-middle text-nowrap">
                  申請通知
                </p>
              </div>
              <div className="col-6 col-lg-2 order-lg-3 text-end mb-6 mb-lg-0 px-0">
                <time dateTime="2024-08-01" className="text-gray-700">
                  2024/08/01
                </time>
              </div>
              <div className="col-12 col-lg-9 order-lg-2 ps-lg-6 px-0">
                <h6 className="text-primary fw-bold mb-2">[已同意]</h6>
                <h4 className="fw-bold text-gray-900 mb-2">Oreo</h4>
                <p className="fs-6 text-gray-700 mb-0">
                  嗨!我看到你分享的食物,感覺非常美味!我想要領取一些,請問我可以在指定的時間內過去拿嗎?非常感謝你的分享!😊
                </p>
              </div>
            </a>
          </li>
          <li className="col-12 px-0">
            <a
              href="#"
              className="notify-cover row align-items-center position-relative stretched-link p-7 unchecked border-bottom border-gray-400 mx-4"
              data-bs-toggle="modal"
              data-bs-target="#notifyClaimModal"
            >
              <div className="notify-back w-100 h-100 position-absolute">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                    fill="#fff"
                  />
                </svg>
                <div className="fs-4 fw-medium text-white mt-7 mt-lg-0 ms-lg-7">
                  查看更多
                </div>
              </div>
              <div className="col-6 col-lg-1 order-lg-1 mb-5 mb-lg-0 px-0">
                <p className="bg-primary fs-6 text-white px-2 py-1 d-inline rounded-3 align-middle text-nowrap">
                  領取通知
                </p>
              </div>
              <div className="col-6 col-lg-2 order-lg-3 text-end mb-6 mb-lg-0 px-0">
                <time dateTime="2024-08-01" className="text-gray-700">
                  2024/08/01
                </time>
              </div>
              <div className="col-12 col-lg-9 order-lg-2 ps-lg-6 px-0">
                <h6 className="text-primary fw-bold mb-2">[未領取]</h6>
                <h4 className="fw-bold text-gray-900 mb-2">Tom</h4>
                <p className="fs-6 text-gray-700 mb-0">
                  嗨!感謝你對我的食物分享活動感興趣。你所預訂的食物現在可以領取了!請在以下時間內前來領取......
                </p>
              </div>
            </a>
          </li>
          <li className="col-12 px-0">
            <a
              href="postPage.html"
              className="notify-cover row align-items-center position-relative stretched-link p-7 bg-white border-bottom border-gray-400 mx-4"
            >
              <div className="notify-back w-100 h-100 position-absolute">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                    fill="#fff"
                  />
                </svg>
                <div className="fs-4 fw-medium text-white mt-7 mt-lg-0 ms-lg-7">
                  查看更多
                </div>
              </div>
              <div className="col-6 col-lg-1 order-lg-1 mb-5 mb-lg-0 px-0">
                <p className="bg-primary fs-6 text-white px-2 py-1 d-inline rounded-3 align-middle text-nowrap">
                  評價通知
                </p>
              </div>
              <div className="col-6 col-lg-2 order-lg-3 text-end mb-6 mb-lg-0 px-0">
                <time dateTime="2024-08-01" className="text-gray-700">
                  2024/08/01
                </time>
              </div>
              <div className="col-12 col-lg-9 order-lg-2 ps-lg-6 px-0">
                <h6 className="text-primary fw-bold mb-2">[已留言]</h6>
                <h4 className="fw-bold text-gray-900 mb-2">餘味尋蹤</h4>
                <p className="fs-6 text-gray-700 mb-0">
                  法國地頭蛇
                  ,感謝你參與我們的食物分享活動。領取者已經對你分享的食物進行了評論!請前往貼文查看他們的反饋,了解他們對食物的評價和建議...
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <ApplyModal />
      <ReceiveModal />
    </>
  );
}
export default AccountNotifications;
