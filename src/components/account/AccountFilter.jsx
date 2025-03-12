import { useEffect, useRef } from 'react';

function AccountFilter({ setFilter, filter, postData }) {
  const allPostsCount = postData ? postData.length : 0;

  const expiredPostsCount = postData
    ? postData.filter((item) => {
        const createdDate = new Date(item.createdPostDate);
        const today = new Date();
        createdDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        const diffTime = today.getTime() - createdDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 30;
      }).length
    : 0;

  const notExpiredPostsCount = postData
    ? postData.filter((item) => {
        const createdDate = new Date(item.createdPostDate);
        const today = new Date();
        createdDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        const diffTime = today.getTime() - createdDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30;
      }).length
    : 0;

  const scrollContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const searchInput = searchInputRef.current;
    if (container && searchInput) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            searchInput.classList.add('border-white');
          } else {
            searchInput.classList.remove('border-white');
          }
        },
        { threshold: 0 }
      );
      observer.observe(searchInput);
      return () => {
        observer.unobserve(searchInput);
      };
    }
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="fw-bolder text-black mb-7 d-none d-lg-block">
          我的發文
        </h2>
        <div className="posts-wrap">
          <ul
            ref={scrollContainerRef}
            className="g-2 mt-2 mb-2 d-flex align-items-center gap-2 posts-menu 
          d-lg-flex account-filter-overflow"
          >
            <li className="col-2 list-group-item ps-0 w-auto">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`btn py-3 px-5 text-start w-100 text-nowrap btn-sm rounded-3 d-flex justify-content-between align-items-center ${
                  filter === 'all' ? 'btn-primary' : 'btn-light'
                }`}
              >
                <span
                  className={`fs-6 pe-6 me-16  ${
                    filter === 'all' ? '' : 'text-gray-700'
                  }`}
                >
                  全部
                </span>

                <span
                  className={`badge text-primary rounded-circle fw-medium ${
                    filter === 'all' ? 'bg-white' : 'bg-bedge-color'
                  }`}
                >
                  {allPostsCount}
                </span>
              </button>
            </li>
            <li className="col-2 list-group-item border-0 p-0 w-auto">
              <button
                type="button"
                onClick={() => setFilter('notExpired')}
                className={`btn py-3 px-5 text-start w-100 text-nowrap btn-sm rounded-3 d-flex align-items-center ${
                  filter === 'notExpired' ? 'btn-primary' : 'btn-light'
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3327 4L5.99935 11.3333L2.66602 8"
                    stroke={filter === 'notExpired' ? 'white' : '#484848'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  className={`fs-6 ms-2 pe-12  ${
                    filter === 'notExpired' ? '' : 'text-gray-700'
                  }`}
                >
                  未過期
                </span>
                <span
                  className={`badge text-primary rounded-circle fw-medium ${
                    filter === 'notExpired' ? 'bg-white' : 'bg-bedge-color'
                  }`}
                >
                  {notExpiredPostsCount}
                </span>
              </button>
            </li>
            <li className="col-2 list-group-item border-0 p-0 w-auto">
              <button
                type="button"
                onClick={() => setFilter('expired')}
                className={`btn py-3 px-5 text-start w-100 text-nowrap btn-sm rounded-3 d-flex align-items-center ${
                  filter === 'expired' ? 'btn-primary' : 'btn-light'
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_228_3113)">
                    <path
                      d="M8.00065 1.33337V4.00004M10.8007 5.20004L12.734 3.26671M12.0007 8.00004H14.6673M10.8007 10.8L12.734 12.7334M8.00065 12V14.6667M3.26732 12.7334L5.20065 10.8M1.33398 8.00004H4.00065M3.26732 3.26671L5.20065 5.20004"
                      stroke={filter === 'expired' ? 'white' : '#484848'}
                      strokeOpacity="0.533333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_228_3113">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  className={`fs-6 ms-2 pe-12  ${
                    filter === 'expired' ? '' : 'text-gray-700'
                  }`}
                >
                  已過期
                </span>
                <span
                  className={`badge text-primary rounded-circle fw-medium ${
                    filter === 'expired' ? 'bg-white' : 'bg-bedge-color'
                  }`}
                >
                  {expiredPostsCount}
                </span>
              </button>
            </li>

            <li className="list-group-item border-0 p-0 w-100 d-flex justify-content-between">
              <form className="d-flex w-100">
                <input
                  ref={searchInputRef}
                  className="form-control bg-white border-white py-4 px-5 posts-rounded"
                  type="search"
                  placeholder="搜尋發文"
                  aria-label="Search"
                />
              </form>
              <img
                src="../assets/images/icon/search.svg"
                alt=""
                className="bg-white rounded-end pe-5 "
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default AccountFilter;
