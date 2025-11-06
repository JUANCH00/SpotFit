// src/views/screens/LoginScreen.js - Minimalista
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import { styles } from "../../styles/styles";
import { AuthController } from "../../controllers/AuthController";

export default function LoginScreen({ setUser, setCurrentScreen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    setLoading(true);
    try {
      const response = await AuthController.login(email, password);
      // La API devuelve { success, message, data: { token, expiresAt, user, ... } }
      if (response && response.success) {
        // Opcional: podrías guardar response.data.token en AsyncStorage aquí
        setUser(response.data.user);
        setCurrentScreen("home");
      } else {
        Alert.alert("Error", response?.message || "Credenciales inválidas");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/logo-gym-colombia.png")}
            style={{
              width: 150,
              height: 150,
              aspectRatio: 1,
            }}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>Tu compañero de entrenamiento</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Inicio de Sesión</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="tu@email.com"
              placeholderTextColor="#B0B0B0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="••••••••"
                placeholderTextColor="#B0B0B0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeIcon}>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            style={styles.primaryButton}
            disabled={loading}
          >
            <View style={styles.buttonGradient}>
              <Text style={styles.buttonText}>
                {loading ? "Cargando..." : "Entrar"}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            <View style={{ height: 1, flex: 1, backgroundColor: "#E8E8E8" }} />
            <Text
              style={{ marginHorizontal: 12, color: "#B0B0B0", fontSize: 13 }}
            >
              o
            </Text>
            <View style={{ height: 1, flex: 1, backgroundColor: "#E8E8E8" }} />
          </View>

          <TouchableOpacity
            style={[
              styles.primaryButton,
              {
                backgroundColor: "#FFFFFF",
                borderWidth: 1.5,
                borderColor: "#E8E8E8",
              },
            ]}
          >
            <View
              style={[styles.buttonGradient, { backgroundColor: "#FFFFFF" }]}
            >
              <Text style={[styles.buttonText, { color: "#1A1A1A" }]}>
                Acceder con Google
              </Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            ¿No tienes cuenta?{" "}
            <Text style={styles.registerLink}>Regístrate</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
