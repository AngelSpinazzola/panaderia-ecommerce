const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      const parts = result.split(",");

      if (parts.length < 2) {
        reject(new Error("Formato de Data URL inválido"));
        return;
      }

      const base64 = parts[1];
      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error("No se pudo leer el archivo"));
    };

    reader.readAsDataURL(file);
  });
};

// Sube la imagen a ImgBB y retorna la URL
export const uploadToImgbb = async (file) => {
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error("La imagen no puede superar los 5MB");
  }
  
  if (!file) {
    throw new Error("No se recibió ningún archivo de imagen");
  }

  const form = new FormData();
  form.append("key", IMGBB_API_KEY);

  const base64 = await fileToBase64(file);
  form.append("image", base64);

  const response = await fetch(ENDPOINT, {
    method: "POST",
    body: form,
  });

  let json;
  try {
    json = await response.json();
  } catch {
    throw new Error("La respuesta del servidor no es JSON válido");
  }

  if (!response.ok || (json && json.success === false)) {
    const message =
      (json && json.error && json.error.message) || "Error al subir la imagen";
    throw new Error(message);
  }

  if (json && json.data) {
    if (json.data.display_url) {
      return json.data.display_url;
    }

    if (json.data.url) {
      return json.data.url;
    }
  }

  throw new Error("No se recibió una URL válida desde imgbb");
};