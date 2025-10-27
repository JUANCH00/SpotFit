// src/views/screens/RoutinesScreen.js - Mejorado según mockup
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
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
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Rutinas</Text>
                    <TouchableOpacity
                        onPress={() => setCurrentScreen('createRoutine')}
                        style={styles.newRoutineButton}
                    >
                        <Text style={styles.newRoutineText}>+ Nueva Rutina</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    {routines.length === 0 ? (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyEmoji}>💪</Text>
                            <Text style={styles.emptyText}>No tienes rutinas creadas</Text>
                            <TouchableOpacity
                                onPress={() => setCurrentScreen('createRoutine')}
                                style={styles.emptyButton}
                            >
                                <View style={styles.buttonGradient}>
                                    <Text style={styles.buttonText}>
                                        Crear mi primera rutina
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.sectionTitle}>Mis Rutinas</Text>
                            {routines.map(routine => (
                                <RoutineCard
                                    key={routine.id}
                                    routine={routine}
                                    onPress={handleRoutinePress}
                                />
                            ))}
                        </View>
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