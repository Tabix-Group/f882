import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/Toast';

type ToastItem = { id: string; message: string; type?: 'info' | 'success' | 'error' };

const ToastContext = createContext<{ show: (message: string, type?: ToastItem['type']) => void } | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = (message: string, type: ToastItem['type'] = 'info') => {
    const id = String(Date.now()) + Math.random().toString(16).slice(2);
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <Toast key={t.id} id={t.id} message={t.message} type={t.type} onClose={() => setToasts((arr) => arr.filter((x) => x.id !== t.id))} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
};

export default useToast;
