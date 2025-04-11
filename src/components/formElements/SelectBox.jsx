import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import { toast } from 'react-hot-toast';

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
  name,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}${apiEndpoint}`);
        setOptions(res.data);
      } catch (error) {
        toast.error(`無法載入${labelText}選項: ${error.message || '發生未知錯誤'}`, {
          id: `selectbox-${name}`, // 添加唯一 ID 避免重複 toast
        });
      }
    };
    getData();
  }, [apiEndpoint, labelText, name]);

  return (
    <>
      <div className="flex-grow-1 ms-lg-7">
        <select
          id={id}
          name={name}
          className={`form-select border-gray-400 py-2 px-5 rounded-3 bg-white ${
            get(errors, name) && 'is-invalid'
          }`}
          defaultValue=""
          {...register(name, rules)}
        >
          <option value="" disabled>
            請選擇{labelText}
          </option>
          {options.map((item) => (
            <option defaultValue={item[optionValueKey]} key={item.id}>
              {item[optionLabelKey]}
            </option>
          ))}
        </select>
        {get(errors, name) && (
          <div className="invalid-feedback">{get(errors, name)?.message}</div>
        )}
      </div>
    </>
  );
};

SelectBox.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rules: PropTypes.object,
  apiEndpoint: PropTypes.string.isRequired,
  optionLabelKey: PropTypes.string.isRequired,
  optionValueKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectBox;
