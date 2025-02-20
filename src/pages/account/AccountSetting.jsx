import AccountSettingForm from "../section/AccountSettingForm"
import AccountSettingModalPassword from "../section/AccountSettingModalPassword"

function AccountSetting() {
    
    return (<div className="container">
        <h2 className="fw-bolder text-black mb-7 d-none d-lg-block">個人設定</h2>
        <div className="row flex-sm-row-reverse mb-19">
            <AccountSettingForm />
            <AccountSettingModalPassword />
        </div>
    </div>)
}
export default AccountSetting