import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
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
import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ShareFoodEditModal = ({
  tempPost,
  closeEditModal,
  editModalRef,
  getPosts,
}) => {
  const methods = useForm({
    defaultValues: tempPost,
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
  // ✅ 監聽 tempPost 變化，確保表單數據更新
  useEffect(() => {
    if (tempPost && Object.keys(tempPost).length > 0) {
      reset(tempPost); // ✅ 重新載入表單數據
    }
  }, [tempPost, reset]);
  const handleDateChange = (date) => {
    setValue('food.expiryDate', dayjs(date).format('YYYY-MM-DD'));
  };

  const onSubmit = async (data) => {
    const { food, imagesUrl, pickup, ...rest } = data;
    const { totalQuantity, ...submitData } = food;
    const formattedExpiryDate = dayjs(getValues('food.expiryDate')).format(
      'YYYY-MM-DD'
    );
    const uid = nanoid(6);
    const imagesUrlArray = imagesUrl ? [imagesUrl] : [];
    const id = tempPost.id;
    try {
      const res = await axios.patch(`${BASE_URL}/posts/${id}`, {
        ...rest,
        redeemCode: uid,
        food: {
          ...submitData,
          expiryDate: formattedExpiryDate,
          totalQuantity: Number(totalQuantity),
          restQuantity: Number(totalQuantity),
        },
        pickup: {
          city: pickup.city,
          district: pickup.district,
          time: pickup.time,
          address: pickup.address,
        },
        imagesUrl: imagesUrlArray,
      });
      console.log('測試 data', data);
      console.log(getValues());
      console.log('res:', res.data);

      alert('編輯成功');
      getPosts();
      closeEditModal(); // ✅ 關閉 Modal
    } catch (error) {
      console.error('❌ API 更新失敗:', error.message);
    }

    reset();
  };

  return (
    <>
      <FormProvider {...methods}>
        <div
          className='modal fade'
          id='shareFoodEditModal'
          tabIndex='-1'
          aria-labelledby='shareFoodEditModal'
          aria-hidden='true'
          ref={editModalRef}
        >
          <div className='modal-dialog modal-xl'>
            <div className='modal-content bg-white'>
              <div className='modal-header border-0 p-lg-7 py-7 px-4'>
                <h1
                  className='modal-title fw-bolder lh-xs'
                  id='shareFoodEditModalLabel'
                >
                  編輯美味
                </h1>
                <img
                  src='./assets/images/icon/x.svg'
                  alt=''
                  className='ms-auto pointer'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  onClick={closeEditModal}
                />
              </div>
              <div className='modal-body p-lg-7'>
                <p className='text-black mb-5'>
                  請回答以下所有問題，讓領取者清楚了解您分享的食物。
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id='shareFood'
                  noValidate
                >
                  <div className='row'>
                    <InputTextGroup
                      register={register}
                      errors={errors}
                      labelText='貼文標題'
                      id='title'
                      name='title'
                      type='text'
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
                      labelText='食物名稱'
                      id='InputFood'
                      name='food.name'
                      type='text'
                      rules={{
                        required: {
                          value: true,
                          message: '食物名稱為必填',
                        },
                      }}
                    />
                    <div className='col-lg-6'>
                      {/* 食物類型 */}
                      <div className='mb-7'>
                        <div className='share-food-modal d-lg-flex'>
                          <div className='me-lg-7 mb-2'>
                            <label
                              htmlFor='FoodType'
                              className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-5 py-4'
                            >
                              食物類型
                            </label>
                          </div>
                          <SelectBox
                            register={register}
                            errors={errors}
                            labelText='食物類型'
                            id='FoodType'
                            name='food.type'
                            apiEndpoint='/foodTypes'
                            optionLabelKey='type'
                            optionValueKey='value'
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
                    <div className='col-lg-6'>
                      {/* 保存方式 */}
                      <div className='mb-7'>
                        <div className='share-food-modal d-lg-flex'>
                          <div className='me-lg-7 mb-2'>
                            <label
                              htmlFor='SaveMethod'
                              className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4'
                            >
                              保存方式
                            </label>
                          </div>
                          <SelectBox
                            register={register}
                            errors={errors}
                            labelText='保存方式'
                            id='SaveMethod'
                            name='food.saveMethod'
                            apiEndpoint='/saveMethod'
                            optionLabelKey='type'
                            optionValueKey='value'
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
                    <div className='col-lg-6'>
                      {/* 食物份數 */}
                      <div className='mb-4'>
                        <div className='share-food-modal d-lg-flex'>
                          <div className='me-lg-7 mb-2'>
                            <label
                              htmlFor='FoodNum'
                              className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-12 py-4'
                            >
                              食物份數
                            </label>
                          </div>
                          <InputText
                            register={register}
                            errors={errors}
                            labelText='食物份數'
                            id='FoodNum'
                            name='food.totalQuantity'
                            type='number'
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
                    <div className='col-lg-6'>
                      <div className='mb-4'>
                        <div className='share-food-modal d-lg-flex'>
                          <div className='me-lg-7 mb-2'>
                            <label
                              htmlFor='exp'
                              className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-7 py-2'
                            >
                              有效期限
                            </label>
                          </div>
                          <DatePicker
                            id='exp'
                            selected={
                              getValues('food.expiryDate')
                                ? new Date(getValues('food.expiryDate'))
                                : null
                            }
                            onChange={handleDateChange}
                            name='food.expiryDate'
                            dateFormat='yyyy/MM/dd'
                            className='form-select border-gray-400 py-2 px-5 rounded-3 bg-white'
                            placeholderText='請選擇有效期限'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      {/* 是否已過期 */}
                      <RadioGroup
                        register={register}
                        errors={errors}
                        labelText='是否已過期'
                        id='overfood'
                        name='food.isPastBestBefore'
                        options={overfoodOptions}
                        rules={{
                          required: { value: true, message: '請至少選擇一項' },
                        }}
                      />
                    </div>
                    <div className='col-lg-6'>
                      {/* 葷食/素食 */}
                      <RadioGroup
                        register={register}
                        errors={errors}
                        labelText='葷食/素食'
                        id='MeatOrVeggie'
                        name='food.dietType'
                        options={meatOrVeggieOptions}
                        rules={{
                          required: { value: true, message: '請至少選擇一項' },
                        }}
                      />
                    </div>

                    {/* 領取地點 */}
                    <div className='share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2 align-items-lg-center'>
                      <label
                        htmlFor='pickUpCity'
                        className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7'
                      >
                        領取地點
                      </label>
                      <CityDistrictSelector
                        register={register}
                        errors={errors}
                        cityId='pickup.city'
                        districtId='pickup.district'
                        initialCityId={tempPost?.pickup?.city}
                        initialDistrict={tempPost?.pickup?.district}
                        setValue={setValue} // ✅ 傳遞 setValue 以更新表單
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
                        id='inputAddress'
                        name='pickup.address'
                        labelText='地址'
                        rules={{
                          required: { value: true, message: '請填入地址' },
                        }}
                      />
                    </div>

                    {/* 領取時間 */}
                    <div className='share-food-modal mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center'>
                      <label
                        htmlFor='TimePicker'
                        className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7'
                      >
                        領取時間
                      </label>
                      <TimePicker
                        initialStartTime={
                          tempPost?.pickup?.time?.split(' - ')[0]
                        }
                        initialEndTime={tempPost?.pickup?.time?.split(' - ')[1]}
                        setValue={setValue}
                        name='pickup.time'
                      />
                    </div>

                    {/* 上傳圖片 */}
                    <div className='share-food-modal mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center'>
                      <label
                        htmlFor='UpdatePhoto'
                        className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7'
                      >
                        上傳圖片
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText='圖片網址，https://images.unsplash.com/photo-15689013'
                        id='UpdatePhoto'
                        name='imagesUrl'
                        type='text'
                        rules={{
                          required: {
                            value: true,
                            message: '請輸入圖片網址',
                          },
                        }}
                      />
                    </div>
                    <div className='share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2'>
                      <label
                        htmlFor='ReplyMessage'
                        className='form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 mt-lg-3'
                      >
                        介紹與描述
                      </label>
                      <TextArea
                        register={register}
                        errors={errors}
                        labelText='介紹與描述'
                        id='ReplyMessage'
                        name='content'
                        rows='5'
                        rules={{
                          required: {
                            value: true,
                            message: '請輸入食物介紹',
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className='modal-footer px-0'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      data-bs-dismiss='modal'
                      disabled={!isValid}
                    >
                      更改貼文
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
ShareFoodEditModal.propTypes = {
  tempPost: PropTypes.object,
  closeEditModal: PropTypes.func,
  editModalRef: PropTypes.object,
  getPosts: PropTypes.func,
};
export default ShareFoodEditModal;
