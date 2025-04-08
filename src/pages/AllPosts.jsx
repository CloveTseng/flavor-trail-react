import { useRef, useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Modal } from 'bootstrap';
import ShareFoodModal from '../components/ShareFoodModal';
import ShareFoodEditModal from '../components/ShareFoodEditModal';
import AlertModal from '../components/AlertModal';
import CircleCTAButton from '../components/CircleCTAButton';
import FullScreenLoading from '../components/FullScreenLoading';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-tw';
dayjs.extend(relativeTime);
dayjs.locale('zh-tw');
const { VITE_BASE_URL } = import.meta.env;

function AllPosts() {
  const navigate = useNavigate();
  const defaultValues = {
    redeemCode: '',
    title: '',
    content: '',
    food: {
      name: '',
      type: '',
      saveMethod: '',
      totalQuantity: 0,
      restQuantity: 0,
      expiryDate: '',
      isPastBestBefore: '',
      dietType: '',
    },
    pickup: {
      city: '',
      district: '',
      time: '',
      address: '',
    },
    imagesUrl: [],
    viewCount: 1,
    commentCount: 0,
    likeCount: 0,
    userId: 1,
  };
  const [posts, setPosts] = useState([]);
  const [city, setCity] = useState([]);
  const [foodType, setFoodType] = useState([]);
  const [activeFilter, setActiveFilter] = useState('全部貼文');
  const [activeCity, setActiveCity] = useState('地理位置');
  const [activeFood, setActiveFood] = useState('美食類型');
  const [result, setResult] = useState([]);
  const [tempPost, setTempPost] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [likes, setLike] = useState({});
  const [follows, setFollows] = useState({});
  const startTriggerRef = useRef();
  const endTriggerRef = useRef();
  // 添加這些代碼讀取 URL 參數
  const [searchParams] = useSearchParams();
  const urlKeyword = searchParams.get('keyword');
  const urlLocation = searchParams.get('location');
  const urlFoodType = searchParams.get('foodType');
  const { uid, isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const { identity } = useSelector((state) => state.loginSlice);
  const getUserId = (uid) => {
    let LoginPerson = identity.filter((person) => person.uid === uid);
    // If LoginPerson is not empty, return the userId from the first element.
    // If it is empty, return null.
    return LoginPerson.length > 0 ? LoginPerson[0].userId : null;
  };

  // 如果 URL 中有參數，則自動設置相應的篩選條件
  useEffect(() => {
    handleClearFilter();
    if (urlLocation) {
      setActiveCity(urlLocation);
    }

    if (urlFoodType) {
      setActiveFood(urlFoodType);
    }
  }, [urlKeyword, urlLocation, urlFoodType]);
  const [searchKeyword, setSearchKeyword] = useState('');

  // 當 URL 參數變化時，更新搜尋關鍵字
  useEffect(() => {
    handleClearFilter();
    if (urlKeyword) {
      setSearchKeyword(urlKeyword);
    } else {
      setSearchKeyword('');
    }
  }, [urlKeyword]);

  const filterOptions = [
    {
      name: '全部貼文',
      icon: (
        <svg
          className="align-baseline"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2V6M12 2V6M16 2V6M8 10H14M8 14H16M8 18H13M6 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4Z"
            stroke="#484848"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: '熱門貼文',
      icon: (
        <svg
          className="align-baseline"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.66634 9.66667C6.10837 9.66667 6.53229 9.49107 6.84485 9.17851C7.15741 8.86595 7.33301 8.44203 7.33301 8C7.33301 7.08 6.99967 6.66667 6.66634 6C5.95167 4.57133 6.51701 3.29733 7.99967 2C8.33301 3.66667 9.33301 5.26667 10.6663 6.33333C11.9997 7.4 12.6663 8.66667 12.6663 10C12.6663 10.6128 12.5456 11.2197 12.3111 11.7859C12.0766 12.352 11.7328 12.8665 11.2995 13.2998C10.8662 13.7332 10.3517 14.0769 9.78553 14.3114C9.21934 14.546 8.61251 14.6667 7.99967 14.6667C7.38684 14.6667 6.78 14.546 6.21382 14.3114C5.64763 14.0769 5.13318 13.7332 4.69984 13.2998C4.2665 12.8665 3.92276 12.352 3.68824 11.7859C3.45371 11.2197 3.33301 10.6128 3.33301 10C3.33301 9.23133 3.62167 8.47067 3.99967 8C3.99967 8.44203 4.17527 8.86595 4.48783 9.17851C4.80039 9.49107 5.22431 9.66667 5.66634 9.66667Z"
            stroke="#484848"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: '最新貼文',
      icon: (
        <svg
          className="align-baseline"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_188_5464)">
            <path
              d="M5.52651 8.47355L3.79317 10.2069C3.58148 10.0903 3.34696 10.0211 3.10586 10.0041C2.86476 9.98715 2.62286 10.0228 2.39693 10.1087C2.171 10.1945 1.96644 10.3285 1.79744 10.5013C1.62844 10.6741 1.49904 10.8815 1.41822 11.1093C1.3374 11.3371 1.30708 11.5797 1.32937 11.8204C1.35166 12.0611 1.42603 12.294 1.54732 12.503C1.66861 12.7121 1.83391 12.8923 2.03177 13.0311C2.22963 13.1699 2.45532 13.264 2.69317 13.3069C2.73985 13.5416 2.83654 13.7636 2.97667 13.9576C3.11681 14.1517 3.29709 14.3133 3.50526 14.4314C3.71344 14.5496 3.94461 14.6215 4.18306 14.6423C4.42152 14.663 4.66165 14.6322 4.88713 14.5519C5.11261 14.4716 5.31814 14.3437 5.48974 14.1768C5.66135 14.0099 5.795 13.8081 5.8816 13.5849C5.9682 13.3618 6.00573 13.1226 5.99162 12.8837C5.97751 12.6447 5.9121 12.4116 5.79984 12.2002L7.52651 10.4735M10.2665 10.4202C9.26875 10.7403 8.27894 10.7481 7.44274 10.4423C6.60654 10.1366 5.96812 9.53346 5.62144 8.72175C5.27477 7.91003 5.23814 6.9326 5.51696 5.9333C5.79578 4.93399 6.37531 3.9656 7.17027 3.17064C7.96523 2.37569 8.93362 1.79615 9.93292 1.51733C10.9322 1.23852 11.9097 1.27514 12.7214 1.62182C13.5331 1.96849 14.1362 2.60691 14.442 3.44311C14.7477 4.27931 14.74 5.26912 14.4198 6.26688C13.9566 6.00266 13.3694 5.93693 12.7568 6.08077C12.1442 6.2246 11.5437 6.56921 11.0563 7.05664C10.5688 7.54407 10.2242 8.14458 10.0804 8.75716C9.93656 9.36974 10.0023 9.95702 10.2665 10.4202Z"
              stroke="#484848"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_188_5464">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: '追蹤貼文',
      icon: (
        <svg
          className="align-baseline"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6663 9.33333C13.6597 8.36 14.6663 7.19333 14.6663 5.66667C14.6663 4.69421 14.28 3.76158 13.5924 3.07394C12.9048 2.38631 11.9721 2 10.9997 2C9.82634 2 8.99967 2.33333 7.99967 3.33333C6.99967 2.33333 6.17301 2 4.99967 2C4.02721 2 3.09458 2.38631 2.40695 3.07394C1.71932 3.76158 1.33301 4.69421 1.33301 5.66667C1.33301 7.2 2.33301 8.36667 3.33301 9.33333L7.99967 14L12.6663 9.33333Z"
            stroke="#484848"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  // 定義 getPosts 函式
  const getPosts = async () => {
    setLoading(true);
    try {
      const resPosts = await axios.get(`${VITE_BASE_URL}/posts?_expand=user`);
      setPosts(resPosts.data);
      setResult(resPosts.data);
      setLoading(false);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const resCity = await axios.get(`${VITE_BASE_URL}/twCities`);
        setCity(resCity.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const resFoodTypes = await axios.get(`${VITE_BASE_URL}/foodTypes`);
        setFoodType(resFoodTypes.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  // 根據 activeFilter 變化篩選貼文
  useEffect(() => {
    let tempData = [...posts]; // 預設顯示全部貼文
    if (searchKeyword) {
      // 轉為小寫進行不區分大小寫的搜尋
      const keyword = searchKeyword.toLowerCase();

      tempData = tempData.filter((post) => {
        // 確保屬性存在並轉為小寫
        const title = (post.title || '').toLowerCase();
        const content = (post.content || '').toLowerCase();

        // 判斷標題或內容中是否包含關鍵字
        return title.includes(keyword) || content.includes(keyword);
      });
    }
    if (activeFilter === '熱門貼文') {
      tempData = tempData.filter((post) => post.likeCount > 100); // 篩選熱門貼文
    }
    if (activeFilter === '最新貼文') {
      const now = dayjs();
      const tempDataNewSort = tempData.filter(
        (post) => now.diff(dayjs(post.createdPostDate), 'day') <= 3
      ); // 篩選3天內的最新貼文
      tempData = tempDataNewSort.sort(
        (a, b) => new Date(b.createdPostDate) - new Date(a.createdPostDate)
      ); //排序新到舊
    }
    // 熱門貼文 且為選取的縣市
    if (activeCity !== '地理位置') {
      tempData = tempData.filter((post) => post.pickup?.city === activeCity);
    }
    // 熱門貼文 且為選取縣市 且為選取美食類型
    if (activeFood !== '美食類型') {
      tempData = tempData.filter((post) => post.food?.type === activeFood);
    }
    setResult(tempData); // 更新篩選結果
  }, [activeFilter, activeCity, activeFood, posts, searchKeyword]);

  const editModalRef = useRef(null);
  const myEditModal = useRef(null);
  const closeEditModal = () => {
    myEditModal.current.hide();
    setTempPost(defaultValues);
  };

  useEffect(() => {
    myEditModal.current = new Modal(editModalRef.current, {
      backdrop: 'static',
      keyboard: false,
    });
  }, []);
  // 點擊編輯貼文按鈕 (傳入貼文 ID)
  const handleEditPost = async (postId) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${VITE_BASE_URL}/posts/${postId}`);
      setTempPost(data); // 確保資料結構正確
      setLoading(false);
      myEditModal.current.show();
    } catch (error) {
      alert('取得貼文資料失敗:', error);
    }
  };
  const handlePostFilter = (filter) => {
    setActiveFilter(filter);
  };
  const handleChangeCity = (e, city) => {
    e.preventDefault();
    setActiveCity(city);
  };
  const handleChangeFood = (e, food) => {
    e.preventDefault();
    setActiveFood(food);
  };
  const handleClearFilter = () => {
    setActiveFilter('全部貼文');
    setActiveCity('地理位置');
    setActiveFood('美食類型');
    setSearchKeyword('');
  };
  const handleChangeLike = (id) => {
    // 登入後才能按讚
    if (!isLogin) {
      AlertModal.confirmAction({
        title: '請先登入',
        text: '迷路的尋者，登入後才能使用會員功能喔！',
        icon: 'info',
        confirmButtonText: '登入',
        cancelButtonText: '取消',
        onConfirm: () => {
          navigate('/login');
        },
      });
      return;
    }
    setLike((prevLikes) => {
      const updatedLikes = { ...prevLikes };

      if (updatedLikes[id]) {
        // 如果已經按讚，取消按讚並 -1
        delete updatedLikes[id];
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id
              ? { ...post, likeCount: Math.max(post.likeCount - 1, 0) }
              : post
          )
        );
      } else {
        // 如果未按讚，按讚並 +1
        updatedLikes[id] = true;
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id ? { ...post, likeCount: post.likeCount + 1 } : post
          )
        );
      }
      return updatedLikes;
    });
  };
  const handelChangeFllow = (id) => {
    if (!isLogin) {
      AlertModal.confirmAction({
        title: '請先登入',
        text: '迷路的尋者，登入後才能使用會員功能喔！',
        icon: 'info',
        confirmButtonText: '登入',
        cancelButtonText: '取消',
        onConfirm: () => {
          navigate('/login');
        },
      });
      return;
    }
    setFollows((prev) => {
      const follows = { ...prev };
      if (follows[id]) {
        delete follows[id];
      } else {
        follows[id] = true;
      }
      return follows;
    });
  };

  return (
    <>
      <ShareFoodEditModal
        closeEditModal={closeEditModal}
        editModalRef={editModalRef}
        tempPost={tempPost}
        getPosts={getPosts}
      />
      <div className="allPost container">
        {/* 小螢幕時顯示下拉選單 */}
        <div className="account-nav dropdown position-relative d-lg-none mt-10 mb-13">
          {
            <h1 className="d-flex align-items-center fs-1 fw-bolder">
              {activeFilter === '' ? '全部貼文' : activeFilter}
              <button
                className="dropdown-btn d-flex align-items-center justify-content-between p-2 rounded-3 bg-white rounded-circle border-0 ms-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dropdown-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <ul
                className="dropdown-menu custom-dropdown-menu"
                data-bs-popper="static"
              >
                {filterOptions.map(({ name, icon }) => (
                  <button
                    key={name}
                    onClick={() => handlePostFilter(name)}
                    type="button"
                    className={`filter-btn btn w-100 fw-normal text-gray-700 btn-gray-200 py-2 px-3 d-flex justify-content-start align-items-center ${
                      activeFilter === name ? 'active' : ''
                    }`}
                    style={{
                      height: 40,
                    }}
                  >
                    <span style={{ width: 16, height: 16 }} className="me-2">
                      {icon}
                    </span>
                    {name}
                  </button>
                ))}
              </ul>
            </h1>
          }
        </div>
        <div ref={startTriggerRef} className="postNav container mb-13 mb-lg-7">
          <div className="row flex-lg-nowrap justify-content-between align-items-center bg-white rounded-3 p-3">
            {/*貼文篩選*/}
            <div className="col-12 col-lg-auto px-0">
              {/* 大螢幕時顯示按鈕群組 */}
              <div className="d-none d-lg-block">
                <div className="d-flex align-items-stretch bg-light rounded-3">
                  {filterOptions.map(({ name, icon }) => (
                    <button
                      key={name}
                      onClick={() => handlePostFilter(name)}
                      type="button"
                      className={`filter-btn btn fw-normal text-gray-700 btn-gray-200 py-2 px-3 d-flex justify-content-center align-items-center ${
                        activeFilter === name ? 'active' : ''
                      }`}
                      style={{
                        width: 112,
                        height: 40,
                      }}
                    >
                      <span style={{ width: 16, height: 16 }} className="me-2">
                        {icon}
                      </span>
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/*類型篩選*/}
            <div className="col-auto d-flex justify-content-lg-between flex-grow-1 px-0">
              {/*地理位置 & 美食類型*/}
              <div className="d-flex flex-grow-1">
                <div className="me-2 mx-lg-2">
                  <div className="dropdown position-relative">
                    <button
                      className="dropdown-btn d-flex align-items-center justify-content-between py-1 px-3 rounded-3 border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      style={{ width: 116, height: 40 }}
                    >
                      {activeCity}
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ms-5 dropdown-arrow"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <ul className="dropdown-menu custom-dropdown-menu position-absolute overflow-y-scroll scrollbar-max-height hide-scrollbar">
                      {city.map((city) => (
                        <li key={city.id}>
                          <a
                            onClick={(e) => handleChangeCity(e, city.name)}
                            className="dropdown-item"
                            href="#"
                          >
                            {city.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="dropdown position-relative">
                  <button
                    className="dropdown-btn d-flex align-items-center justify-content-between py-1 px-3 rounded-3 border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ width: 116, height: 40 }}
                  >
                    {activeFood}
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ms-5 dropdown-arrow"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <ul className="dropdown-menu custom-dropdown-menu position-absolute overflow-y-scroll scrollbar-max-height hide-scrollbar">
                    {foodType.map((food) => (
                      <li key={food.id}>
                        <a
                          onClick={(e) => handleChangeFood(e, food.type)}
                          className="dropdown-item"
                          href="#"
                        >
                          {food.type}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-lg-none d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-gray-200 justify-content-center align-items-center p-3 ms-2 rounded-3"
                    style={{ width: 40, height: 40 }}
                    aria-label="Page 1"
                  >
                    {result.length}
                  </button>
                  <button
                    type="button"
                    onClick={handleClearFilter}
                    className="clear-btn d-flex btn btn-gray-200 justify-content-center text-center align-items-center p-3 mx-3 rounded-3"
                    style={{ height: 40 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00033 9.33317L2.66699 5.99984M2.66699 5.99984L6.00033 2.6665M2.66699 5.99984H9.66699C10.1485 5.99984 10.6253 6.09468 11.0702 6.27895C11.515 6.46321 11.9192 6.7333 12.2597 7.07378C12.6002 7.41426 12.8703 7.81847 13.0546 8.26333C13.2388 8.70819 13.3337 9.18499 13.3337 9.6665C13.3337 10.148 13.2388 10.6248 13.0546 11.0697C12.8703 11.5145 12.6002 11.9187 12.2597 12.2592C11.9192 12.5997 11.515 12.8698 11.0702 13.0541C10.6253 13.2383 10.1485 13.3332 9.66699 13.3332H7.33366"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/*數字 & 重置*/}
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="d-none d-lg-flex btn btn-gray-200 justify-content-center align-items-center p-3 ms-2 rounded-3"
                  style={{ width: 40, height: 40 }}
                  aria-label="Page 1"
                >
                  {result.length}
                </button>
                <button
                  type="button"
                  onClick={handleClearFilter}
                  className="clear-btn d-none d-lg-flex btn btn-gray-200 justify-content-center align-items-center p-3 px-7 ms-2 rounded-3"
                  style={{ height: 40 }}
                >
                  清空篩選
                  <svg
                    className="ms-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00033 9.33317L2.66699 5.99984M2.66699 5.99984L6.00033 2.6665M2.66699 5.99984H9.66699C10.1485 5.99984 10.6253 6.09468 11.0702 6.27895C11.515 6.46321 11.9192 6.7333 12.2597 7.07378C12.6002 7.41426 12.8703 7.81847 13.0546 8.26333C13.2388 8.70819 13.3337 9.18499 13.3337 9.6665C13.3337 10.148 13.2388 10.6248 13.0546 11.0697C12.8703 11.5145 12.6002 11.9187 12.2597 12.2592C11.9192 12.5997 11.515 12.8698 11.0702 13.0541C10.6253 13.2383 10.1485 13.3332 9.66699 13.3332H7.33366"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <main className="postCard mb-18">
          {loading ? (
            <FullScreenLoading />
          ) : result.length === 0 ? (
            <p className="fs-4 text-center py-20">目前還沒有貼文 ( ´•̥̥̥ω•̥̥̥` )</p>
          ) : (
            result.map((post) => {
              const timeAgo = dayjs(post.createdPostDate).fromNow();
              const now = dayjs();
              const isNewPost =
                now.diff(dayjs(post.createdPostDate), 'day') <= 3;
              const isAvailable =
                post.food?.restQuantity !== 0 &&
                dayjs().isBefore(dayjs(post.food?.expiryDate)) &&
                post?.user?.id !== getUserId(uid);
              const isTaken = post.food?.restQuantity === 0;

              return (
                <article
                  key={post.id}
                  className="post-card bg-white p-5 my-5 rounded-3"
                >
                  {/* <pre>{JSON.stringify(timeAgo)}</pre> */}
                  {/* <pre>{JSON.stringify(isNewPost)}</pre> */}
                  <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-lg-9 position-relative">
                      <Link
                        to={`/post/${post.id}`}
                        className="position-absolute top-0 start-0 w-100 h-75"
                      />
                      <div className="ps-lg-5">
                        {post.user && (
                          <div className="d-flex flex-wrap align-items-center py-4">
                            <div className="card-header d-flex align-items-center me-auto mb-5 mb-md-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src={post?.user?.avatarUrl}
                                  alt={post?.user?.avatarUrl}
                                  className="rounded-circle me-4 object-fit-cover"
                                  width={48}
                                  height={48}
                                />
                                <div>
                                  <h2 className="h5 mb-1">
                                    {post?.user?.nickName}
                                  </h2>
                                  <p className="text-gray-700 small mb-0">
                                    {post.pickup?.city} /{' '}
                                    {post.pickup?.district}· {timeAgo}
                                  </p>
                                </div>
                              </div>
                              {post?.user?.id === getUserId(uid) && isLogin && (
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shareFoodEditModal"
                                  onClick={() => handleEditPost(post.id)}
                                  className="z-1 ms-auto d-md-none"
                                >
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 3.00023H5C4.46957 3.00023 3.96086 3.21094 3.58579 3.58601C3.21071 3.96109 3 4.46979 3 5.00023V19.0002C3 19.5307 3.21071 20.0394 3.58579 20.4144C3.96086 20.7895 4.46957 21.0002 5 21.0002H19C19.5304 21.0002 20.0391 20.7895 20.4142 20.4144C20.7893 20.0394 21 19.5307 21 19.0002V12.0002M18.375 2.62523C18.7728 2.2274 19.3124 2.00391 19.875 2.00391C20.4376 2.00391 20.9772 2.2274 21.375 2.62523C21.7728 3.02305 21.9963 3.56262 21.9963 4.12523C21.9963 4.68784 21.7728 5.2274 21.375 5.62523L12.362 14.6392C12.1245 14.8765 11.8312 15.0501 11.509 15.1442L8.636 15.9842C8.54995 16.0093 8.45874 16.0108 8.37191 15.9886C8.28508 15.9663 8.20583 15.9212 8.14245 15.8578C8.07907 15.7944 8.03389 15.7151 8.01164 15.6283C7.9894 15.5415 7.9909 15.4503 8.016 15.3642L8.856 12.4912C8.95053 12.1693 9.12453 11.8763 9.362 11.6392L18.375 2.62523Z"
                                      stroke="black"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              )}
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                              {isNewPost && (
                                <span className="badge bg-primary">最新</span>
                              )}
                              {post.likeCount > 100 && (
                                <span className="badge bg-primary">熱門</span>
                              )}
                              {isAvailable ? (
                                <span className="badge bg-primary">
                                  仍可領取
                                </span>
                              ) : (
                                isTaken && (
                                  <span className="badge bg-primary-200">
                                    已領取
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}
                        <div className="py-7 border-top border-bottom">
                          <div className="d-flex">
                            <h2 className="fs-3 mb-5">{post.title}</h2>
                            {post?.user?.id === getUserId(uid) && isLogin && (
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#shareFoodEditModal"
                                onClick={() => handleEditPost(post.id)}
                                className="z-1 ms-auto d-none d-md-block"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 3.00023H5C4.46957 3.00023 3.96086 3.21094 3.58579 3.58601C3.21071 3.96109 3 4.46979 3 5.00023V19.0002C3 19.5307 3.21071 20.0394 3.58579 20.4144C3.96086 20.7895 4.46957 21.0002 5 21.0002H19C19.5304 21.0002 20.0391 20.7895 20.4142 20.4144C20.7893 20.0394 21 19.5307 21 19.0002V12.0002M18.375 2.62523C18.7728 2.2274 19.3124 2.00391 19.875 2.00391C20.4376 2.00391 20.9772 2.2274 21.375 2.62523C21.7728 3.02305 21.9963 3.56262 21.9963 4.12523C21.9963 4.68784 21.7728 5.2274 21.375 5.62523L12.362 14.6392C12.1245 14.8765 11.8312 15.0501 11.509 15.1442L8.636 15.9842C8.54995 16.0093 8.45874 16.0108 8.37191 15.9886C8.28508 15.9663 8.20583 15.9212 8.14245 15.8578C8.07907 15.7944 8.03389 15.7151 8.01164 15.6283C7.9894 15.5415 7.9909 15.4503 8.016 15.3642L8.856 12.4912C8.95053 12.1693 9.12453 11.8763 9.362 11.6392L18.375 2.62523Z"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                          <p className="text-gray-700 text-truncate mb-5">
                            {post.content}
                          </p>
                          <div className="d-flex gap-7 text-black">
                            <div className="d-flex align-items-center">
                              <svg
                                className="me-2"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.06251 12.3479C1.97916 12.1234 1.97916 11.8764 2.06251 11.6519C2.87421 9.68373 4.25202 8.00091 6.02128 6.81677C7.79053 5.63263 9.87155 5.00049 12.0005 5.00049C14.1295 5.00049 16.2105 5.63263 17.9797 6.81677C19.749 8.00091 21.1268 9.68373 21.9385 11.6519C22.0218 11.8764 22.0218 12.1234 21.9385 12.3479C21.1268 14.316 19.749 15.9988 17.9797 17.183C16.2105 18.3671 14.1295 18.9993 12.0005 18.9993C9.87155 18.9993 7.79053 18.3671 6.02128 17.183C4.25202 15.9988 2.87421 14.316 2.06251 12.3479Z"
                                  stroke="black"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.0005 14.9999C13.6574 14.9999 15.0005 13.6567 15.0005 11.9999C15.0005 10.343 13.6574 8.99987 12.0005 8.99987C10.3437 8.99987 9.00051 10.343 9.00051 11.9999C9.00051 13.6567 10.3437 14.9999 12.0005 14.9999Z"
                                  stroke="black"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {post.viewCount}
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                className="me-2"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                                  stroke="#121212"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {post.commentCount}
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                className="me-2"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                                  stroke="#121212"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {post.likeCount}
                            </div>
                          </div>
                        </div>
                        <div className="post-card-md-btn-list d-none d-md-block mt-5">
                          <div className="row mx-0">
                            {post?.user?.id !== getUserId(uid) && (
                              <div className="col ps-0 pe-1">
                                <button
                                  onClick={() => {
                                    navigate(`/post/${post.id}`);
                                  }}
                                  type="button"
                                  className={`get-btn btn bg-black text-white w-100 ${
                                    !isAvailable ? 'not-allowed' : ''
                                  }`}
                                  disabled={!isAvailable}
                                >
                                  <span className="me-2">我要領取</span>
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.0001 11V6C18.0001 5.46957 17.7894 4.96086 17.4143 4.58579C17.0392 4.21071 16.5305 4 16.0001 4C15.4697 4 14.961 4.21071 14.5859 4.58579C14.2108 4.96086 14.0001 5.46957 14.0001 6M14.0001 10V4C14.0001 3.46957 13.7894 2.96086 13.4143 2.58579C13.0392 2.21071 12.5305 2 12.0001 2C11.4697 2 10.961 2.21071 10.5859 2.58579C10.2108 2.96086 10.0001 3.46957 10.0001 4V6M10.0001 6V10.5M10.0001 6C10.0001 5.46957 9.78939 4.96086 9.41432 4.58579C9.03924 4.21071 8.53054 4 8.0001 4C7.46967 4 6.96096 4.21071 6.58589 4.58579C6.21082 4.96086 6.0001 5.46957 6.0001 6V14M18.0001 8C18.0001 7.46957 18.2108 6.96086 18.5859 6.58579C18.961 6.21071 19.4697 6 20.0001 6C20.5305 6 21.0392 6.21071 21.4143 6.58579C21.7894 6.96086 22.0001 7.46957 22.0001 8V14C22.0001 16.1217 21.1572 18.1566 19.657 19.6569C18.1567 21.1571 16.1218 22 14.0001 22H12.0001C9.2001 22 7.5001 21.14 6.0101 19.66L2.4101 16.06C2.06604 15.6789 1.88169 15.1802 1.89523 14.6669C1.90876 14.1537 2.11915 13.6653 2.48282 13.303C2.8465 12.9406 3.3356 12.7319 3.84888 12.7202C4.36215 12.7085 4.86027 12.8946 5.2401 13.24L7.0001 15"
                                      stroke="white"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            )}
                            <div className="col px-1">
                              <button
                                onClick={() => {
                                  handleChangeLike(post.id);
                                }}
                                type="button"
                                className="nomoral-btn btn w-100 d-flex justify-content-center align-items-center"
                              >
                                <span
                                  className={`me-2 ${
                                    likes[post.id] ? 'text-primary' : ''
                                  }`}
                                >
                                  點讚
                                </span>
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 24 24"
                                  fill={likes[post.id] ? '#00503F' : 'none'}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                                    stroke={likes[post.id] ? '#fff' : '#121212'}
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="col px-1">
                              <Link
                                to={`/post/${post.id}`}
                                className="nomoral-btn btn w-100 d-flex justify-content-center align-items-center"
                              >
                                <span className="me-2">留言</span>
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                                    stroke="#121212"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="col ps-1 pe-0">
                              <button
                                onClick={() => {
                                  handelChangeFllow(post.id);
                                }}
                                type="button"
                                className="nomoral-btn btn w-100 d-flex justify-content-center align-items-center"
                              >
                                <span
                                  className={`me-2 ${
                                    follows[post.id] ? 'text-primary' : ''
                                  }`}
                                >
                                  追蹤貼文
                                </span>
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 24 24"
                                  fill={follows[post.id] ? '#00503F' : 'none'}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                                    stroke={
                                      follows[post.id] ? '#00503F' : '#121212'
                                    }
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="post-card-sm-btn-list d-block d-md-none mt-5">
                          <div className="mb-5">
                            <div className="d-flex align-items-center">
                              <div className="ps-0 pe-1">
                                <button
                                  onClick={() => {
                                    handleChangeLike(post.id);
                                  }}
                                  type="button"
                                  className="nomoral-sm-btn btn p-5"
                                >
                                  <svg
                                    className="d-block"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill={likes[post.id] ? '#00503F' : 'none'}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z"
                                      stroke={
                                        likes[post.id] ? '#fff' : '#121212'
                                      }
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className="px-1">
                                <Link
                                  to={`/post/${post.id}`}
                                  type="button"
                                  className="nomoral-sm-btn btn p-5"
                                >
                                  <svg
                                    className="d-block"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                                      stroke="#121212"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="ps-1 pe-0">
                                <button
                                  onClick={() => {
                                    handelChangeFllow(post.id);
                                  }}
                                  type="button"
                                  className="nomoral-sm-btn btn p-5"
                                >
                                  <svg
                                    className="d-block"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill={follows[post.id] ? '#00503F' : 'none'}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                                      stroke={
                                        follows[post.id] ? '#00503F' : '#121212'
                                      }
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          {post?.user?.id !== getUserId(uid) && (
                            <button
                              onClick={() => {
                                navigate(`/post/${post.id}`);
                              }}
                              type="button"
                              className={`get-btn btn bg-black text-white w-100 ${
                                !isAvailable ? 'not-allowed' : ''
                              }`}
                              disabled={!isAvailable}
                            >
                              <span className="me-2">我要領取</span>
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.0001 11V6C18.0001 5.46957 17.7894 4.96086 17.4143 4.58579C17.0392 4.21071 16.5305 4 16.0001 4C15.4697 4 14.961 4.21071 14.5859 4.58579C14.2108 4.96086 14.0001 5.46957 14.0001 6M14.0001 10V4C14.0001 3.46957 13.7894 2.96086 13.4143 2.58579C13.0392 2.21071 12.5305 2 12.0001 2C11.4697 2 10.961 2.21071 10.5859 2.58579C10.2108 2.96086 10.0001 3.46957 10.0001 4V6M10.0001 6V10.5M10.0001 6C10.0001 5.46957 9.78939 4.96086 9.41432 4.58579C9.03924 4.21071 8.53054 4 8.0001 4C7.46967 4 6.96096 4.21071 6.58589 4.58579C6.21082 4.96086 6.0001 5.46957 6.0001 6V14M18.0001 8C18.0001 7.46957 18.2108 6.96086 18.5859 6.58579C18.961 6.21071 19.4697 6 20.0001 6C20.5305 6 21.0392 6.21071 21.4143 6.58579C21.7894 6.96086 22.0001 7.46957 22.0001 8V14C22.0001 16.1217 21.1572 18.1566 19.657 19.6569C18.1567 21.1571 16.1218 22 14.0001 22H12.0001C9.2001 22 7.5001 21.14 6.0101 19.66L2.4101 16.06C2.06604 15.6789 1.88169 15.1802 1.89523 14.6669C1.90876 14.1537 2.11915 13.6653 2.48282 13.303C2.8465 12.9406 3.3356 12.7319 3.84888 12.7202C4.36215 12.7085 4.86027 12.8946 5.2401 13.24L7.0001 15"
                                  stroke="white"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="post-card-img col-lg-3 px-4 mb-7 mb-lg-0">
                      <Link
                        to={`/post/${post.id}`}
                        className="img-hover position-relative w-100 h-100"
                      >
                        <div className="card-hover bg-primary w-100 h-100 position-absolute top-0 start-0 rounded-3">
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                              fill="#ffffff"
                            />
                          </svg>
                          <div className="fs-4 fw-medium text-white mt-5">
                            查看更多
                          </div>
                        </div>
                        <img
                          src={post.imagesUrl[0]}
                          alt="Property image"
                          className="img-fluid rounded-3 object-fit-cover"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </main>
      </div>
      <div ref={endTriggerRef}></div>

      <ShareFoodModal />

      {/* CTA */}
      <CircleCTAButton
        title={'分享美味'}
        startTriggerRef={startTriggerRef}
        endTriggerRef={endTriggerRef}
        startPosition={'top 2%'}
        endPosition={'bottom -200%'}
      />
    </>
  );
}

export default AllPosts;
