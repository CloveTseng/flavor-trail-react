import { get } from 'lodash';

const InputText = ({ register, errors, id, labelText, rules, name, type }) => {
  return (
    <div className="w-100">
      <input
        type={type}
        id={id}
        name={name}
        className={`form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account ${
          get(errors, name) && 'is-invalid'
        }`}
        placeholder={`請輸入${labelText}`}
        {...register(name, rules)}
      />
      {get(errors, name) && (
        <div className="invalid-feedback">{get(errors, name)?.message}</div>
      )}
    </div>
  );
};

export default InputText;
