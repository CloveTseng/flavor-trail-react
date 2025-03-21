import Swal from 'sweetalert2';

const AlertModal = {
  confirmAction: (options) => {
    const {
      title = '確認',
      text = '您確定要執行此操作嗎？',
      icon = 'question',
      confirmButtonText = '確定',
      cancelButtonText = '取消',
      onConfirm = () => {},
      onCancel = () => {},
      customClass = {},
    } = options || {};

    let iconColor = '';
    switch (icon) {
      case 'success':
      default:
        iconColor = '#00503F';
        break;
      case 'warning':
        iconColor = '#FF814A';
        break;
      case 'error':
        iconColor = '#FF3A55';
        break;
      case 'question':
        iconColor = '#99B9B2';
        break;
      case 'info':
        iconColor = '#576E22';
        break;
    }

    Swal.fire({
      title,
      text,
      icon,
      iconColor,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: window.innerWidth >= 466,
      customClass: {
        popup: 'rounded-3',
        confirmButton: 'btn btn-secondary swal-btn',
        cancelButton: 'btn btn-thirdy swal-btn',
        actions: 'swal-mobile-actions',
        ...customClass,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        onCancel();
        console.log('cancel');
      }
    });
  },

  successMessage: (options) => {
    const {
      title = '成功',
      text = '操作已成功完成',
      timer = 1500,
    } = options || {};

    return Swal.fire({
      title,
      text,
      icon: 'success',
      timer,
      showConfirmButton: false,
    });
  },

  errorMessage: (options) => {
    const { title = '錯誤', text = '操作失敗' } = options || {};

    return Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: '確定',
    });
  },

  customMessage: (options) => {
    const { title = '錯誤', text = '操作失敗', icon = 'info' } = options || {};

    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: '確定',
    });
  },
};

export default AlertModal;
