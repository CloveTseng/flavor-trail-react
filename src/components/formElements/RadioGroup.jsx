const RadioGroup = ({ register, errors, labelText, id, rules, options }) => {
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
              className={`form-check-input ${errors[id] && 'is-invalid'}`}
              type="radio"
              id={item.id}
              value={item.value}
              {...register(id, rules)}
            />
            <label className="form-check-label text-nowrap" htmlFor={item.id}>
              {item.label}
            </label>
            {errors[id] && (
              <div className="invalid-feedback">{errors?.[id]?.message}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
