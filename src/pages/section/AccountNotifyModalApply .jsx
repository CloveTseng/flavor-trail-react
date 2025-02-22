function AccountNotifyModalApply() {
    return (<>
        <div className="modal fade notify" id="notifyApplyModal" aria-hidden="true" aria-labelledby="ModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
                <div className="modal-content bg-white">
                <div className="modal-header border-0 p-lg-7 py-7 px-4">
                    <h1 className="modal-title fw-bolder lh-xs" id="ModalToggleLabel">申請通知</h1>
                    <img src="../../assets/images/icon/x.svg" alt="" className="ms-auto pointer p-2" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body p-lg-7 py-7 px-4">
                    <a href="#" alt="" className="d-block mb-7">
                    <div className="d-flex justify-content-between align-items-center alert alert-secondary p-1 border-0">
                        <div className="d-flex align-items-center">
                        <img src="../../assets/images/post-1.jpg" alt="" className="nofify-modal-img rounded-1" />
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
                        <img src="../../assets/images/icon/path.svg" alt="" />
                        <h4 className="fw-bold fs-5 fs-lg-4 ps-2">我喜歡你的食物，我想要領取！</h4>
                    </div>
                    <h6 className="fw-bold mb-2">Oreo:</h6>
                    <p className="text-gray-700 d-inline-block">我看到你分享的食物，感覺非常美味！我想要領取一些，請問我可以過去拿嗎？非常感謝你的分享！😊<br />
                        聯絡電話：0912345678<br />
                        我將在 14:00 時準時抵達</p>
                </div>
                <div className="modal-footer py-7 p-lg-7">
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">拒絕</button>
                    <button className="btn btn-primary" data-bs-target="#notifyApplyModal2" data-bs-toggle="modal" data-bs-dismiss="modal">同意</button>
                </div>
                </div>
            </div>
            </div>
    </>)
}
export default AccountNotifyModalApply