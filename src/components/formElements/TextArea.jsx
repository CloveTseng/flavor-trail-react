const TextArea = ({ register, errors, labelText, id, rows }) => {
  return (
    <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2">
      <label
        htmlFor={id}
        className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 mt-lg-3"
      >
        {labelText}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={`請輸入${labelText}`}
        className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white"
      ></textarea>
    </div>
  );
};

export default TextArea;
