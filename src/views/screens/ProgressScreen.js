// src/views/screens/ProgressScreen.js - Mejorado según mockup
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { styles } from '../../styles/styles';
import BottomNav from '../components/BottomNav';

export default function ProgressScreen({ currentScreen, setCurrentScreen }) {
    const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

    // Datos simulados para el gráfico
    const chartData = [65, 80, 75, 90, 85, 70, 95];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Progreso</Text>

                    <View style={styles.statsGrid}>
                        <View style={styles.statCard}>
                            <Text style={styles.statValue}>23</Text>
                            <Text style={styles.statLabel}>Entrenamientos</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statValue}>1350</Text>
                            <Text style={styles.statLabel}>Calorías</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statValue}>95%</Text>
                            <Text style={styles.statLabel}>Progreso</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.chartCard}>
                        <Text style={styles.chartTitle}>Estadísticas semanales</Text>
                        <View style={styles.chartContainer}>
                            {weekDays.map((day, idx) => (
                                <View key={day} style={styles.chartDay}>
                                    <View
                                        style={[styles.chartBar, { height: chartData[idx] }]}
                                    />
                                    <Text style={styles.chartDayLabel}>{day}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.calendarCard}>
                        <Text style={styles.chartTitle}>Calendario de entrenamientos</Text>
                        <View style={styles.calendarGrid}>
                            {weekDays.map(day => (
                                <Text key={day} style={styles.calendarHeader}>
                                    {day}
                                </Text>
                            ))}
                        </View>
                        <View style={styles.calendarGrid}>
                            {[...Array(31)].map((_, idx) => {
                                // Simulación de días con entrenamiento
                                const hasWorkout = Math.random() > 0.6;
                                return (
                                    <View
                                        key={idx}
                                        style={[
                                            styles.calendarDay,
                                            hasWorkout && styles.calendarDayActive
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.calendarDayText,
                                                hasWorkout && styles.calendarDayTextActive
                                            ]}
                                        >
                                            {idx + 1}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>

            <BottomNav
                currentScreen={currentScreen}
                setCurrentScreen={setCurrentScreen}
            />
        </SafeAreaView>
    );
}