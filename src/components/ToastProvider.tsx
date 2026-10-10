'use client';
import { Flip, ToastContainer } from 'react-toastify';

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-center"
      transition={Flip}
      hideProgressBar
      newestOnTop
    />
  );
}
