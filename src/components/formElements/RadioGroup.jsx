import { get } from 'lodash';

const RadioGroup = ({
  register,
  errors,
  labelText,
  id,
  rules,
  options,
  name,
}) => {
  return (
    <div className="mb-7">
      <div className="share-food-modal d-lg-flex align-items-lg-center">
        <div className="me-lg-7 mb-2">
          <label
            htmlFor={id}
            className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4"
          >
            {labelText}
          </label>
        </div>
        {options.map((item) => (
          <div
            key={item.id}
            className="form-check ms-0 align-items-center ms-lg-7"
          >
            <input
              className={`form-check-input ${
                get(errors, name) && 'is-invalid'
              }`}
              type="radio"
              id={item.id}
              value={item.value}
              {...register(name, rules)}
            />
            <label className="form-check-label text-nowrap" htmlFor={item.id}>
              {item.label}
            </label>
            {get(errors, name) && (
              <div className="invalid-feedback">
                {get(errors, name)?.message}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
