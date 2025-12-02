import toast from "react-hot-toast";

export const showProductCreated = (productName) => {
  toast.success(`${productName} creado exitosamente`);
};

export const showProductError = () => {
  toast.error("Error al crear el producto");
};

export const showLoginSuccess = () => {
  toast.success("¡Bienvenido!");
};

export const showLoginError = () => {
  toast.error("Usuario o contraseña incorrectos");
};

export const showLogoutSuccess = () => {
  toast.success("Sesión cerrada");
};

export const showAddToCart = (productName) => {
  toast.success(`${productName} agregado al carrito`);
};

export const showValidationError = () => {
  toast.error("Por favor completá todos los campos");
};

// Toast genérico
export const showToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  loading: (message) => toast.loading(message),
  dismiss: (id) => toast.dismiss(id),
};