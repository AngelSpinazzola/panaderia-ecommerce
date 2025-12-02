export const validateProduct = (product, fileRequired = true) => {
  const errors = {};

  if (!product.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!product.price || product.price <= 0) {
    errors.price = "El precio debe ser mayor a cero";
  }

  if (!product.description.trim()) {
    errors.description = "La descripción es obligatoria";
  }

  if (!product.category.trim()) {
    errors.category = "La categoría es obligatoria";
  }

  if (fileRequired && !product.file) {
    errors.file = "Debes seleccionar una imagen";
  }

  if (product.file) {
    const maxSize = 5 * 1024 * 1024;
    if (product.file.size > maxSize) {
      errors.file = "La imagen no puede superar los 5MB";
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(product.file.type)) {
      errors.file = "Solo se permiten imágenes JPG, PNG o WebP";
    }
  }

  return errors;
};