import PropTypes from 'prop-types';
import { get } from 'lodash';

const SelectCity = ({
  register,
  errors,
  labelText,
  id,
  rules,
  options = [],
  optionLabelKey,
  optionValueKey,
  name,
  onChange,
}) => {
  return (
    <div className="flex-grow-1 w-100">
      <select
        id={id}
        name={name}
        className={`form-select border-gray-400 py-2 px-5 rounded-3 bg-white lh-base ${
          get(errors, name) && 'is-invalid'
        }`}
        {...register(name, rules)}
        onChange={(e) => {
          register(name).onChange(e);
          if (onChange) onChange(e);
        }}
      >
        <option value="" disabled selected>
          請選擇{labelText}
        </option>
        {options.map((item) => (
          <option value={item[optionValueKey]} key={item[optionValueKey]}>
            {item[optionLabelKey]}
          </option>
        ))}
      </select>
      {get(errors, name) && (
        <div className="invalid-feedback">{get(errors, name)?.message}</div>
      )}
    </div>
  );
};
SelectCity.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rules: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      [PropTypes.string]: PropTypes.any, // 或可針對你的資料結構細化
    })
  ),
  optionLabelKey: PropTypes.string.isRequired,
  optionValueKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default SelectCity;
