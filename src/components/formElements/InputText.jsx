const InputText = ({ register, errors, id, labelText, rules, name }) => {
  return (
    <div className="w-100">
      <input
        type="text"
        id={id}
        name={name}
        className={`form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account ${
          errors?.[id] && 'is-invalid'
        }`}
        placeholder={`請輸入${labelText}`}
        {...register(id, rules)}
      />
      {errors[id] && (
        <div className="invalid-feedback">{errors?.[id]?.message}</div>
      )}
    </div>
  );
};

export default InputText;
