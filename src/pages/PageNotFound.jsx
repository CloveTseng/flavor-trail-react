import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function PageNotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <div
      className='container text-center d-flex flex-column justify-content-center align-items-center'
      style={{ height: '80vh', gap: '2rem' }}
    >
      <h1>404 இ௰இ 找不到此頁面</h1>
      <p className='fs-4'>
        您即將在 <span className='text-primary fw-bold'>{countdown}</span> 秒後回到首頁
      </p>
    </div>
  );
}

export default PageNotFound;
