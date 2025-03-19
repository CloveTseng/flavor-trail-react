import axios from 'axios';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
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

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ShareFoodModal = () => {
  const methods = useForm({
    defaultValues: {
      redeemCode: '',
      title: '',
      content: '',
      food: {
        name: '',
        type: '',
        saveMethod: '',
        totalQuantity: 0,
        restQuantity: 0,
        expiryDate: '',
        isPastBestBefore: '',
        dietType: '',
      },
      pickup: {
        city: '',
        district: '',
        time: '',
        address: '',
      },
      imagesUrl: [],
      viewCount: 1,
      commentCount: 0,
      likeCount: 0,
      userId: 1,
    },
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
    getValues,
  } = methods;

  const onSubmit = async (data) => {
    const { food, expiryDate, imagesUrl, ...rest } = data;
    const { totalQuantity, ...submitData } = food;
    const formattedExpiryDate = dayjs(expiryDate).format('YYYY-MM-DD');
    const createdPostDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const uid = nanoid(6);
    const imagesUrlArray = imagesUrl ? [imagesUrl] : [];

    try {
      await toast.promise(
        axios.post(`${BASE_URL}/posts`, {
          ...rest,
          redeemCode: uid,
          food: {
            ...submitData,
            expiryDate: formattedExpiryDate,
            totalQuantity: Number(totalQuantity),
            restQuantity: Number(totalQuantity),
          },
          pickup: {
            ...data.pickup,
          },
          createdPostDate,
          imagesUrl: imagesUrlArray,
        }),
        {
          loading: '發送食物中...',
          success: '分享食物成功',
          error: '分享失敗，請稍候再試',
        }
      );
    } catch (error) {
      console.log(error.message);
    }
    reset();
  };
  const handleDateChange = (date) => {
    setValue('expiryDate', date);
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
                  src="./assets/images/icon/x.svg"
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
                      name="title"
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
                      name="food.name"
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
                              className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4"
                            >
                              食物類型
                              <span className="text-danger"> * </span>
                            </label>
                          </div>
                          <SelectBox
                            register={register}
                            errors={errors}
                            labelText="食物類型"
                            id="FoodType"
                            name="food.type"
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
                              htmlFor="SaveMethod"
                              className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4"
                            >
                              保存方式
                              <span className="text-danger"> * </span>
                            </label>
                          </div>
                          <SelectBox
                            register={register}
                            errors={errors}
                            labelText="保存方式"
                            id="SaveMethod"
                            name="food.saveMethod"
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
                              className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-7 py-4"
                            >
                              食物份數
                              <span className="text-danger"> * </span>
                            </label>
                          </div>
                          <InputText
                            register={register}
                            errors={errors}
                            labelText="食物份數"
                            id="FoodNum"
                            name="food.totalQuantity"
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
                              <span className="text-danger"> * </span>
                            </label>
                          </div>
                          <DatePicker
                            id="exp"
                            selected={getValues('expiryDate')}
                            onChange={handleDateChange}
                            name="food.expiryDate"
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
                        name="food.isPastBestBefore"
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
                        name="food.dietType"
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
                        <span className="text-danger"> * </span>
                      </label>
                      <CityDistrictSelector
                        register={register}
                        errors={errors}
                        cityId="city"
                        districtId="district"
                        cityName="pickup.city"
                        districtName="pickup.district"
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
                        name="pickup.address"
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
                        <span className="text-danger"> * </span>
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
                        <span className="text-danger"> * </span>
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="圖片網址，https://images.unsplash.com/photo-15689013"
                        id="UpdatePhoto"
                        name="imagesUrl"
                        type="text"
                        rules={{
                          required: {
                            value: true,
                            message: '請輸入圖片網址',
                          },
                        }}
                      />
                    </div>
                    <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2">
                      <label
                        htmlFor="ReplyMessage"
                        className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 mt-lg-3"
                      >
                        介紹與描述
                        <span className="text-danger"> * </span>
                      </label>
                      <TextArea
                        register={register}
                        errors={errors}
                        labelText="介紹與描述"
                        id="ReplyMessage"
                        name="content"
                        rows="5"
                        rules={{
                          required: {
                            value: true,
                            message: '請輸入食物介紹',
                          },
                        }}
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
