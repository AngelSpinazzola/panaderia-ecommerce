import { Toaster } from "react-hot-toast";

export const ToastConfig = () => {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#fff',
          color: '#2c1810',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '0.95rem',
          fontFamily: 'var(--font-body)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
        success: {
          iconTheme: {
            primary: '#22c55e',
            secondary: '#fff',
          }
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
          style: {
            border: '1px solid #fca5a5',
          },
        },
        loading: {
          iconTheme: {
            primary: '#d4a574',
            secondary: '#fff',
          },
        },
      }}
    />
  );
};