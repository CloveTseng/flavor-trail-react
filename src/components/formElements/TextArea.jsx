const TextArea = ({ register, errors, labelText, id, rows, name }) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={`請輸入${labelText}`}
      className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white"
    ></textarea>
  );
};

export default TextArea;
