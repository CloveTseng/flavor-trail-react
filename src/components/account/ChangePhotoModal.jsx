import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as bootstrap from 'bootstrap';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_ID = '2';

const ChangePhotoModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const photoDomainName = watch('photoDomainName');
  const modalRef = useRef(null);

  useEffect(() => {
    if (photoDomainName) {
      setIsFormChanged(true);
    } else {
      setIsFormChanged(false);
    }
  }, [photoDomainName]);

  const changeDomain = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.patch(`${BASE_URL}/users/${USER_ID}`, {
        avatarUrl: data.photoDomainName,
      });
      reset();
      console.log(res.data);
      const modal = bootstrap.Modal.getInstance(modalRef.current);
      modal.hide();
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="changePhotoModal"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="changePhotoLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-white">
            <div className="modal-header border-0">
              <h1
                className="modal-title fs-1 lh-xs fw-bolder"
                id="changePhotoLabel"
              >
                更新照片
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(changeDomain)}>
              <div className="modal-body">
                <div className="mb-7">
                  <label
                    className="form-label h6 fw-bold text-gray-700 pb-2"
                    htmlFor="photoDomainName"
                  >
                    圖片網址
                  </label>
                  <input
                    id="photoDomainName"
                    type="text"
                    className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account"
                    placeholder="https://images.unsplash.com/photo-1534083220"
                    {...register('photoDomainName')}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-white fw-bold h6"
                  data-bs-dismiss="modal"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="btn btn-dark fw-bold h6"
                  disabled={!isFormChanged || isLoading}
                >
                  {isLoading ? '上傳中…' : ' 上傳照片'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePhotoModal;
