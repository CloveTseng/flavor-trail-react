import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const SelectBox = ({
  register,
  errors,
  labelText,
  id,
  rules,
  apiEndpoint,
  optionLabelKey,
  optionValueKey,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}${apiEndpoint}`);
        setOptions(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [apiEndpoint]);

  return (
    <>
      <div className="flex-grow-1 ms-lg-7">
        <select
          id={id}
          name={id}
          className={`form-select border-gray-400 py-2 px-5 rounded-3 bg-white ${
            errors?.[id] && 'is-invalid'
          }`}
          {...register(id, rules)}
        >
          <option value="" disabled selected>
            請選擇{labelText}
          </option>
          {options.map((item) => (
            <option value={item[optionValueKey]} key={item.id}>
              {item[optionLabelKey]}
            </option>
          ))}
        </select>
        {errors[id] && (
          <div className="invalid-feedback">{errors?.[id]?.message}</div>
        )}
      </div>
    </>
  );
};
export default SelectBox;
