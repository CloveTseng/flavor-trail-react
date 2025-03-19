import InputText from './InputText';

const InputTextGroup = ({
  register,
  errors,
  labelText,
  id,
  type,
  rules,
  name,
}) => {
  return (
    <>
      <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2">
        <label
          htmlFor={id}
          className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 py-4"
        >
          {labelText}
          <span className="text-danger"> * </span>
        </label>
        <InputText
          register={register}
          errors={errors}
          id={id}
          name={name}
          labelText={labelText}
          rules={rules}
          type={type}
        />
      </div>
    </>
  );
};

export default InputTextGroup;
