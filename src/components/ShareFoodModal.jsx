import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { overfoodOptions, meatOrVeggieOptions } from '../data/radioOptions';
import CityDistrictSelector from './formElements/CityDistrictSelector';
import InputTextGroup from './formElements/InputTextGroup';
import InputText from './formElements/InputText';
import TextArea from './formElements/TextArea';
import SelectBox from './formElements/SelectBox';
import RadioGroup from './formElements/RadioGroup';
import TimePicker from './formElements/TimePicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ShareFoodModal = () => {
  const [startDate, setStartDate] = useState(null);
  const methods = useForm({
    defaultValues: {
      InputTitle: '',
      InputFood: '',
      FoodType: '',
      SaveMethod: '',
      FoodNum: '',
      exp: '',
      city: '',
      district: '',
      overfood: '',
      MeatOrVeggie: '',
      pickUpCity: '',
      inputAddress: '',
      TimePicker: '',
      UpdatePhoto: '',
      ReplyMessage: '',
    },
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    alert('表單已送出');
    reset();
  };

  return (
    <>
      <FormProvider {...methods}>
        <div
          className="modal fade"
          id="shareFoodModal"
          tabIndex="-1"
          aria-labelledby="shareFoodModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content bg-white">
              <div className="modal-header border-0 p-lg-7 py-7 px-4">
                <h1
                  className="modal-title fw-bolder lh-xs"
                  id="shareFoodModalLabel"
                >
                  分享美味
                </h1>
                <img
                  src="../assets/images/icon/x.svg"
                  alt=""
                  className="ms-auto pointer"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body p-lg-7">
                <p className="text-black mb-5">
                  請回答以下所有問題，讓領取者清楚了解您分享的食物。
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="shareFood"
                  noValidate
                >
                  <div className="row">
                    <InputTextGroup
                      register={register}
                      errors={errors}
                      labelText="貼文標題"
                      id="InputTitle"
                      type="text"
                      rules={{
                        required: {
                          value: true,
                          message: '標題為必填',
                        },
                      }}
                    />

                    <InputTextGroup
                      register={register}
                      errors={errors}
                      labelText="食物名稱"
                      id="InputFood"
                      type="text"
                      rules={{
                        required: {
                          value: true,
                          message: '食物名稱為必填',
                        },
                      }}
                    />
                    <div className="col-lg-6">
                      {/* 食物類型 */}
                      <div className="mb-7">
                        <div className="share-food-modal d-lg-flex">
                          <div className="me-lg-7 mb-2">
                            <label
                              htmlFor="FoodType"
                              className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-5 py-4"
                            >
                              食物類型
                            </label>
                          </div>
                          <SelectBox
                            register={register}
                            errors={errors}
                            labelText="食物類型"
                            id="FoodType"
                            apiEndpoint="/foodTypes"
                            optionLabelKey="type"
                            optionValueKey="value"
                            rules={{
                              required: {
                                value: true,
                                message: `請選擇食物類型`,
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* 保存方式 */}
                      <div className="mb-7">
                        <div className="share-food-modal d-lg-flex">
                          <div className="me-lg-7 mb-2">
                            <label
                              htmlFor="FoodType"
                              className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4"
                            >
                              保存方式
                            </label>
                          </div>
                          <SelectBox
                            register={register}
                            errors={errors}
                            labelText="保存方式"
                            id="SaveMethod"
                            apiEndpoint="/saveMethod"
                            optionLabelKey="type"
                            optionValueKey="value"
                            rules={{
                              required: {
                                value: true,
                                message: `請選擇食物保存的方式`,
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* 食物份數 */}
                      <div className="mb-4">
                        <div className="share-food-modal d-lg-flex">
                          <div className="me-lg-7 mb-2">
                            <label
                              htmlFor="FoodNum"
                              className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-12 py-4"
                            >
                              食物份數
                            </label>
                          </div>
                          <InputText
                            register={register}
                            errors={errors}
                            labelText="食物份數"
                            id="FoodNum"
                            type="number"
                            rules={{
                              required: {
                                value: true,
                                message: '請最少輸入一份',
                              },
                              min: {
                                value: 0,
                                message: '數字不能小於 0',
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* 有效期限 */}
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <div className="share-food-modal d-lg-flex">
                          <div className="me-lg-7 mb-2">
                            <label
                              htmlFor="exp"
                              className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-7 py-2"
                            >
                              有效期限
                            </label>
                          </div>
                          <DatePicker
                            id="exp"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            name="exp"
                            dateFormat="yyyy/MM/dd"
                            className="form-select border-gray-400 py-2 px-5 rounded-3 bg-white"
                            placeholderText="請選擇有效期限"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* 是否已過期 */}
                      <RadioGroup
                        register={register}
                        errors={errors}
                        labelText="是否已過期"
                        id="overfood"
                        options={overfoodOptions}
                        rules={{
                          required: { value: true, message: '請至少選擇一項' },
                        }}
                      />
                    </div>
                    <div className="col-lg-6">
                      {/* 葷食/素食 */}
                      <RadioGroup
                        register={register}
                        errors={errors}
                        labelText="葷食/素食"
                        id="MeatOrVeggie"
                        options={meatOrVeggieOptions}
                        rules={{
                          required: { value: true, message: '請至少選擇一項' },
                        }}
                      />
                    </div>

                    {/* 領取地點 */}
                    <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                      <label
                        htmlFor="pickUpCity"
                        className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                      >
                        領取地點
                      </label>
                      <CityDistrictSelector
                        register={register}
                        errors={errors}
                        cityId="city"
                        districtId="district"
                        rules={{
                          required: {
                            value: true,
                            message: '請選擇縣市與地區',
                          },
                        }}
                      />
                      <InputText
                        register={register}
                        errors={errors}
                        id="inputAddress"
                        labelText="地址"
                        rules={{
                          required: {
                            value: true,
                            message: '請填入地址',
                          },
                        }}
                      />
                    </div>

                    {/* 領取時間 */}
                    <div className="share-food-modal mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                      <label
                        htmlFor="TimePicker"
                        className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                      >
                        領取時間
                      </label>
                      <TimePicker />
                    </div>

                    {/* 上傳圖片 */}
                    <div className="share-food-modal mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                      <label
                        htmlFor="UpdatePhoto"
                        className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                      >
                        上傳圖片
                      </label>
                      <input
                        type="file"
                        className="form-control bg-white py-2 px-5 border-gray-400 rounded-3"
                        id="UpdatePhoto"
                        placeholder="請輸入食物名稱"
                      />
                    </div>
                    <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2">
                      <label
                        htmlFor="ReplyMessage"
                        className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 mt-lg-3"
                      >
                        介紹與描述
                      </label>
                      <TextArea
                        register={register}
                        errors={errors}
                        labelText="介紹與描述"
                        id="ReplyMessage"
                        rows="5"
                      />
                    </div>
                  </div>
                  <div className="modal-footer px-0">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      disabled={!isValid}
                    >
                      送出
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default ShareFoodModal;
