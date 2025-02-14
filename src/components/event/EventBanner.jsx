function EventBanner() {
    return (<>
        <section className="event-banner container mb-lg-12">
            <img src="/assets/images/home_event-6.jpg" alt="banner-img" className="mt-4 mt-lg-7 event-banner-cover" />
            <div className="event-banner-header d-flex justify-content-between mb-lg-14 mb-10">
            <div className="event-banner-title-wrap mt-auto">
                <h2 className="mb-5 fs-lg-3 fs-4 fw-bold">餘味尋蹤</h2>
                <h3 className="event-banner-title fw-bolder">
                街友<br className="d-lg-none d-block" />送餐活動
                </h3>
            </div>
            <div className="slogan mt-lg-7 mt-4 fs-2 fw-bolder lh-1">
                <p>愛心分享與</p>
                <p className="vertical-text text-lg-vertical ms-auto">你同行</p>
            </div>
            </div>

            <div className="event-banner-content d-flex justify-content-between align-items-end">
            <ul className="event-banner-intro__info fs-lg-5 fw-medium text-gray-700">
                <li className="d-flex align-items-center gap-2 mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M8 2V6M16 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
                    stroke="#484848" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                2024年08月11日（星期日）
                </li>
                <li className="d-flex align-items-center gap-2 mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                10:00 - 14:00
                </li>
                <li className="d-flex align-items-center gap-2 mb-10 mb-lg-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                台北市中山公園
                </li>
            </ul>

            <div className="d-lg-block d-none fs-1 fw-bolder lh-xs">
                （<a href="#" className="banner-cta">
                立即報名
                </a>）
            </div>

            </div>
        </section>
    </>)
}

export default EventBanner