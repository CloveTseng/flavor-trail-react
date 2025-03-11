import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';

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
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setValue } = useFormContext();
  const [defaultDistrictSet, setDefaultDistrictSet] = useState(false);

  useEffect(() => {
    const getTwCities = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/twCities`);
        setCities(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTwCities();
  }, []);

  useEffect(() => {
    if (initialCityId && initialDistrict !== selectedCityId) {
      setSelectedCityId(initialCityId);
    }
  }, [initialCityId]);

  useEffect(() => {
    const getDistricts = async () => {
      if (selectedCityId) {
        setIsLoading(true);
        try {
          const res = await axios.get(`${BASE_URL}/twCities/${selectedCityId}`);
          setDistricts(res.data.districts);
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        setDistricts([]);
      }
    };
    getDistricts();
  }, [selectedCityId]);

  useEffect(() => {
    if (districts.length > 0 && initialDistrict && !defaultDistrictSet) {
      const foundDistrict = districts.find(
        (district) => district.name === initialDistrict
      );
      if (foundDistrict) {
        setValue(districtId, foundDistrict.name, { shouldValidate: true });
      }
      setDefaultDistrictSet(true);
    }
  }, [districts]);

  const handleCityChange = (e) => {
    const selectedId = e.target.value;
    setSelectedCityId(selectedId);
    setValue(cityId, selectedId, { shouldValidate: true });
  };

  return (
    <>
      <div className="d-flex gap-2 col-lg-4">
        <select
          id={cityId}
          name={cityId}
          className={`form-select py-2 px-5 border-gray-400 rounded-3 d-inline-blok w-100 bg-white ${
            errors?.[cityId] && 'is-invalid'
          }`}
          {...register(cityId, rules)}
          onChange={handleCityChange}
          disabled={isLoading}
          defaultValue={initialCityId}
        >
          <option value="" disabled selected>
            請選擇縣市
          </option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>

        <select
          id={districtId}
          name={districtId}
          className={`form-select py-2 px-5 border-gray-400 rounded-3 w-100 bg-white ${
            errors?.[districtId] && 'is-invalid'
          }`}
          {...register(districtId, rules)}
          disabled={!selectedCityId || isLoading}
        >
          <option className="text-gray-700" value="" disabled selected>
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

export default CityDistrictSelector;
