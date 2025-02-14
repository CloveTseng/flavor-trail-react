const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-header d-flex flex-lg-row flex-column-reverse mb-lg-19 mb-16">
            <a href="index.html" className="footer-logo">
              <img src="/assets/images/Logo.png" alt="logo" />
            </a>
            <div className="slogan ms-auto mt-lg-12 fs-2 fw-bolder lh-1">
              <p>快樂齊分享，美味</p>
              <p className="vertical-text text-lg-vertical ms-auto">再出發</p>
            </div>
          </div>

          <nav className="footer-nav row pb-lg-12 pb-7">
            <div className="col-9">
              <div className="row">
                <div className="footer-nav__category col-lg-3 mb-lg-0 mb-7">
                  <a className="mb-4 text-gray-700 fs-6">認識餘味尋蹤</a>
                  <ul className="d-flex flex-column gap-4 fs-4 fw-medium lh-xs">
                    <li>
                      <a href="#" className="footer-nav__link">
                        關於我們
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        人才招募
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        活動提案
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        聯絡我們
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav__category col-lg-3 mb-lg-0 mb-7">
                  <a className="mb-4 text-gray-700 fs-6">常見問題 FAQ</a>
                  <ul className="d-flex flex-column gap-4 fs-4 fw-medium lh-xs">
                    <li>
                      <a href="#" className="footer-nav__link">
                        如何分享美食
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        如何領取美食
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        取消預約美食
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        忘記密碼
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav__category col-lg-3 mb-lg-0 mb-7">
                  <a className="mb-4 text-gray-700 fs-6">會員中心</a>
                  <ul className="d-flex flex-column gap-4 fs-4 fw-medium lh-xs">
                    <li>
                      <a href="login.html" className="footer-nav__link">
                        註冊/登入
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        我的帳戶
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="footer-nav__link"
                        data-bs-toggle="modal"
                        data-bs-target="#shareFoodModal"
                      >
                        我要分享
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-nav__link">
                        我的收藏
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3 d-lg-flex justify-content-end align-items-end">
              <div className="footer-social d-flex flex-lg-row flex-column align-items-end gap-2">
                <a href="#" className="p-2">
                  <img src="/assets/images/icon/twitter.svg" alt="twitter" />
                </a>
                <a href="#" className="p-2">
                  <img
                    src="/assets/images/icon/instagram.svg"
                    alt="instagram"
                  />
                </a>
                <a href="#" className="p-2">
                  <img src="/assets/images/icon/facebook.svg" alt="facebook" />
                </a>
                <a href="#" className="p-2">
                  <img
                    src="/assets/images/icon/hugeicons_line.svg"
                    alt="line"
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="footer-bottom border-top-lg-0 border-top border-black">
          <div className="container">
            <div className="d-flex flex-lg-row flex-column justify-content-between py-7 border-top-lg border-lg-black">
              <p className="mb-5">@ 2024 Flavor Trail</p>
              <ul className="d-flex gap-7">
                <li>
                  <a href="#">網站使用需知</a>
                </li>
                <li>
                  <a href="#">隱私權聲明</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
