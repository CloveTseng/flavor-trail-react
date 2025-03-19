import { get } from 'lodash';

const TextArea = ({ register, errors, labelText, id, rows, name, rules }) => {
  return (
    <>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={`請輸入${labelText}`}
        className={`form-control py-2 px-5 border-gray-400 rounded-3 bg-white w-100 ${
          get(errors, name) && 'is-invalid'
        }`}
        {...register(name, rules)}
      >
        {get(errors, name) && (
          <div className="invalid-feedback">{get(errors, name)?.message}</div>
        )}
      </textarea>
    </>
  );
};

export default TextArea;
