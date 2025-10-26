// src/controllers/AuthController.js
export class AuthController {
    static async login(email, password) {
        // Simulación de login (en producción, aquí harías una llamada a tu API)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    resolve({
                        success: true,
                        user: {
                            id: '1',
                            name: 'Usuario Demo',
                            email: email,
                            avatar: '👤',
                            height: 1.75,
                            weight: 75,
                            age: 28,
                        }
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Credenciales inválidas'
                    });
                }
            }, 500);
        });
    }

    static async register(name, email, password) {
        // Simulación de registro
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (name && email && password) {
                    resolve({
                        success: true,
                        user: {
                            id: Date.now().toString(),
                            name: name,
                            email: email,
                            avatar: '👤',
                            height: 0,
                            weight: 0,
                            age: 0,
                        }
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Todos los campos son requeridos'
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
                    message: 'Se ha enviado un correo de recuperación'
                });
            }, 500);
        });
    }
}