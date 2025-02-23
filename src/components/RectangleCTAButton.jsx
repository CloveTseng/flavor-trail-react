import { useEffect, useState } from 'react';

const RectangleCTAButton = ({ page, title }) => {
  const [scroller, setScroller] = useState(0);
  useEffect(() => {
    function handleCtaRectangleBtnScroll() {
      setScroller((pre) => (pre = window.scrollY));
    }

    window.addEventListener('scroll', handleCtaRectangleBtnScroll);

    return () =>
      window.removeEventListener('scroll', handleCtaRectangleBtnScroll);
  }, [window.scrollY]);
  return (
    <div className="CTA-rectangle d-lg-none d-block mt-10">
      <a
        href="#"
        className={`CTA-rectangle-btn d-flex align-items-center justify-content-center 
        gap-5 py-5 px-7 rounded-3 fs-4 fw-medium ${
          scroller === 0 || scroller < 40 ? '' : 'scrolled-navbar-toggler'
        }`}
      >
        {/* <!-- 根據不同頁面更換 icon --> */}
        {page === 'event' ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-fill-color"
          >
            <path
              d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-stroke-color"
          >
            <path
              d="M18.0001 11V6C18.0001 5.46957 17.7894 4.96086 17.4143 4.58579C17.0392 4.21071 16.5305 4 16.0001 4C15.4697 4 14.961 4.21071 14.5859 4.58579C14.2108 4.96086 14.0001 5.46957 14.0001 6M14.0001 10V4C14.0001 3.46957 13.7894 2.96086 13.4143 2.58579C13.0392 2.21071 12.5305 2 12.0001 2C11.4697 2 10.961 2.21071 10.5859 2.58579C10.2108 2.96086 10.0001 3.46957 10.0001 4V6M10.0001 6V10.5M10.0001 6C10.0001 5.46957 9.78939 4.96086 9.41432 4.58579C9.03924 4.21071 8.53054 4 8.0001 4C7.46967 4 6.96096 4.21071 6.58589 4.58579C6.21082 4.96086 6.0001 5.46957 6.0001 6V14M18.0001 8C18.0001 7.46957 18.2108 6.96086 18.5859 6.58579C18.961 6.21071 19.4697 6 20.0001 6C20.5305 6 21.0392 6.21071 21.4143 6.58579C21.7894 6.96086 22.0001 7.46957 22.0001 8V14C22.0001 16.1217 21.1572 18.1566 19.657 19.6569C18.1567 21.1571 16.1218 22 14.0001 22H12.0001C9.2001 22 7.5001 21.14 6.0101 19.66L2.4101 16.06C2.06604 15.6789 1.88169 15.1802 1.89523 14.6669C1.90876 14.1537 2.11915 13.6653 2.48282 13.303C2.8465 12.9406 3.3356 12.7319 3.84888 12.7202C4.36215 12.7085 4.86027 12.8946 5.2401 13.24L7.0001 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {title}

        {/* <!-- 立即報名 我要領取 --> */}
        {/* <%- currentCtaRectangleTitle %> */}
      </a>
    </div>
  );
};

export default RectangleCTAButton;
