import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function CityDistrictSelector({
  register,
  errors = {},
  cityId,
  districtId,
  rules = {},
  initialCityId = '',
  initialDistrict = '',
  cityName = '',
  districtName = '',
}) {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setValue, clearErrors } = useFormContext();
  const prevCityId = useRef(null);

  useEffect(() => {
    const getTwCities = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/twCities`);
        setCities(res.data);
      } catch (error) {
        console.error('獲取縣市失敗:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTwCities();
  }, []);
  const fetchDistricts = useCallback(
    async (cityId) => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${BASE_URL}/twCities/${encodeURIComponent(cityId)}`
        );

        if (res.data && Array.isArray(res.data.districts)) {
          setDistricts(res.data.districts);

          if (initialDistrict) {
            const foundDistrict = res.data.districts.find(
              (d) => d.name === initialDistrict
            );
            if (foundDistrict) {
              setSelectedDistrict(foundDistrict.name);
              setValue(districtId, foundDistrict.name);
              clearErrors(districtId);
            }
          } else {
            setSelectedDistrict('');
            setValue(districtId, '');
          }
        } else {
          setDistricts([]);
        }
      } catch (error) {
        console.error('獲取地區失敗:', error.message);
        setDistricts([]);
      } finally {
        setIsLoading(false);
      }
    },
    [clearErrors, districtId, initialDistrict, setValue]
  );
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
  }, [initialCityId, cities, fetchDistricts]);

  const handleCityChange = (e) => {
    const selectedId = e.target.value;
    const targetCity = cities.find((c) => c.id == selectedId);

    if (prevCityId.current === selectedId) {
      setSelectedDistrict('');
      setValue(districtId, '');
    }

    setSelectedCityId(selectedId);
    setValue(cityId, targetCity.name, { shouldValidate: true });

    setDistricts([]);
    fetchDistricts(selectedId);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);
    setValue(districtId, selectedDistrict, { shouldValidate: true });
  };

  return (
    <>
      <div className="d-flex gap-2 col-lg-4">
        {/* 縣市選單 */}
        <select
          id={cityId}
          name={cityName}
          className={`form-select py-2 px-5 border-gray-400 rounded-3 d-inline-block w-100 bg-white ${
            errors?.[cityId] && 'is-invalid'
          }`}
          {...register(cityId, rules)}
          onChange={handleCityChange}
          disabled={isLoading}
          value={selectedCityId}
        >
          <option value="" disabled>
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
          name={districtName}
          className={`form-select py-2 px-5 border-gray-400 rounded-3 w-100 bg-white ${
            errors?.[districtId] && 'is-invalid'
          }`}
          {...register(districtId, rules)}
          onChange={handleDistrictChange}
          disabled={!selectedCityId || isLoading || districts.length === 0}
          value={selectedDistrict}
        >
          <option className="text-gray-700" value="">
            請選擇地區
          </option>
          {districts.map((district) => (
            <option
              key={`${district.zip}-${district.name}`}
              value={district.name}
            >
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
export default CityDistrictSelector;
