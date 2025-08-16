import React from 'react';

type ToastProps = {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'error';
  onClose?: () => void;
};

const bgFor = {
  info: 'bg-gray-800',
  success: 'bg-green-600',
  error: 'bg-red-600',
};

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose }) => {
  return (
    <div className={`px-4 py-3 rounded-lg text-white shadow-lg ${bgFor[type]}`} role="status">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm">{message}</div>
        {onClose && (
          <button onClick={onClose} aria-label="Cerrar" className="text-white/80 hover:text-white">
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
