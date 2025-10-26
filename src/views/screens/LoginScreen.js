// src/views/screens/LoginScreen.js
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/styles';
import { AuthController } from '../../controllers/AuthController';

export default function LoginScreen({ setUser, setCurrentScreen }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }

        setLoading(true);
        try {
            const response = await AuthController.login(email, password);
            if (response.success) {
                setUser(response.user);
                setCurrentScreen('home');
            }
        } catch (error) {
            Alert.alert('Error', error.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#1f2937', '#111827', '#000000']}
                style={styles.gradientContainer}
            >
                <View style={styles.loginContainer}>
                    <View style={styles.logoContainer}>
                        <LinearGradient
                            colors={['#34d399', '#14b8a6']}
                            style={styles.logoGradient}
                        >
                            <Text style={styles.logoEmoji}>💪</Text>
                        </LinearGradient>
                        <Text style={styles.logoText}>
                            Spot<Text style={styles.logoAccent}>fit</Text>
                        </Text>
                        <Text style={styles.subtitle}>Tu compañero de entrenamiento</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Inicio de Sesión</Text>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Correo electrónico</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="tu@email.com"
                                placeholderTextColor="#9ca3af"
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
                                    placeholderTextColor="#9ca3af"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.eyeButton}
                                >
                                    <Text style={styles.eyeIcon}>
                                        {showPassword ? '👁️' : '🙈'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={handleLogin}
                            style={styles.primaryButton}
                            disabled={loading}
                        >
                            <LinearGradient
                                colors={['#10b981', '#14b8a6']}
                                style={styles.buttonGradient}
                            >
                                <Text style={styles.buttonText}>
                                    {loading ? 'Cargando...' : 'Continuar'}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forgotButton}>
                            <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>

                        <Text style={styles.registerText}>
                            ¿No tienes cuenta?{' '}
                            <Text style={styles.registerLink}>Regístrate</Text>
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}