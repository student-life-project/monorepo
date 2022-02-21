import 'react-toastify/dist/ReactToastify.css';

import { FC } from 'react';
import { ToastContainer, ToastPosition } from 'react-toastify';

type TAlert = {
  rtl?: boolean;
  autoClose?: number;
  draggable?: boolean;
  newestOnTop?: boolean;
  pauseOnHover?: boolean;
  closeOnClick?: boolean;
  position?: ToastPosition;
  hideProgressBar?: boolean;
  pauseOnFocusLoss?: boolean;
};

const Alert: FC<TAlert> = ({
  rtl = false,
  autoClose = 5000,
  draggable = true,
  newestOnTop = false,
  pauseOnHover = true,
  closeOnClick = true,
  position = 'top-right',
  hideProgressBar = false,
  pauseOnFocusLoss = true,
}) => (
  <ToastContainer
    rtl={rtl}
    autoClose={autoClose}
    draggable={draggable}
    newestOnTop={newestOnTop}
    pauseOnHover={pauseOnHover}
    closeOnClick={closeOnClick}
    position={position}
    hideProgressBar={hideProgressBar}
    pauseOnFocusLoss={pauseOnFocusLoss}
  />
);

export default Alert;
