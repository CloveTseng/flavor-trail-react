import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import InputText from '../../components/formElements/InputText';
import CityDistrictSelector from '../../components/formElements/CityDistrictSelector';
import TextArea from '../../components/formElements/TextArea';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function AccountSettingForm() {
  const [accountData, setAccountData] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const citySelectorRef = useRef(null);

  const methods = useForm({
    defaultValues: initialValues,
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
    watch,
    reset,
  } = methods;

  const watchAllFields = watch();

  useEffect(() => {
    const hasChanged = Object.keys(initialValues).some((key) => {
      return getValues(key) !== initialValues[key];
    });
    setIsFormChanged(hasChanged);
  }, [watchAllFields]);

  const onSubmit = () => {
    alert('個人資料已修改');
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/1`);
        setAccountData(res.data);

        const initialData = {
          accountName: res.data.name || '',
          accountNickname: res.data.nickName || '',
          accountEmail: res.data.email || '',
          accountPhone: res.data.phone || '',
          accountCity: res.data.pickupCity || '',
          accountDistrict: res.data.pickupDistrict || '',
          accountIntro: res.data.introduce || '',
        };
        setInitialValues(initialData);
        reset(initialData);
        setValue('accountIntro', initialData.accountIntro, {
          shouldValidate: true,
        });

        if (res.data.pickupCity) {
          const targetCity = await (
            await axios.get(`${BASE_URL}/twCities`)
          ).data.find((item) => item.name === res.data.pickupCity);
          setValue('accountCity', targetCity.id, { shouldValidate: true });
        }

        if (citySelectorRef.current) {
          citySelectorRef.current.handleCityChange({
            target: { value: initialData.accountCity },
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!accountData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* 大頭照 */}
      <div className="col-sm-3 mb-2">
        <div className="bg-white rounded-3 text-center d-flex flex-column py-7">
          <img
            src="../assets/images/settings-avatar.png"
            alt="avatar"
            className="pb-7 px-17"
          />
          <div className="d-flex flex-sm-column flex-sm-column-reverse justify-content-center">
            <div className="me-2 me-sm-0">
              <button type="button" className="btn btn-white fw-bold h6">
                刪除照片
              </button>
            </div>
            <div className="mb-sm-2">
              <button type="button" className="btn btn-dark fw-bold h6">
                上傳新照片
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 表單 */}
      <div className="col-sm-9">
        <div className="row">
          <div className="col">
            <div>
              <FormProvider {...methods}>
                <form
                  className="bg-white rounded-top-3 p-7"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row row-cols-sm-2">
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="accountName"
                      >
                        姓名
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="姓名"
                        id="accountName"
                        type="text"
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
                        htmlFor="accountNickname"
                      >
                        暱稱
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="暱稱"
                        id="accountNickname"
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
                        htmlFor="accountEmail"
                      >
                        電子郵件
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="電子郵件"
                        id="accountEmail"
                        type="email"
                        rules={{
                          required: {
                            value: true,
                            message: '信箱為必填',
                          },
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: '信箱格式不正確',
                          },
                        }}
                      />
                    </div>
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="accountPhone"
                      >
                        聯絡電話
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="聯絡電話"
                        id="accountPhone"
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
                      htmlFor="accountCity"
                    >
                      所在位置
                    </label>
                    <div className="d-flex gap-2">
                      <CityDistrictSelector
                        register={register}
                        errors={errors}
                        cityId="accountCity"
                        districtId="accountDistrict"
                        rules={{
                          required: {
                            value: true,
                            message: '請選擇縣市與地區',
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="form-label h6 fw-bold text-gray-700 pb-2"
                      htmlFor="accountIntro"
                    >
                      個人介紹
                    </label>
                    <TextArea
                      register={register}
                      errors={errors}
                      labelText="個人介紹"
                      id="accountIntro"
                      rows="8"
                      value={watch('accountIntro')}
                    />
                  </div>
                  <div className="border-top rounded-bottom-3 bg-white pt-7">
                    <div className="d-flex justify-content-end">
                      <div className="me-2">
                        <button
                          type="button"
                          className="btn btn-white fw-bold h6"
                          id="changePassword"
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
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSettingForm;
