import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-tw';
dayjs.extend(relativeTime);
dayjs.locale('zh-tw');
import AlertModal from '../AlertModal';

import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const { VITE_BASE_URL } = import.meta.env;
const logoUrl = './assets/images/Logo.png';

const OtherPosts = ({ id, isDisabled, clickMethod }) => {
  const [otherPosts, setOtherPosts] = useState(null);

  const getOtherPosts = (posts, count) => {
    let tempPosts = [...posts].filter((post) => post.id != id);
    let otherPosts = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * tempPosts.length);
      otherPosts.push(tempPosts.splice(randomIndex, 1)[0]);
    }
    return otherPosts;
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${VITE_BASE_URL}/posts?_expand=user`);
        setOtherPosts(getOtherPosts(res.data, 3));
      } catch (error) {
        AlertModal.errorMessage({
          title: '連線失敗',
          text: `${error}，請稍後再試`,
        });
      }
    })();
  }, [id]);

  return (
    <div className="mt-5">
      <h3 className="mb-7 fs-1 fw-bolder">其他貼文</h3>
      {otherPosts?.map((post) => (
        <div className="bg-white rounded-3 p-5 mb-5" key={post.id}>
          <div className="card border-0 bg-white">
            <div className="row flex-column flex-lg-row-reverse">
              <Link
                to={`/post/${post.id}`}
                className="col-xxl-5 tet-align-center"
              >
                <img
                  src={post.imagesUrl}
                  className="rounded-3 object-fit-cover h-100 w-100"
                  alt="post-4"
                  style={{
                    maxHeight: '300px',
                  }}
                />
              </Link>
              <div className="col-xxl-7">
                <div className="pt-7 pt-xxl-0">
                  <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* <!--頭像--> */}
                      <div className="pe-5 mb-1">
                        <img
                          src={post.user?.avatarUrl || logoUrl}
                          alt="user-img"
                          className="rounded-circle object-fit-cover"
                          style={{
                            width: '48px',
                            height: '48px',
                          }}
                        />
                      </div>
                      {/* <!--暱稱、樓層時間--> */}
                      <div className="my-5">
                        <div className="fs-5 fw-bold">{post.user.nickName}</div>
                        <div style={{ fontSize: '14px' }}>
                          {`${post.user.pickupCity} / ${
                            post.user.pickupDistrict
                          }· ${dayjs(post.createdPostDate).fromNow()}`}
                        </div>
                      </div>
                    </div>
                    <hr className="m-0 opacity-100 text-gray-200" />
                    {/* <!--mobile標籤區--> */}
                    <div className="d-flex d-xl-none align-items-center pt-7 mb-5 gap-2">
                      {post.likeCount > 100 && (
                        <h5>
                          <span className="bg-primary rounded-3 fs-6 text-white py-1 px-2">
                            熱門
                          </span>
                        </h5>
                      )}
                      {dayjs().diff(dayjs(post.createdPostDate), 'day') <=
                        3 && (
                        <h5>
                          <span className="bg-primary rounded-3 fs-6 text-white py-1 px-2">
                            最新
                          </span>
                        </h5>
                      )}
                      {(dayjs().isBefore(dayjs(post.food?.expiryDate)) &&
                        post.food?.restQuantity) > 0 && (
                        <h5>
                          <span className="bg-primary rounded-3 fs-6 text-white py-1 px-2">
                            仍可領取
                          </span>
                        </h5>
                      )}
                    </div>
                    {/* <!--pc標籤區--> */}
                    <div className="d-none d-xl-flex align-items-center justify-content-end px-0 gap-2">
                      {post.likeCount > 100 && (
                        <h5>
                          <span className="bg-primary rounded-3 fs-6 text-white py-1 px-2">
                            熱門
                          </span>
                        </h5>
                      )}
                      {dayjs().diff(dayjs(post.createdPostDate), 'day') <=
                        3 && (
                        <h5>
                          <span className="bg-primary rounded-3 fs-6 text-white py-1 px-2">
                            最新
                          </span>
                        </h5>
                      )}
                      {(dayjs().isBefore(dayjs(post.food?.expiryDate)) &&
                        post.food?.restQuantity) > 0 && (
                        <h5>
                          <span className="bg-primary rounded-3 fs-6 text-white py-1 px-2">
                            仍可領取
                          </span>
                        </h5>
                      )}
                    </div>
                  </div>
                  {/* <!--內文--> */}
                  <hr className="m-0 opacity-100 text-gray-200 d-none d-lg-block" />
                  <div className="row my-3">
                    <h4>{post.title}</h4>
                    <p
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      className="py-3"
                    >
                      {post.content}
                    </p>
                  </div>
                  {/* <!--觀看數、留言數、按讚數--> */}
                  <div className="row my-3 px-3">
                    <h6 className="row w-auto d-inline justify-content-start pb-3">
                      <div className="col d-inline ps-0">
                        <svg
                          className="me-2"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.37468 8.23224C1.31912 8.08256 1.31912 7.91792 1.37468 7.76824C1.91581 6.45614 2.83435 5.33427 4.01386 4.54484C5.19336 3.75541 6.58071 3.33398 8.00001 3.33398C9.41932 3.33398 10.8067 3.75541 11.9862 4.54484C13.1657 5.33427 14.0842 6.45614 14.6253 7.76824C14.6809 7.91792 14.6809 8.08256 14.6253 8.23224C14.0842 9.54434 13.1657 10.6662 11.9862 11.4556C10.8067 12.2451 9.41932 12.6665 8.00001 12.6665C6.58071 12.6665 5.19336 12.2451 4.01386 11.4556C2.83435 10.6662 1.91581 9.54434 1.37468 8.23224Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M8.00001 10.0002C9.10458 10.0002 10 9.10481 10 8.00024C10 6.89567 9.10458 6.00024 8.00001 6.00024C6.89544 6.00024 6.00001 6.89567 6.00001 8.00024C6.00001 9.10481 6.89544 10.0002 8.00001 10.0002Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>{post.viewCount}</span>
                      </div>
                      <div className="col d-inline">
                        <svg
                          className="me-2"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.26634 13.3332C6.53873 13.9859 8.0024 14.1627 9.3936 13.8317C10.7848 13.5007 12.012 12.6838 12.8542 11.528C13.6963 10.3722 14.098 8.95367 13.9867 7.52798C13.8755 6.10228 13.2587 4.76318 12.2475 3.752C11.2364 2.74081 9.89727 2.12404 8.47157 2.01281C7.04587 1.90159 5.62732 2.30323 4.47155 3.14537C3.31579 3.9875 2.4988 5.21474 2.16782 6.60594C1.83684 7.99714 2.01364 9.46082 2.66634 10.7332L1.33301 14.6665L5.26634 13.3332Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>{post.commentCount}</span>
                      </div>
                      <div className="col d-inline">
                        <svg
                          className="me-2"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_188_5647)">
                            <path
                              d="M4.66634 6.66683V14.6668M9.99967 3.92016L9.33301 6.66683H13.2197C13.4267 6.66683 13.6308 6.71502 13.816 6.80759C14.0011 6.90016 14.1621 7.03457 14.2863 7.20016C14.4105 7.36576 14.4945 7.55799 14.5315 7.76165C14.5685 7.9653 14.5576 8.17478 14.4997 8.3735L12.9463 13.7068C12.8656 13.9838 12.6971 14.2271 12.4663 14.4002C12.2355 14.5733 11.9548 14.6668 11.6663 14.6668H2.66634C2.31272 14.6668 1.97358 14.5264 1.72353 14.2763C1.47348 14.0263 1.33301 13.6871 1.33301 13.3335V8.00016C1.33301 7.64654 1.47348 7.3074 1.72353 7.05735C1.97358 6.80731 2.31272 6.66683 2.66634 6.66683H4.50634C4.7544 6.6667 4.9975 6.59737 5.20831 6.46664C5.41912 6.33592 5.58929 6.14897 5.69967 5.92683L7.99967 1.3335C8.31406 1.33739 8.6235 1.41228 8.90488 1.55256C9.18625 1.69284 9.43229 1.8949 9.62461 2.14363C9.81693 2.39236 9.95055 2.68134 10.0155 2.98896C10.0804 3.29659 10.075 3.61492 9.99967 3.92016Z"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_188_5647">
                              <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <span>{post.likeCount}</span>
                      </div>
                    </h6>
                  </div>
                  <hr className="m-0 opacity-100 text-gray-200" />
                  {/* <!--按鈕區--> */}
                  <div className="post-card-md-btn-list d-none d-md-block mt-5">
                    <div className="row mx-0">
                      <div className="col px-1">
                        <button
                          type="button"
                          className="btn btn-dark w-100 p-4 d-flex align-items-center justify-content-center"
                          onClick={clickMethod}
                          disabled={isDisabled}
                        >
                          <small className="me-1">我要領取</small>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1246_2155)">
                              <path
                                d="M11.9997 7.3335V4.00016C11.9997 3.64654 11.8593 3.3074 11.6092 3.05735C11.3592 2.80731 11.02 2.66683 10.6664 2.66683C10.3128 2.66683 9.97365 2.80731 9.7236 3.05735C9.47355 3.3074 9.33308 3.64654 9.33308 4.00016M9.33308 6.66683V2.66683C9.33308 2.31321 9.1926 1.97407 8.94255 1.72402C8.6925 1.47397 8.35337 1.3335 7.99974 1.3335C7.64612 1.3335 7.30698 1.47397 7.05693 1.72402C6.80689 1.97407 6.66641 2.31321 6.66641 2.66683V4.00016M6.66641 4.00016V7.00016M6.66641 4.00016C6.66641 3.64654 6.52593 3.3074 6.27589 3.05735C6.02584 2.80731 5.6867 2.66683 5.33308 2.66683C4.97945 2.66683 4.64032 2.80731 4.39027 3.05735C4.14022 3.3074 3.99974 3.64654 3.99974 4.00016V9.3335M11.9997 5.3335C11.9997 4.97987 12.1402 4.64074 12.3903 4.39069C12.6403 4.14064 12.9795 4.00016 13.3331 4.00016C13.6867 4.00016 14.0258 4.14064 14.2759 4.39069C14.5259 4.64074 14.6664 4.97987 14.6664 5.3335V9.3335C14.6664 10.748 14.1045 12.1045 13.1043 13.1047C12.1041 14.1049 10.7476 14.6668 9.33308 14.6668H7.99974C6.13308 14.6668 4.99974 14.0935 4.00641 13.1068L1.60641 10.7068C1.37703 10.4528 1.25413 10.1203 1.26316 9.77812C1.27218 9.43597 1.41244 9.1104 1.65489 8.8688C1.89734 8.62721 2.22341 8.48811 2.56559 8.48029C2.90777 8.47248 3.23985 8.59656 3.49308 8.82683L4.66641 10.0002"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1246_2155">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                      <div className="col px-1">
                        <button
                          type="button"
                          className="btn normal-btn border-0 w-100 p-4 d-flex align-items-center justify-content-center"
                        >
                          <small className="me-1">點讚</small>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="col px-1">
                        <button
                          type="button"
                          className="btn normal-btn border-0 w-100 p-4 d-flex align-items-center justify-content-center"
                        >
                          <small className="me-1">留言</small>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="col ps-1">
                        <button
                          type="button"
                          className="btn normal-btn border-0 w-100 p-4 d-flex align-items-center justify-content-center"
                        >
                          <small className="me-1">追蹤貼文</small>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="post-card-sm-btn-list d-block d-md-none mt-5">
                    <div className="row">
                      <div className="col ps-0 pe-1 d-flex justify-content-center">
                        <button className="btn">
                          <svg
                            className="d-block"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="col px-1 d-flex justify-content-center">
                        <button className="btn">
                          <svg
                            className="d-block"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="col ps-1 pe-0 d-flex justify-content-center">
                        <button className="btn">
                          <svg
                            className="d-block"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="row my-4 gx-0 d-lg-none d-flex">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={clickMethod}
                        disabled={isDisabled}
                      >
                        <span className="me-2">我要領取</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1246_2155)">
                            <path
                              d="M11.9997 7.3335V4.00016C11.9997 3.64654 11.8593 3.3074 11.6092 3.05735C11.3592 2.80731 11.02 2.66683 10.6664 2.66683C10.3128 2.66683 9.97365 2.80731 9.7236 3.05735C9.47355 3.3074 9.33308 3.64654 9.33308 4.00016M9.33308 6.66683V2.66683C9.33308 2.31321 9.1926 1.97407 8.94255 1.72402C8.6925 1.47397 8.35337 1.3335 7.99974 1.3335C7.64612 1.3335 7.30698 1.47397 7.05693 1.72402C6.80689 1.97407 6.66641 2.31321 6.66641 2.66683V4.00016M6.66641 4.00016V7.00016M6.66641 4.00016C6.66641 3.64654 6.52593 3.3074 6.27589 3.05735C6.02584 2.80731 5.6867 2.66683 5.33308 2.66683C4.97945 2.66683 4.64032 2.80731 4.39027 3.05735C4.14022 3.3074 3.99974 3.64654 3.99974 4.00016V9.3335M11.9997 5.3335C11.9997 4.97987 12.1402 4.64074 12.3903 4.39069C12.6403 4.14064 12.9795 4.00016 13.3331 4.00016C13.6867 4.00016 14.0258 4.14064 14.2759 4.39069C14.5259 4.64074 14.6664 4.97987 14.6664 5.3335V9.3335C14.6664 10.748 14.1045 12.1045 13.1043 13.1047C12.1041 14.1049 10.7476 14.6668 9.33308 14.6668H7.99974C6.13308 14.6668 4.99974 14.0935 4.00641 13.1068L1.60641 10.7068C1.37703 10.4528 1.25413 10.1203 1.26316 9.77812C1.27218 9.43597 1.41244 9.1104 1.65489 8.8688C1.89734 8.62721 2.22341 8.48811 2.56559 8.48029C2.90777 8.47248 3.23985 8.59656 3.49308 8.82683L4.66641 10.0002"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1246_2155">
                              <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

OtherPosts.propTypes = {
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  clickMethod: PropTypes.func.isRequired,
};

export default OtherPosts;
