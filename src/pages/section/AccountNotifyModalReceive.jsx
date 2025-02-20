function AccountNotifyModalReceive() {
    return (<>
        <div className="modal fade notify" id="notifyClaimModal" tabIndex="-1" aria-labelledby="notifyModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
                <div className="modal-content bg-white">
                <div className="modal-header border-0 p-lg-7 py-7 px-4">
                    <h1 className="modal-title fw-bolder lh-xs" id="ModalToggleLabel">領取通知</h1>
                    <img src="../assets/images/icon/x.svg" alt="" className="ms-auto pointer p-2" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body p-lg-7 py-7 px-4">
                    <a href="#" alt="" className="d-block mb-7">
                        <div className="d-flex justify-content-between align-items-center alert alert-secondary p-1 border-0">
                        <div className="d-flex align-items-center">
                            <img src="../assets/images/post-1.jpg" alt="" className="nofify-modal-img rounded-1" />
                            <h5 className="fw-bold ps-5 text-nowrap overflow-hidden text-overflow pe-2">奢華午餐，尋找飢餓的你！</h5>
                        </div>
                        <div className="p-2 me-sm-4">
                            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        </div>
                    </a>
                    <div className="d-flex align-items-center mb-7">
                        <img src="../assets/images/icon/path.svg" alt="" />
                        <h4 className="fw-bold fs-5 fs-lg-4 ps-2 d-block d-md-inline">我已經準備好囉～<span className="d-block d-md-inline">快來領取你的食物吧！</span></h4>
                    </div>
                    <h6 className="fw-bold mb-2">Logi:</h6>
                    <p className="text-gray-700 d-inline-block">嗨！感謝你對我的食物分享活動感興趣，你所預訂的食物可以領取了！<br />
                        領取時間：今天下午2點至4點<br />
                        領取地點：台北市信義區XXXXXXX<br />
                        聯繫方式：0912345678<br />
                        請記得帶上你的環保餐具，享受這美味的食物！如果有任何問題，請隨時聯繫我～～</p>
                </div>
                {/* <!-- 電腦版 - 馬上領取 --> */}
                <div className="modal-footer p-7 d-sm-block d-none">
                    <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-white" id="giveUpBtn">放棄領取</button>
                    <div className="d-flex">
                        <div className="me-2">
                        <input type="text" className="form-control-sm form-control p-5 border-gray-400 rounded-3 bg-white lh-account" id="getCodePC" placeholder="請輸入領取碼" />
                        <div id="passwordHelpBlock" className="form-text text-start ps-1">
                            請向發文者索取領取碼
                        </div>
                        </div>
                        <button type="button" className="btn btn-primary text-nowrap py-4" id="orderNowPC" data-bs-dismiss="modal" disabled>馬上領取</button>
                    </div>
                    </div>
                </div>
                {/* <!-- 手機版 - 馬上領取 --> */}
                <div className="d-sm-none border-top text-end">
                    <div className="my-7 mx-4">
                    <button type="button" className="btn btn-white" id="giveUpBtn">放棄領取</button>
                    <button type="button" className="btn btn-primary" id="orderNowPhone" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">馬上領取</button>
                    </div>
                    
                    <div className="offcanvas offcanvas-bottom rounded-top bg-white mb-0 custom-offcanvas" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header pt-8 px-4 pb-6">
                        <h3 className="offcanvas-title fw-bold lh-sm" id="offcanvasWithBothOptionsLabel">輸入領取號碼</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="pt-2 px-4 pb-7">
                        <div className="d-flex">
                            <input type="text" className="form-control py-4 px-5 border-gray-400 rounded-3 bg-white lh-account me-2" id="getCodePhone" placeholder="輸入領取號碼" />
                        <div>
                            <button type="button" className="btn btn-primary fw-bold h6 text-nowrap" id="giveUpBtn" disabled>確定</button>
                        </div>
                        </div>
                        <div id="passwordHelpBlock" className="form-text text-start ps-1">
                        請向發文者索取領取碼
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </>)
}
export default AccountNotifyModalReceive