function AccountNotifyAlert() {
    return (<>
        <div className="position-fixed top-0 end-0 p-3" style="z-index: 1046">
            <div id="liveToast" className="toast hide bg-white" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                <img src="../assets/images/Logo.png" className="rounded me-2" alt="logo" style="width:20px ;height:20px" />
                <strong className="me-auto">已確認領取</strong>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                請自行連絡分享者詳細領取時間。
                </div>
            </div>
        </div>
    </>)
}
export default AccountNotifyAlert