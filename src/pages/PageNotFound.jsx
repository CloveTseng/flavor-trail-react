import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function PageNotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <h1
      className='container text-center d-flex justify-content-center align-items-center'
      style={{ height: '80vh' }}
    >
      Page not found 404 இ௰இ
    </h1>
  );
}

export default PageNotFound;
