// src/views/screens/RoutinesScreen.js - Mejorado según mockup
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { styles } from '../../styles/styles';
import { RoutineController } from '../../controllers/RoutineController';
import { ExerciseController } from '../../controllers/ExerciseController';
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

    const handleEditRoutine = (routine) => {
        setSelectedRoutine(routine);
        setCurrentScreen('editRoutine');
    };

    const handleDeleteRoutine = (routineId) => {
        Alert.alert(
            'Eliminar Rutina',
            '¿Estás seguro que deseas eliminar esta rutina?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Eliminar',
                    onPress: () => {
                        setRoutines(routines.filter(r => r.id !== routineId));
                    },
                    style: 'destructive',
                },
            ]
        );
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
                                <View key={routine.id} style={{ marginBottom: 16 }}>
                                    <TouchableOpacity
                                        onPress={() => handleRoutinePress(routine)}
                                        style={styles.routineCard}
                                    >
                                        <Text style={styles.routineName}>{routine.name}</Text>
                                        <View style={styles.routineExercises}>
                                            {routine.exercises.slice(0, 3).map((ex, idx) => {
                                                const exercise = ExerciseController.getExerciseById(ex.exerciseId);
                                                return (
                                                    <View key={idx} style={styles.routineExerciseItem}>
                                                        <Text style={styles.routineExerciseEmoji}>{exercise?.emoji}</Text>
                                                        <Text style={styles.routineExerciseName}>{exercise?.name}</Text>
                                                        <Text style={styles.routineExerciseSets}>
                                                            {ex.sets}x{ex.reps}
                                                        </Text>
                                                    </View>
                                                );
                                            })}
                                            {routine.exercises.length > 3 && (
                                                <Text style={styles.predefinedCount}>
                                                    +{routine.exercises.length - 3} ejercicios más
                                                </Text>
                                            )}
                                        </View>
                                    </TouchableOpacity>

                                    {/* Botones de acción */}
                                    <View style={{
                                        flexDirection: 'row',
                                        gap: 12,
                                        marginTop: -8,
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => handleEditRoutine(routine)}
                                            style={{
                                                flex: 1,
                                                backgroundColor: '#F5F5F5',
                                                paddingVertical: 12,
                                                borderRadius: 12,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 6,
                                            }}
                                        >
                                            <Text style={{ fontSize: 16 }}>✏️</Text>
                                            <Text style={{
                                                color: '#1A1A1A',
                                                fontSize: 14,
                                                fontWeight: '600',
                                            }}>
                                                Editar
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => handleDeleteRoutine(routine.id)}
                                            style={{
                                                flex: 1,
                                                backgroundColor: '#FFF5F5',
                                                paddingVertical: 12,
                                                borderRadius: 12,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 6,
                                            }}
                                        >
                                            <Text style={{ fontSize: 16 }}>🗑️</Text>
                                            <Text style={{
                                                color: '#FF3B30',
                                                fontSize: 14,
                                                fontWeight: '600',
                                            }}>
                                                Eliminar
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
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