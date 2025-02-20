function AccountSettingForm() {
    return(<>
        <div className="col-sm-3 mb-2">
            <div className="bg-white rounded-3 text-center d-flex flex-column py-7">
                <img src="../assets/images/settings-avatar.png" alt="avatar" className="pb-7 px-17" />
                <div className="d-flex flex-sm-column flex-sm-column-reverse justify-content-center">
                    <div className="me-2 me-sm-0">
                        <button type="button" className="btn btn-white fw-bold h6">刪除照片</button>
                    </div>
                    <div className="mb-sm-2">
                        <button type="button" className="btn btn-dark fw-bold h6">上傳新照片</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-9">
            <div className="row">
                <div className="col">
                    <div>
                        <form action="" className="bg-white rounded-top-3 p-7">
                            <div className="row row-cols-sm-2">
                                <div className="mb-7">
                                    <label className="form-label h6 fw-bold text-gray-700 pb-2" htmlFor="accountName">姓名</label>
                                    <input type="text" name="accountName" id="accountName" className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account" placeholder="Ariel" />
                                </div>
                                <div className="mb-7">
                                    <label className="form-label h6 fw-bold text-gray-700 pb-2" htmlFor="accountNickname">暱稱</label>
                                    <input type="text" name="accountNickname" id="accountNickname" className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account" placeholder="王小羽" />
                                </div>
                            </div>
                            <div className="row row-cols-sm-2">
                                <div className="mb-7">
                                    <label className="form-label h6 fw-bold text-gray-700 pb-2" htmlFor="accountEmail">電子郵件</label>
                                    <input type="email" name="accountEmail" id="accountEmail" className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account" placeholder="abc123@gmail.com" />
                                </div>
                                <div className="mb-7">
                                    <label className="form-label h6 fw-bold text-gray-700 pb-2" htmlFor="accountPhone">聯絡電話</label>
                                    <input type="phone" name="accountPhone" id="accountPhone" className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account" placeholder="0912345678" />
                                </div>
                            </div>
                            <div className="mb-7">
                                <label className="form-label h6 fw-bold text-gray-700 pb-2" htmlFor="accountCity">所在位置</label>
                                    <div className="d-flex gap-2">
                                        <div className="col-6 col-md-auto">
                                            <select className="form-select bg-white py-2 px-5 border-gray-400 rounded-3" id="accountCity" aria-label="Default select example">
                                                <option disabled>請選擇城市</option>
                                                <option value="台北市" selected>台北市</option>
                                                <option value="新北市">新北市</option>
                                                <option value="基隆市">基隆市</option>
                                            </select>
                                        </div>
                                        <div className="col-6 col-md-auto">
                                            <select className="form-select bg-white py-2 px-5 border-gray-400 rounded-3" id="accountDistrict" aria-label="Default select example">
                                                <option disabled>請選擇地區</option>
                                                <option value="信義區" selected>信義區</option>
                                                <option value="中正區">中正區</option>
                                                <option value="南港區">南港區</option>
                                            </select>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <label className="form-label h6 fw-bold text-gray-700 pb-2" htmlFor="accountIntro">個人介紹</label>
                                <textarea className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account" name="accountIntro" id="accountIntro" rows="8">大家好,我是一個熱愛美食並喜歡與他人分享美食的人。
            無論是自己動手做的料理,還是發現的美味餐廳,我都樂於與朋友們分享這些美好的食物體驗。
            希望能夠通過分享美食,讓大家的生活更加豐富和快樂!😊</textarea>
                            </div>
                        </form>
                        <div className="border-top rounded-bottom-3 bg-white p-7">
                            <div className="d-flex justify-content-end">
                                <div className="me-2">
                                    <button type="button" className="btn btn-white fw-bold h6" id="changePassword">變更密碼</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark fw-bold h6" id="updateSetting">更新個人設定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default AccountSettingForm