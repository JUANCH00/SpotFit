// src/controllers/AuthController.js
export class AuthController {
  static async login(username, password) {
    // Llamada real al endpoint de autenticación
    try {
      const res = await fetch(
        "https://gymproject-uraq.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const json = await res.json();

      // Si el servidor responde con un status de error, normalizeamos el error
      if (!res.ok) {
        // Algunos endpoints devuelven { success: false, message } incluso con 200,
        // pero aquí cubrimos el caso de errores HTTP
        throw new Error(json.message || "Error en el login");
      }

      // Devolver el JSON tal cual; LoginScreen consumirá response.success y response.data
      return json;
    } catch (error) {
      // Lanzar el error para que el caller (LoginScreen) lo maneje
      throw error;
    }
  }

  static async register(name, email, password) {
    // Simulación de registro (puedes reemplazar por una llamada real si lo deseas)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          resolve({
            success: true,
            user: {
              id: Date.now().toString(),
              name: name,
              email: email,
              avatar: "👤",
              height: 0,
              weight: 0,
              age: 0,
            },
          });
        } else {
          reject({
            success: false,
            message: "Todos los campos son requeridos",
          });
        }
      }, 500);
    });
  }

  static logout() {
    // Aquí podrías limpiar tokens, caché, etc.
    return { success: true };
  }

  static async resetPassword(email) {
    // Simulación de recuperación de contraseña
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Se ha enviado un correo de recuperación",
        });
      }, 500);
    });
  }
}
