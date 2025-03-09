import AccountFilter from "../../components/account/AccountFilter"
import AccountFilterStatus from "../../components/account/AccountFilterStatus"
import AccountNav from "../../components/account/AccountNav"

function AccountPosts() {
    return (<>
        <AccountNav />
        <AccountFilter />
        <AccountFilterStatus />
        <div className="notificationCard mb-19">
          <div className="container">
            <ul className="list-unstyled rounded-3 bg-white">
              <li className="post-card p-5 my-5 border-bottom">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-9 overflow-hidden">
                    <div className="badge bg-primary">未領取</div>
                    <div className="pt-7">
                      <h2 className="fs-3 mb-5">鮮味壽司卷</h2>
                      <p className="text-gray-700 multiline-ellipsis mb-5">
                        這款壽司卷內含新鮮的生魚片、酪梨、黃瓜和蟹肉棒,搭配香甜的壽司飯和海苔,口感豐富,鮮美可口。
                        今天下午2點至4點歡迎大家來取!別忘了帶上你們的環保餐具~希望大家都能享受這些美味的食物!😊
                      </p>
                      <div className="d-flex gap-7 text-black">
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          台北市 信義區
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.06251 12.3479C1.97916 12.1234 1.97916 11.8764 2.06251 11.6519C2.87421 9.68373 4.25202 8.00091 6.02128 6.81677C7.79053 5.63263 9.87155 5.00049 12.0005 5.00049C14.1295 5.00049 16.2105 5.63263 17.9797 6.81677C19.749 8.00091 21.1268 9.68373 21.9385 11.6519C22.0218 11.8764 22.0218 12.1234 21.9385 12.3479C21.1268 14.316 19.749 15.9988 17.9797 17.183C16.2105 18.3671 14.1295 18.9993 12.0005 18.9993C9.87155 18.9993 7.79053 18.3671 6.02128 17.183C4.25202 15.9988 2.87421 14.316 2.06251 12.3479Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12.0005 14.9999C13.6574 14.9999 15.0005 13.6567 15.0005 11.9999C15.0005 10.343 13.6574 8.99987 12.0005 8.99987C10.3437 8.99987 9.00051 10.343 9.00051 11.9999C9.00051 13.6567 10.3437 14.9999 12.0005 14.9999Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          3
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          5
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          7
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 post-card-right px-4 mb-7 mb-lg-0 d-flex flex-column">
                    {/* dropdown */}
                    <div className="dropdown text-end">
                      <a href="#" className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">編輯貼文</a></li>
                        <li><a className="dropdown-item" href="#">刪除貼文</a></li>
                      </ul>
                    </div>
                    {/* dropdown */}
                    <div className="post-card-img my-7 text-center">
                      <a href="#" className="img-hover position-relative">
                        <div className="card-hover bg-primary w-100 h-100 position-absolute top-0 start-0 rounded-3">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                              fill="#ffffff" />
                          </svg>
                          <div className="fs-4 fw-medium text-white">查看更多</div>
                        </div>
                        <img src="../assets/images/account-posts-1.jpg" alt="Property image"
                          className="img-fluid rounded-3 object-fit-cover" />
                      </a>
                    </div>
                    <div className="text-gray-700 text-end">2024/07/31</div>
                  </div>
                </div>
              </li>
              <li className="post-card p-5 my-5 border-bottom">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-9 overflow-hidden">
                    <div className="badge bg-primary">已領取</div>
                    <div className="pt-7">
                      <h2 className="fs-3 mb-5">經典火腿三明治</h2>
                      <p className="text-gray-700 multiline-ellipsis mb-5">
                        這款三明治使用新鮮的全麥麵包,夾入火腿片、瑞士奶酪、生菜和番茄片,再塗上少許芥末醬,簡單卻美味。
                        今天上午11點至下午1點歡迎大家來取!別忘了帶上你們的環保餐具~ 希望大家都能享受這些美味的食物!😊
                      </p>
                      <div className="d-flex gap-7 text-black">
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          台北市 大安區
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.06251 12.3479C1.97916 12.1234 1.97916 11.8764 2.06251 11.6519C2.87421 9.68373 4.25202 8.00091 6.02128 6.81677C7.79053 5.63263 9.87155 5.00049 12.0005 5.00049C14.1295 5.00049 16.2105 5.63263 17.9797 6.81677C19.749 8.00091 21.1268 9.68373 21.9385 11.6519C22.0218 11.8764 22.0218 12.1234 21.9385 12.3479C21.1268 14.316 19.749 15.9988 17.9797 17.183C16.2105 18.3671 14.1295 18.9993 12.0005 18.9993C9.87155 18.9993 7.79053 18.3671 6.02128 17.183C4.25202 15.9988 2.87421 14.316 2.06251 12.3479Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12.0005 14.9999C13.6574 14.9999 15.0005 13.6567 15.0005 11.9999C15.0005 10.343 13.6574 8.99987 12.0005 8.99987C10.3437 8.99987 9.00051 10.343 9.00051 11.9999C9.00051 13.6567 10.3437 14.9999 12.0005 14.9999Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          18
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          8
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          18
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 post-card-right px-4 mb-7 mb-lg-0 d-flex flex-column">
                    {/* dropdown */}
                    <div className="dropdown text-end">
                      <a href="#" className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">編輯貼文</a></li>
                        <li><a className="dropdown-item" href="#">刪除貼文</a></li>
                      </ul>
                    </div>
                    {/* dropdown */}
                    <div className="post-card-img my-7 text-center">
                      <a href="#" className="img-hover position-relative">
                        <div className="card-hover bg-primary w-100 h-100 position-absolute top-0 start-0 rounded-3">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                              fill="#ffffff" />
                          </svg>
                          <div className="fs-4 fw-medium text-white">查看更多</div>
                        </div>
                        <img src="../assets/images/account-posts-2.jpg" alt="Property image"
                          className="img-fluid rounded-3 object-fit-cover" />
                      </a>
                    </div>
                    <div className="text-gray-700 text-end">2024/07/21</div>
                  </div>
                </div>
              </li>
              <li className="post-card p-5 my-5 border-bottom">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-9 overflow-hidden">
                    <div className="badge bg-primary">已領取</div>
                    <div className="pt-7">
                      <h2 className="fs-3 mb-5">涼拌涼麵</h2>
                      <p className="text-gray-700 multiline-ellipsis mb-5">
                        這款涼麵是用細麵條、黃瓜絲、胡蘿蔔絲和雞絲拌製而成,搭配芝麻醬和醋調味,清爽可口,適合在夏天享用。
                        7/12下午4點至6點歡迎大家來取!別忘了帶上你們的環保餐具~ 希望大家都能享受這些美味的食物!😊
                      </p>
                      <div className="d-flex gap-7 text-black">
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          台北市 信義區
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.06251 12.3479C1.97916 12.1234 1.97916 11.8764 2.06251 11.6519C2.87421 9.68373 4.25202 8.00091 6.02128 6.81677C7.79053 5.63263 9.87155 5.00049 12.0005 5.00049C14.1295 5.00049 16.2105 5.63263 17.9797 6.81677C19.749 8.00091 21.1268 9.68373 21.9385 11.6519C22.0218 11.8764 22.0218 12.1234 21.9385 12.3479C21.1268 14.316 19.749 15.9988 17.9797 17.183C16.2105 18.3671 14.1295 18.9993 12.0005 18.9993C9.87155 18.9993 7.79053 18.3671 6.02128 17.183C4.25202 15.9988 2.87421 14.316 2.06251 12.3479Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12.0005 14.9999C13.6574 14.9999 15.0005 13.6567 15.0005 11.9999C15.0005 10.343 13.6574 8.99987 12.0005 8.99987C10.3437 8.99987 9.00051 10.343 9.00051 11.9999C9.00051 13.6567 10.3437 14.9999 12.0005 14.9999Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          6
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          16
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          26
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 post-card-right px-4 mb-7 mb-lg-0 d-flex flex-column">
                    {/* <!-- dropdown --> */}
                    <div className="dropdown text-end">
                      <a href="#" className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">編輯貼文</a></li>
                        <li><a className="dropdown-item" href="#">刪除貼文</a></li>
                      </ul>
                    </div>
                    {/* <!-- dropdown --> */}
                    <div className="post-card-img my-7 text-center">
                      <a href="#" className="img-hover position-relative">
                        <div className="card-hover bg-primary w-100 h-100 position-absolute top-0 start-0 rounded-3">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                              fill="#ffffff" />
                          </svg>
                          <div className="fs-4 fw-medium text-white">查看更多</div>
                        </div>
                        <img src="../assets/images/account-posts-3.jpg" alt="Property image"
                          className="img-fluid rounded-3 object-fit-cover" />
                      </a>
                    </div>
                    <div className="text-gray-700 text-end">2024/07/11</div>
                  </div>
                </div>
              </li>
              <li className="post-card p-5 my-5 border-bottom">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-9 overflow-hidden">
                    <div className="badge bg-primary">已領取</div>
                    <div className="pt-7">
                      <h2 className="fs-3 mb-5">家常炒飯！</h2>
                      <p className="text-gray-700 multiline-ellipsis mb-5">
                        這款炒飯是用剩飯、雞蛋、胡蘿蔔、青豆和火腿丁炒製而成,加入少許醬油調味,簡單又美味,是一道經典的家常菜。
今天中午12點至下午2點歡迎大家來取!別忘了帶上你們的環保餐具~ 希望大家都能享受這些美味的食物!😊
                      </p>
                      <div className="d-flex gap-7 text-black">
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          台北市 大安區
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.06251 12.3479C1.97916 12.1234 1.97916 11.8764 2.06251 11.6519C2.87421 9.68373 4.25202 8.00091 6.02128 6.81677C7.79053 5.63263 9.87155 5.00049 12.0005 5.00049C14.1295 5.00049 16.2105 5.63263 17.9797 6.81677C19.749 8.00091 21.1268 9.68373 21.9385 11.6519C22.0218 11.8764 22.0218 12.1234 21.9385 12.3479C21.1268 14.316 19.749 15.9988 17.9797 17.183C16.2105 18.3671 14.1295 18.9993 12.0005 18.9993C9.87155 18.9993 7.79053 18.3671 6.02128 17.183C4.25202 15.9988 2.87421 14.316 2.06251 12.3479Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12.0005 14.9999C13.6574 14.9999 15.0005 13.6567 15.0005 11.9999C15.0005 10.343 13.6574 8.99987 12.0005 8.99987C10.3437 8.99987 9.00051 10.343 9.00051 11.9999C9.00051 13.6567 10.3437 14.9999 12.0005 14.9999Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          19
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          9
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                         29
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 post-card-right px-4 mb-7 mb-lg-0 d-flex flex-column">
                    {/* <!-- dropdown --> */}
                    <div className="dropdown text-end">
                      <a href="#" className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">編輯貼文</a></li>
                        <li><a className="dropdown-item" href="#">刪除貼文</a></li>
                      </ul>
                    </div>
                    {/* <!-- dropdown --> */}
                    <div className="post-card-img my-7 text-center">
                      <a href="#" className="img-hover position-relative">
                        <div className="card-hover bg-primary w-100 h-100 position-absolute top-0 start-0 rounded-3">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                              fill="#ffffff" />
                          </svg>
                          <div className="fs-4 fw-medium text-white">查看更多</div>
                        </div>
                        <img src="../assets/images/account-posts-4.jpg" alt="Property image"
                          className="img-fluid rounded-3 object-fit-cover" />
                      </a>
                    </div>
                    <div className="text-gray-700 text-end">2024/07/01</div>
                  </div>
                </div>
              </li>
              <li className="post-card p-5 my-5 border-bottom">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-9 overflow-hidden">
                    <div className="badge bg-primary">未領取</div>
                    <div className="pt-7">
                      <h2 className="fs-3 mb-5">清涼綠豆湯</h2>
                      <p className="text-gray-700 multiline-ellipsis mb-5">
                        綠豆湯是用綠豆、冰糖和少許椰奶煮成,清涼解暑,口感甜美。適合在炎熱的夏天享用,既能解渴又能補充能量。
                        7/1下午3點至5點歡迎大家來取!別忘了帶上你們的環保餐具~大家都能享受這些美味的食物!😊
                        
                      </p>
                      <div className="d-flex gap-7 text-black">
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          台北市 信義區
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.06251 12.3479C1.97916 12.1234 1.97916 11.8764 2.06251 11.6519C2.87421 9.68373 4.25202 8.00091 6.02128 6.81677C7.79053 5.63263 9.87155 5.00049 12.0005 5.00049C14.1295 5.00049 16.2105 5.63263 17.9797 6.81677C19.749 8.00091 21.1268 9.68373 21.9385 11.6519C22.0218 11.8764 22.0218 12.1234 21.9385 12.3479C21.1268 14.316 19.749 15.9988 17.9797 17.183C16.2105 18.3671 14.1295 18.9993 12.0005 18.9993C9.87155 18.9993 7.79053 18.3671 6.02128 17.183C4.25202 15.9988 2.87421 14.316 2.06251 12.3479Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                              d="M12.0005 14.9999C13.6574 14.9999 15.0005 13.6567 15.0005 11.9999C15.0005 10.343 13.6574 8.99987 12.0005 8.99987C10.3437 8.99987 9.00051 10.343 9.00051 11.9999C9.00051 13.6567 10.3437 14.9999 12.0005 14.9999Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          2
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          4
                        </div>
                        <div className="d-flex align-items-center">
                          <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                              stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          6
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 post-card-right px-4 mb-7 mb-lg-0 d-flex flex-column">
                    {/* <!-- dropdown --> */}
                    <div className="dropdown text-end">
                      <a href="#" className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">編輯貼文</a></li>
                        <li><a className="dropdown-item" href="#">刪除貼文</a></li>
                      </ul>
                    </div>
                    {/* <!-- dropdown --> */}
                    <div className="post-card-img my-7 text-center">
                      <a href="#" className="img-hover position-relative">
                        <div className="card-hover bg-primary w-100 h-100 position-absolute top-0 start-0 rounded-3">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                              fill="#ffffff" />
                          </svg>
                          <div className="fs-4 fw-medium text-white">查看更多</div>
                        </div>
                        <img src="../assets/images/account-posts-5.jpg" alt="Property image"
                          className="img-fluid rounded-3 object-fit-cover" />
                      </a>
                    </div>
                    <div className="text-gray-700 text-end">2024/06/31</div>
                  </div>
                </div>
              </li>
              <div className="text-center py-11">
                <div className="spinner-border text-gray-700" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
    </>)
}
export default AccountPosts