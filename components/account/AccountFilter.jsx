function AccountFilter() {
    return (<>
        <div className="container">
        <h2 className="fw-bolder text-black mb-7 d-none d-lg-block">我的發文</h2>
        <div className="posts-wrap">
            <ul className="g-2 mt-2 mb-2 d-flex align-items-center gap-2 posts-menu">
            <li className="col-2 list-group-item ps-0 w-auto">
                <button type="button"
                className="btn btn-primary py-3 px-5 text-start w-100 text-nowrap btn-sm rounded-3 d-flex justify-content-between align-items-center">
                <span className="fs-6 pe-6 me-16">全部</span>
                <span className="badge bg-white text-primary rounded-circle p-1 fw-medium">9+</span>
                </button>
            </li>
            <li className="col-2 list-group-item border-0 p-0 w-auto">
                <button type="button"
                className="btn btn-light py-3 px-5 text-start w-100 text-nowrap btn-sm rounded-3 d-flex align-items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3327 4L5.99935 11.3333L2.66602 8" stroke="#484848" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className="fs-6 ms-2 pe-12 text-gray-700">已領取</span>
                <span className="badge bg-bedge-color text-primary rounded-circle fw-medium">7</span>
                </button>
            </li>
            <li className="col-2 list-group-item border-0 p-0 w-auto">
                <button type="button"
                className="btn btn-light py-3 px-5 text-start w-100 text-nowrap btn-sm rounded-3 d-flex align-items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_228_3113)">
                    <path
                        d="M8.00065 1.33337V4.00004M10.8007 5.20004L12.734 3.26671M12.0007 8.00004H14.6673M10.8007 10.8L12.734 12.7334M8.00065 12V14.6667M3.26732 12.7334L5.20065 10.8M1.33398 8.00004H4.00065M3.26732 3.26671L5.20065 5.20004"
                        stroke="#484848" strokeOpacity="0.533333" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </g>
                    <defs>
                    <clipPath id="clip0_228_3113">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                    </defs>
                </svg>

                <span className="fs-6 ms-2 pe-12 text-gray-700">未領取</span>
                <span className="badge bg-bedge-color text-primary rounded-circle fw-medium">5</span>
                </button>
            </li>
            <li className="list-group-item border-0 p-0 w-100 d-flex justify-content-between">
                <form className="d-flex w-100">
                <input className="form-control bg-white border-white py-4 px-5 posts-rounded" type="search"
                    placeholder="搜尋發文" aria-label="Search" />
                </form>
                <img src="../assets/images/icon/search.svg" alt="" className="bg-white rounded-end pe-5 " />
            </li>
            </ul>
        </div>
        </div>
    </>)
}
export default AccountFilter