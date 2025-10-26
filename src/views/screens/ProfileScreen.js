// src/views/screens/ProfileScreen.js
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/styles';
import { AuthController } from '../../controllers/AuthController';
import BottomNav from '../components/BottomNav';

export default function ProfileScreen({
    currentScreen,
    setCurrentScreen,
    user,
    setUser,
}) {
    const handleLogout = () => {
        Alert.alert(
            'Cerrar Sesión',
            '¿Estás seguro que deseas cerrar sesión?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Cerrar Sesión',
                    onPress: () => {
                        AuthController.logout();
                        setUser(null);
                        setCurrentScreen('login');
                    },
                    style: 'destructive',
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <LinearGradient
                    colors={['#9333ea', '#ec4899']}
                    style={styles.header}
                >
                    <View style={styles.profileHeader}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>{user?.avatar || '👤'}</Text>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>
                                {user?.name || 'Usuario'}
                            </Text>
                            <Text style={styles.profileEmail}>
                                {user?.email || 'email@ejemplo.com'}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.infoCard}>
                        <Text style={styles.cardTitle}>Mi información</Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Altura</Text>
                            <Text style={styles.infoValue}>
                                {user?.height ? `${user.height} m` : '1.75 m'}
                            </Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Peso</Text>
                            <Text style={styles.infoValue}>
                                {user?.weight ? `${user.weight} kg` : '75 kg'}
                            </Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Edad</Text>
                            <Text style={styles.infoValue}>
                                {user?.age ? `${user.age} años` : '28 años'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.settingsCard}>
                        <Text style={styles.cardTitle}>Objetivos</Text>
                        <TouchableOpacity style={styles.settingsRow}>
                            <Text style={styles.settingsLabel}>Ganar masa muscular</Text>
                            <Text style={styles.chevron}>›</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsRow}>
                            <Text style={styles.settingsLabel}>Nivel de experiencia</Text>
                            <Text style={styles.chevron}>›</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsRow}>
                            <Text style={styles.settingsLabel}>Días de entrenamiento</Text>
                            <Text style={styles.chevron}>›</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.settingsCard}>
                        <Text style={styles.cardTitle}>Configuración</Text>
                        <TouchableOpacity style={styles.settingsRow}>
                            <Text style={styles.settingsLabel}>Notificaciones</Text>
                            <Text style={styles.chevron}>›</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsRow}>
                            <Text style={styles.settingsLabel}>Privacidad</Text>
                            <Text style={styles.chevron}>›</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsRow}>
                            <Text style={styles.settingsLabel}>Tema</Text>
                            <Text style={styles.chevron}>›</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.logoutButton}
                    >
                        <Text style={styles.logoutText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <BottomNav
                currentScreen={currentScreen}
                setCurrentScreen={setCurrentScreen}
            />
        </SafeAreaView>
    );
}