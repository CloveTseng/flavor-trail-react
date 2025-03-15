import { PacmanLoader } from 'react-spinners';

const FullScreenLoading = () => {
  const override = {
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bootom: '0',
    backgroundColor: 'rgba(224, 224, 224, 0.5)',
    zIndex: '999',
    backdropFilter: 'blur(15px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={override}>
      <PacmanLoader color={'#00503F'} size={75} />
    </div>
  );
};

export default FullScreenLoading;
