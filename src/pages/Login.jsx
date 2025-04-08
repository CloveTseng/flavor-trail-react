import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { setIsLogin } from '../redux/LoginStateSlice';
import AlertModal from '../components/AlertModal';
const { VITE_LOGIN_URL } = import.meta.env;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  //eye
  const [passwordHidden, setPasswordHidden] = useState(true);

  const signin = async (formData) => {
    try {
      const { email, password } = formData;
      const res = await axios.post(`${VITE_LOGIN_URL}/admin/signin`, {
        username: email,
        password,
      });
      reset();
      dispatch(
        setIsLogin({
          uid: res.data.uid,
          isLogin: true,
        })
      );
      AlertModal.successMessage({
        text: '尊敬的尋者唷！歡迎回來！',
      });
      navigate('/');
    } catch (error) {
      alert(`${error.response.data.error?.message}`);
    }
  };

  return (
    <section className="login container mt-7 mb-18">
      <Link to="/" className="mb-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0007 31.6666L8.33398 19.9999M8.33398 19.9999L20.0007 8.33325M8.33398 19.9999H31.6673"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="login-content row align-items-center justify-content-between">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="position-relative h-100 w-100">
            <Link
              to="/"
              className="footer-logo position-absolute top-0 start-0 z-2"
            >
              <img
                src="./assets/images/Logo.png"
                alt="logo"
                style={{
                  width: '174px',
                  height: '174px',
                }}
              />
            </Link>
            <img
              className="login-img object-fit-cover"
              src="./assets/images/home-2.jpg"
              alt="img"
            />
            <div className="login-deco-1 position-absolute d-none d-lg-block">
              <img
                src="./assets/images/deco/login-deco-1.svg"
                alt="login-deco"
              />
            </div>
            <div className="login-deco-2 position-absolute d-none d-lg-block">
              <img
                src="./assets/images/deco/login-deco-2.svg"
                alt="login-deco"
              />
            </div>
            <div
              className="login-deco-3 position-absolute d-none d-lg-block"
              style={{
                width: '371px',
                height: '295px',
              }}
            >
              <div
                className="slogan fs-2 fw-bolder lh-1 position-absolute z-2"
                style={{
                  width: '256px',
                  height: '136px',
                }}
              >
                <p>快樂齊分享，美味</p>
                <p className="vertical-text text-lg-vertical ms-auto">再出發</p>
              </div>
              <img
                src="./assets/images/deco/login-deco-3.svg"
                alt="login-deco"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <h2 className="fs-1 fw-bolder mb-14">歡迎回來！</h2>
          <form className="row g-3" onSubmit={handleSubmit(signin)}>
            <div className="col-12">
              <div className="mb-12">
                <label htmlFor="validationUsername" className="form-label mb-4">
                  用戶名<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control p-5 border border-gray-400 bg-white rounded-3 ${
                    errors?.email ? 'is-invalid' : ''
                  }`}
                  id="validationUsername"
                  placeholder="請輸入電子信箱"
                  {...register('email', {
                    required: '請輸入正確的電子信箱',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: '電子信箱欄位格式錯誤',
                    },
                  })}
                />
                {errors?.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
              <div className="col-12">
                <div className="mb-4 position-relative">
                  <label
                    htmlFor="validationPassword"
                    className="form-label mb-4"
                  >
                    密碼<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type={passwordHidden ? 'password' : 'text'}
                    name="password"
                    className={`form-control p-5 border border-gray-400 bg-white rounded-3 ${
                      errors?.password ? 'is-invalid' : ''
                    }`}
                    id="validationPassword"
                    placeholder="請輸入密碼"
                    {...register('password', {
                      required: '請輸入正確的密碼',
                    })}
                  />
                  {!errors?.password && (
                    <button
                      type="button"
                      id="checkEye"
                      className="btn btn-sm p-0 border-0"
                      onClick={() => {
                        setPasswordHidden((pre) => !pre);
                      }}
                    >
                      <i
                        className={`bi ${
                          passwordHidden ? 'bi-eye' : 'bi-eye-slash'
                        }`}
                      ></i>
                    </button>
                  )}
                  {errors?.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center mb-12">
                  <div className="form-check d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      name="check"
                      id="invalidCheck"
                      {...register('check')}
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      記住帳號
                    </label>
                  </div>
                  <a href="#">忘記密碼？</a>
                </div>
                <div className="col-12">
                  <button
                    href="#"
                    type="submit"
                    className="btn btn-dark w-100 mb-12 rounded-3 d-flex align-items-center justify-content-center"
                  >
                    立即登入
                  </button>
                </div>
                <div className="col-12">
                  沒有 Flavor Trail 帳號嗎？
                  <a
                    href="#"
                    className="link-primary ms-2 text-decoration-underline"
                  >
                    立即註冊
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
