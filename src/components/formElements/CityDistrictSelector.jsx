import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function CityDistrictSelector({
  register,
  errors,
  cityId,
  districtId,
  rules,
  initialCityId,
  initialDistrict,
}) {
  const [cities, setCities] = useState([]); // 存放縣市列表
  const [districts, setDistricts] = useState([]); // 存放對應縣市的地區列表
  const [selectedCityId, setSelectedCityId] = useState(''); // 目前選擇的縣市 ID
  const [selectedDistrict, setSelectedDistrict] = useState(''); // 目前選擇的地區
  const [isLoading, setIsLoading] = useState(false); // 控制載入狀態
  const { setValue, clearErrors } = useFormContext(); // React Hook Form 內建方法

  /** ✅ 取得縣市列表 */
  useEffect(() => {
    const getTwCities = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/twCities`);
        setCities(res.data);
      } catch (error) {
        console.error('❌ 獲取縣市失敗:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTwCities();
  }, []);
  /** ✅ 當 `initialCityId` 變更時，找到對應的 `id` 並獲取地區列表 */
  useEffect(() => {
    if (initialCityId) {
      const targetCity = cities.find((c) => c.name === initialCityId);

      if (targetCity) {
        fetchDistricts(targetCity.id);
        setSelectedCityId(targetCity.id);
      } else {
        setDistricts([]);
      }
    }
  },[initialCityId, cities]);

  /** ✅ 取得對應縣市的地區列表 */
  const fetchDistricts = async (cityId) => {
    setIsLoading(true);

    try {
      const res = await axios.get(
        `${BASE_URL}/twCities/${encodeURIComponent(cityId)}`
      );

      if (res.data && Array.isArray(res.data.districts)) {
        setDistricts(res.data.districts);

        // ✅ 設定預設地區，但不觸發驗證
        if (initialDistrict) {
          const foundDistrict = res.data.districts.find(
            (d) => d.name === initialDistrict
          );
          console.log('foundDistrict:', foundDistrict);

          if (foundDistrict) {
            setSelectedDistrict(foundDistrict.name);
            setValue(districtId, foundDistrict.name);
            clearErrors(districtId); // ✅ 清除驗證錯誤，確保不會出現紅色警示
          }
        } else {
          setSelectedDistrict(''); // ✅ 設定為空值，選單顯示「請選擇地區」
          setValue(districtId, ''); // ✅ 清空 React Hook Form 的 district 值
        }
      } else {
        setDistricts([]);
      }
    } catch (error) {
      console.error(`❌ 獲取地區失敗:`, error.message);
      setDistricts([]);
    } finally {
      setIsLoading(false);
    }
  };

  /** ✅ 當用戶選擇縣市時，更新 `districts` */
  const handleCityChange = (e) => {
    const selectedId = +e.target.value;
    const targetCity = cities.find((c) => c.id === selectedId);
    initialDistrict = '';
    setSelectedDistrict(''); // ✅ **確保選單回到「請選擇地區」**
    setValue(districtId, ''); // ✅ 清空 `district`，避免帶入上一次的值
    setSelectedCityId(selectedId);
    setValue(cityId, targetCity.name, { shouldValidate: true });

    setDistricts([]); // ✅ 清空地區選項，等待 API 更新
    fetchDistricts(selectedId);
  };

  /** ✅ 當用戶選擇地區時，更新 `selectedDistrict` */
  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);
    setValue(districtId, selectedDistrict, { shouldValidate: true });
  };

  return (
    <>
      <div className='d-flex gap-2 col-lg-4'>
        {/* 縣市選單 */}
        <select
          id={cityId}
          name={cityId}
          className={`form-select py-2 px-5 border-gray-400 rounded-3 d-inline-block w-100 bg-white ${
            errors?.[cityId] && 'is-invalid'
          }`}
          {...register(cityId, rules)}
          onChange={handleCityChange}
          disabled={isLoading}
          value={selectedCityId}
        >
          <option value='' disabled>
            請選擇縣市
          </option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>

        {/* 地區選單 */}
        <select
          id={districtId}
          name={districtId}
          className={`form-select py-2 px-5 border-gray-400 rounded-3 w-100 bg-white ${
            errors?.[districtId] && 'is-invalid'
          }`}
          {...register(districtId, rules)}
          onChange={handleDistrictChange}
          disabled={!selectedCityId || isLoading || districts.length === 0}
          value={selectedDistrict}
        >
          <option className='text-gray-700' value=''>
            請選擇地區
          </option>
          {districts.map((district) => (
            <option key={district.zip} value={district.name}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
CityDistrictSelector.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  cityId: PropTypes.string.isRequired,
  districtId: PropTypes.string.isRequired,
  rules: PropTypes.object,
  initialCityId: PropTypes.string,
  initialDistrict: PropTypes.string,
  cityName: PropTypes.string,
  districtName: PropTypes.string,
};

CityDistrictSelector.defaultProps = {
  errors: {},
};
export default CityDistrictSelector;
