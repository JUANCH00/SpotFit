// src/views/screens/RoutinesScreen.js
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/styles';
import { RoutineController } from '../../controllers/RoutineController';
import RoutineCard from '../components/RoutineCard';
import BottomNav from '../components/BottomNav';

export default function RoutinesScreen({
    currentScreen,
    setCurrentScreen,
    routines,
    setRoutines,
    setSelectedRoutine,
}) {
    const predefinedRoutines = RoutineController.getPredefinedRoutines();

    const handleRoutinePress = (routine) => {
        setSelectedRoutine(routine);
        setCurrentScreen('executeRoutine');
    };

    const handleAddPredefined = (routine) => {
        const newRoutine = { ...routine, id: Date.now().toString() };
        setRoutines([...routines, newRoutine]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <LinearGradient
                    colors={['#9333ea', '#ec4899']}
                    style={styles.header}
                >
                    <Text style={styles.headerTitle}>Mis Rutinas</Text>
                    <TouchableOpacity
                        onPress={() => setCurrentScreen('createRoutine')}
                        style={styles.newRoutineButton}
                    >
                        <Text style={styles.newRoutineText}>+ Nueva Rutina</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.content}>
                    {routines.length === 0 ? (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyEmoji}>💪</Text>
                            <Text style={styles.emptyText}>No tienes rutinas creadas</Text>
                            <TouchableOpacity
                                onPress={() => setCurrentScreen('createRoutine')}
                                style={styles.emptyButton}
                            >
                                <LinearGradient
                                    colors={['#9333ea', '#ec4899']}
                                    style={styles.buttonGradient}
                                >
                                    <Text style={styles.buttonText}>
                                        Crear mi primera rutina
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        routines.map(routine => (
                            <RoutineCard
                                key={routine.id}
                                routine={routine}
                                onPress={handleRoutinePress}
                            />
                        ))
                    )}

                    {predefinedRoutines.length > 0 && (
                        <View style={styles.predefinedSection}>
                            <Text style={styles.sectionTitle}>Rutinas Predefinidas</Text>
                            {predefinedRoutines.map(routine => (
                                <TouchableOpacity
                                    key={routine.id}
                                    onPress={() => handleAddPredefined(routine)}
                                    style={styles.predefinedCard}
                                >
                                    <View>
                                        <Text style={styles.routineName}>{routine.name}</Text>
                                        <Text style={styles.predefinedCount}>
                                            {routine.exercises.length} ejercicios
                                        </Text>
                                    </View>
                                    <Text style={styles.addIcon}>+</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            </ScrollView>

            <BottomNav
                currentScreen={currentScreen}
                setCurrentScreen={setCurrentScreen}
            />
        </SafeAreaView>
    );
}