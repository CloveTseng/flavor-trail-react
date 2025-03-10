import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import InputText from '../../components/formElements/InputText';
import AccountSettingModalPassword from './AccountSettingModalPassword';
import ChangePhotoModal from '../../components/account/ChangePhotoModal';
import logo from '/assets/images/Logo.png';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_ID = '1';

function AccountSettingForm() {
  // const [cities, setCities] = useState([]);
  // const [districts, setDistricts] = useState([]);
  // const [selectedCityId, setSelectedCityId] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [accountData, setAccountData] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const methods = useForm({
    defaultValues: {},
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    watch,
    reset,
  } = methods;

  const watchAllFields = watch();
  const avatarUrl = watch('avatarUrl') || logo;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/${USER_ID}`);
        setAccountData(res.data);
        setIsDataLoaded(true);

        const initialData = {
          name: res.data.name || '',
          nickName: res.data.nickName || '',
          email: res.data.email || '',
          phone: res.data.phone || '',
          pickupCity: res.data.pickupCity || '',
          pickupDistrict: res.data.pickupDistrict || '',
          introduce: res.data.introduce || '',
          avatarUrl: res.data.avatarUrl || null,
        };
        setInitialValues(initialData);
        reset(initialData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const hasChanged = Object.keys(initialValues).some((key) => {
      return getValues(key) !== initialValues[key];
    });
    setIsFormChanged(hasChanged);
  }, [watchAllFields]);

  const changeData = async (data) => {
    try {
      const res = await axios.patch(`${BASE_URL}/users/${USER_ID}`, data);
      setAccountData(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletePhoto = async () => {
    try {
      const res = await axios.patch(`${BASE_URL}/users/${USER_ID}`, {
        avatarUrl: null,
      });
      alert('照片刪除成功');
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   const getTwCities = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await axios.get(`${BASE_URL}/twCities`);
  //       setCities(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getTwCities();
  // }, []);

  // useEffect(() => {
  //   const getDistricts = async () => {
  //     if (selectedCityId) {
  //       setIsLoading(true);
  //       try {
  //         const res = await axios.get(`${BASE_URL}/twCities/${selectedCityId}`);
  //         setDistricts(res.data.districts);
  //       } catch (error) {
  //         console.log(error.message);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     } else {
  //       setDistricts([]);
  //     }
  //   };
  //   getDistricts();
  // }, [selectedCityId]);

  const onSubmit = (data) => {
    changeData(data);
    console.log(data);
    alert('個人資料已修改');
    setIsFormChanged(false);
  };

  if (!accountData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* 大頭照 */}
      <FormProvider {...methods}>
        <div className="col-lg-3 mb-2">
          <div className="bg-white rounded-3 text-center d-flex flex-column py-7">
            <div className="overflow-hidden rounded-circle avatar-img m-auto mb-7">
              <img
                src={avatarUrl}
                alt="avatar"
                className="object-fit-cover"
                id="avatarUrl"
              />
            </div>
            <div className="d-flex flex-sm-column flex-sm-column-reverse justify-content-center">
              <div className="me-2 me-sm-0">
                <button
                  type="button"
                  className="btn btn-white fw-bold h6"
                  onClick={deletePhoto}
                >
                  刪除照片
                </button>
              </div>
              <div className="mb-sm-2">
                <button
                  type="button"
                  className="btn btn-dark fw-bold h6"
                  data-bs-toggle="modal"
                  data-bs-target="#changePhotoModal"
                >
                  上傳新照片
                </button>
              </div>
            </div>
          </div>
        </div>
        <ChangePhotoModal />

        {/* 表單 */}
        <div className="col-lg-9">
          <div className="row">
            <div className="col">
              <div>
                <form
                  className="bg-white rounded-top-3 p-7"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row row-cols-sm-2">
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="name"
                      >
                        姓名
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="姓名"
                        id="name"
                        type="text"
                        name="name"
                        rules={{
                          required: {
                            value: true,
                            message: '標題為必填',
                          },
                        }}
                      />
                    </div>
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="nickName"
                      >
                        暱稱
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="暱稱"
                        id="nickName"
                        name="nickName"
                        type="text"
                        rules={{
                          required: {
                            value: true,
                            message: '標題為必填',
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="row row-cols-sm-2">
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="email"
                      >
                        電子郵件
                      </label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        className="form-control py-2 px-5 border-gray-200 rounded-3 lh-account text-gray-700"
                        disabled
                        {...register('email')}
                      />
                    </div>
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="phone"
                      >
                        聯絡電話
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="聯絡電話"
                        id="phone"
                        name="phone"
                        type="text"
                        rules={{
                          required: {
                            value: true,
                            message: '電話為必填',
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: '電話格式不正確',
                          },
                          minLength: {
                            value: 6,
                            message: '不少於 6 碼',
                          },
                          maxLength: {
                            value: 12,
                            message: '不大於 12 碼',
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-7">
                    <label
                      className="form-label h6 fw-bold text-gray-700 pb-2"
                      htmlFor="pickupCity"
                    >
                      所在位置
                    </label>
                    <div className="d-flex gap-2">
                      {isDataLoaded ? (
                        <>
                          <div className="col-6 col-md-auto">
                            <select
                              className="form-select bg-white py-2 px-5 border-gray-400 rounded-3"
                              id="pickupCity"
                              aria-label="Default select example"
                              name="pickupCity"
                            >
                              <option disabled>請選擇城市</option>
                              <option value="台北市">台北市</option>
                              <option value="新北市">新北市</option>
                              <option value="基隆市">基隆市</option>
                            </select>
                          </div>
                          <div className="col-6 col-md-auto">
                            <select
                              className="form-select bg-white py-2 px-5 border-gray-400 rounded-3"
                              id="pickupDistrict"
                              aria-label="Default select example"
                              name="pickupDistrict"
                            >
                              <option disabled>請選擇地區</option>
                              <option value="信義區">信義區</option>
                              <option value="中正區">中正區</option>
                              <option value="南港區">南港區</option>
                            </select>
                          </div>
                        </>
                      ) : (
                        <div>Loading...</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      className="form-label h6 fw-bold text-gray-700 pb-2"
                      htmlFor="introduce"
                    >
                      個人介紹
                    </label>
                    <textarea
                      className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account"
                      id="introduce"
                      name="introduce"
                      rows="8"
                      {...register('introduce')}
                    ></textarea>
                  </div>
                  <div className="border-top rounded-bottom-3 bg-white pt-7">
                    <div className="d-flex justify-content-end">
                      <div className="me-2">
                        <button
                          type="button"
                          className="btn btn-white fw-bold h6"
                          data-bs-toggle="modal"
                          data-bs-target="#passwordModalToggle"
                        >
                          變更密碼
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-dark fw-bold h6"
                          id="updateSetting"
                          disabled={!isValid || !isFormChanged}
                        >
                          更新個人設定
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
      <AccountSettingModalPassword />
    </>
  );
}

export default AccountSettingForm;
