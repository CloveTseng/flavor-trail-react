function AccountFilterStatus({
  setStatusFilter,
  statusFilter,
  filteredAppCount,
}) {
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };
  const handleClearFilter = () => {
    setStatusFilter(undefined);
  };

  return (
    <div className="container">
      <div className="notify-status d-flex bg-white p-2 mt-2 mb-7 rounded-3">
        <div className="d-flex align-items-center gap-5 w-100">
          <p className="d-none d-md-block flex-shrink-0 fw-bold text-gray-700 lh-xs ps-2">
            僅顯示
          </p>
          <ul className="notify-status__list d-flex gap-1 bg-gray-200 rounded-3 text-gray-700 text-center">
            <li
              className={`notify-status__list-item py-3 px-2 px-lg-7 flex-grow-1 flex-lg-grow-0 rounded-3 ${
                statusFilter === '已同意' ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handleStatusFilter('已同意')}
            >
              已同意
            </li>
            {/* <li
              className={`notify-status__list-item py-3 px-2 px-lg-7 flex-grow-1 flex-lg-grow-0 rounded-3 ${
                statusFilter === '處理中' ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handleStatusFilter('處理中')}
            >
              處理中
            </li> */}
            <li
              className={`notify-status__list-item py-3 px-2 px-lg-7 flex-grow-1 flex-lg-grow-0 rounded-3 ${
                statusFilter === '待處理' ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handleStatusFilter('待處理')}
            >
              待處理
            </li>
            <li
              className={`notify-status__list-item py-3 px-2 px-lg-7 flex-grow-1 flex-lg-grow-0 rounded-3 ${
                statusFilter === '已取消' ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handleStatusFilter('已取消')}
            >
              已取消
            </li>
          </ul>
        </div>
        <div className="notify-status__result d-none d-md-flex flex-shrink-0 ms-auto fw-bold">
          <span className="bg-gray-200 rounded-3 py-3 px-7 mx-2">
            {filteredAppCount}
          </span>
          <a
            className="notify-status__result-clear d-flex gap-2 align-items-center rounded-3 py-3 px-7"
            onClick={handleClearFilter}
          >
            清空篩選
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99984 9.33335L2.6665 6.00002M2.6665 6.00002L5.99984 2.66669M2.6665 6.00002H9.6665C10.148 6.00002 10.6248 6.09486 11.0697 6.27913C11.5145 6.4634 11.9187 6.73348 12.2592 7.07396C12.5997 7.41444 12.8698 7.81865 13.0541 8.26351C13.2383 8.70837 13.3332 9.18517 13.3332 9.66669C13.3332 10.1482 13.2383 10.625 13.0541 11.0699C12.8698 11.5147 12.5997 11.9189 12.2592 12.2594C11.9187 12.5999 11.5145 12.87 11.0697 13.0542C10.6248 13.2385 10.148 13.3334 9.6665 13.3334H7.33317"
                stroke="#121212"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default AccountFilterStatus;
