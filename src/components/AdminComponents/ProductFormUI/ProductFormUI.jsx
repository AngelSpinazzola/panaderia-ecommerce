import { useState } from "react";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFileSelect(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleFileSelect = (file) => {
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSize) {
      alert('La imagen es demasiado grande. Tamaño máximo: 5MB');
      return;
    }

    onFileChange(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    onFileChange(null);
    setPreview(null);
  };

  return (
    <section className="admin-section">
      <div className="admin-container">
        <div className="admin-header">
          <h2 className="admin-title">Alta de producto</h2>
          <p className="admin-subtitle">Completá los datos para agregar un nuevo producto</p>
        </div>

        <form className="product-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre del producto</label>
            <input
              id="name"
              type="text"
              name="name"
              value={product.name}
              onChange={onChange}
              placeholder="Ej: Pan integral"
              className={errors.name ? "input-error" : ""}
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="price">Precio</label>
            <input
              id="price"
              type="number"
              name="price"
              value={product.price}
              onChange={onChange}
              placeholder="1500"
              className={errors.price ? "input-error" : ""}
              required
            />
            {errors.price && <p className="error-message">{errors.price}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={onChange}
              className={errors.category ? "input-error" : ""}
              required
            >
              <option value="">Seleccioná una categoría</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </select>
            {errors.category && (
              <p className="error-message">{errors.category}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={onChange}
              placeholder="Describe el producto..."
              rows="4"
              className={errors.description ? "input-error" : ""}
              required
            ></textarea>
            {errors.description && (
              <p className="error-message">{errors.description}</p>
            )}
          </div>

          <div className="form-group">
            <label>Imagen del producto</label>

            {!preview ? (
              <div
                className={`file-dropzone ${isDragging ? 'dragging' : ''} ${errors.file ? 'error' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('image').click()}
              >
                <div className="dropzone-content">
                  <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="dropzone-text">
                    {isDragging ? 'Soltá la imagen aquí' : 'Arrastrá una imagen o hacé clic'}
                  </p>
                  <span className="dropzone-hint">JPG, PNG, WebP (máx. 5MB)</span>
                </div>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  className="file-input-hidden"
                />
              </div>
            ) : (
              <div className="file-preview">
                <img src={preview} alt="Preview" className="preview-image" />
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="remove-file-btn"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Quitar imagen
                </button>
              </div>
            )}

            {errors.file && <p className="error-message">{errors.file}</p>}
          </div>

          {errors.general && (
            <div className="error-general">
              <p>{errors.general}</p>
            </div>
          )}

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Creando producto..." : "Crear producto"}
          </button>
        </form>
      </div>
    </section>
  );
};