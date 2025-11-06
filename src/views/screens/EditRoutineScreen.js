// src/views/screens/EditRoutineScreen.js
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { styles } from '../../styles/styles';
import { ExerciseController } from '../../controllers/ExerciseController';
import { RoutineController } from '../../controllers/RoutineController';

export default function EditRoutineScreen({
    setCurrentScreen,
    routines,
    setRoutines,
    selectedRoutine,
}) {
    const [routineName, setRoutineName] = useState(selectedRoutine?.name || '');
    const [selectedExercises, setSelectedExercises] = useState(selectedRoutine?.exercises || []);

    const exercises = ExerciseController.getAllExercises();

    const addExercise = (exercise) => {
        setSelectedExercises([...selectedExercises, {
            exerciseId: exercise.id,
            sets: 3,
            reps: 10,
            weight: 0,
        }]);
    };

    const removeExercise = (index) => {
        setSelectedExercises(selectedExercises.filter((_, i) => i !== index));
    };

    const saveRoutine = () => {
        if (!routineName || routineName.trim() === '') {
            Alert.alert('Error', 'El nombre de la rutina es requerido');
            return;
        }

        if (selectedExercises.length === 0) {
            Alert.alert('Error', 'Debes agregar al menos un ejercicio');
            return;
        }

        try {
            // Actualizar la rutina existente
            const updatedRoutines = routines.map(r =>
                r.id === selectedRoutine.id
                    ? { ...r, name: routineName, exercises: selectedExercises }
                    : r
            );
            setRoutines(updatedRoutines);
            setCurrentScreen('routines');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setCurrentScreen('routines')}>
                        <Text style={styles.backButton}>← Volver</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Editar Rutina</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nombre de la rutina</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ej: Rutina de fuerza"
                            placeholderTextColor="#999999"
                            value={routineName}
                            onChangeText={setRoutineName}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>
                        Ejercicios seleccionados ({selectedExercises.length})
                    </Text>

                    {selectedExercises.length === 0 ? (
                        <View style={[styles.selectedExerciseCard, {
                            paddingVertical: 30,
                            justifyContent: 'center',
                            backgroundColor: '#FFFFFF',
                            borderWidth: 2,
                            borderStyle: 'dashed',
                            borderColor: '#E0E0E0',
                        }]}>
                            <Text style={{
                                color: '#999999',
                                textAlign: 'center',
                                fontSize: 15,
                            }}>
                                ✋ Agrega ejercicios a tu rutina
                            </Text>
                        </View>
                    ) : (
                        selectedExercises.map((ex, idx) => {
                            const exercise = ExerciseController.getExerciseById(ex.exerciseId);
                            return (
                                <View key={idx} style={{ marginBottom: 16 }}>
                                    <View style={styles.selectedExerciseCard}>
                                        <View style={styles.selectedExerciseInfo}>
                                            <Text style={styles.exerciseEmojiSmall}>
                                                {exercise?.emoji}
                                            </Text>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.selectedExerciseName}>
                                                    {exercise?.name}
                                                </Text>
                                                <Text style={styles.selectedExerciseDetails}>
                                                    {ex.sets} series × {ex.reps} reps {ex.weight > 0 ? `× ${ex.weight}kg` : ''}
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => removeExercise(idx)}
                                            style={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: 16,
                                                backgroundColor: '#FFF5F5',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Text style={styles.removeButton}>✕</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Controles de edición */}
                                    <View style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: 12,
                                        padding: 16,
                                        marginTop: -8,
                                        paddingTop: 16,
                                        borderWidth: 1,
                                        borderColor: '#E0E0E0',
                                        borderTopWidth: 0,
                                        borderTopLeftRadius: 0,
                                        borderTopRightRadius: 0,
                                    }}>
                                        <View style={{ flexDirection: 'row', gap: 12 }}>
                                            {/* Control de Sets */}
                                            <View style={{ flex: 1 }}>
                                                <Text style={{
                                                    color: '#666666',
                                                    fontSize: 12,
                                                    marginBottom: 8,
                                                    fontWeight: '600',
                                                }}>
                                                    Series
                                                </Text>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    backgroundColor: '#F5F5F5',
                                                    borderRadius: 10,
                                                    overflow: 'hidden',
                                                }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            const newExercises = [...selectedExercises];
                                                            if (newExercises[idx].sets > 1) {
                                                                newExercises[idx].sets--;
                                                                setSelectedExercises(newExercises);
                                                            }
                                                        }}
                                                        style={{
                                                            padding: 12,
                                                            backgroundColor: '#E8E8E8',
                                                        }}
                                                    >
                                                        <Text style={{ fontSize: 18, color: '#1A1A1A', fontWeight: '600' }}>−</Text>
                                                    </TouchableOpacity>
                                                    <Text style={{
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        fontSize: 16,
                                                        fontWeight: '600',
                                                        color: '#1A1A1A',
                                                    }}>
                                                        {ex.sets}
                                                    </Text>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            const newExercises = [...selectedExercises];
                                                            if (newExercises[idx].sets < 10) {
                                                                newExercises[idx].sets++;
                                                                setSelectedExercises(newExercises);
                                                            }
                                                        }}
                                                        style={{
                                                            padding: 12,
                                                            backgroundColor: '#E8E8E8',
                                                        }}
                                                    >
                                                        <Text style={{ fontSize: 18, color: '#1A1A1A', fontWeight: '600' }}>+</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                            {/* Control de Reps */}
                                            <View style={{ flex: 1 }}>
                                                <Text style={{
                                                    color: '#666666',
                                                    fontSize: 12,
                                                    marginBottom: 8,
                                                    fontWeight: '600',
                                                }}>
                                                    Reps
                                                </Text>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    backgroundColor: '#F5F5F5',
                                                    borderRadius: 10,
                                                    overflow: 'hidden',
                                                }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            const newExercises = [...selectedExercises];
                                                            if (newExercises[idx].reps > 1) {
                                                                newExercises[idx].reps--;
                                                                setSelectedExercises(newExercises);
                                                            }
                                                        }}
                                                        style={{
                                                            padding: 12,
                                                            backgroundColor: '#E8E8E8',
                                                        }}
                                                    >
                                                        <Text style={{ fontSize: 18, color: '#1A1A1A', fontWeight: '600' }}>−</Text>
                                                    </TouchableOpacity>
                                                    <Text style={{
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        fontSize: 16,
                                                        fontWeight: '600',
                                                        color: '#1A1A1A',
                                                    }}>
                                                        {ex.reps}
                                                    </Text>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            const newExercises = [...selectedExercises];
                                                            if (newExercises[idx].reps < 50) {
                                                                newExercises[idx].reps++;
                                                                setSelectedExercises(newExercises);
                                                            }
                                                        }}
                                                        style={{
                                                            padding: 12,
                                                            backgroundColor: '#E8E8E8',
                                                        }}
                                                    >
                                                        <Text style={{ fontSize: 18, color: '#1A1A1A', fontWeight: '600' }}>+</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                            {/* Control de Peso */}
                                            <View style={{ flex: 1 }}>
                                                <Text style={{
                                                    color: '#666666',
                                                    fontSize: 12,
                                                    marginBottom: 8,
                                                    fontWeight: '600',
                                                }}>
                                                    Peso (kg)
                                                </Text>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    backgroundColor: '#F5F5F5',
                                                    borderRadius: 10,
                                                    overflow: 'hidden',
                                                }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            const newExercises = [...selectedExercises];
                                                            if (newExercises[idx].weight > 0) {
                                                                newExercises[idx].weight -= 2.5;
                                                                setSelectedExercises(newExercises);
                                                            }
                                                        }}
                                                        style={{
                                                            padding: 12,
                                                            backgroundColor: '#E8E8E8',
                                                        }}
                                                    >
                                                        <Text style={{ fontSize: 18, color: '#1A1A1A', fontWeight: '600' }}>−</Text>
                                                    </TouchableOpacity>
                                                    <Text style={{
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        fontSize: 16,
                                                        fontWeight: '600',
                                                        color: '#1A1A1A',
                                                    }}>
                                                        {ex.weight}
                                                    </Text>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            const newExercises = [...selectedExercises];
                                                            if (newExercises[idx].weight < 500) {
                                                                newExercises[idx].weight += 2.5;
                                                                setSelectedExercises(newExercises);
                                                            }
                                                        }}
                                                        style={{
                                                            padding: 12,
                                                            backgroundColor: '#E8E8E8',
                                                        }}
                                                    >
                                                        <Text style={{ fontSize: 18, color: '#1A1A1A', fontWeight: '600' }}>+</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    )}

                    <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                        Ejercicios disponibles
                    </Text>

                    {exercises.map(exercise => {
                        const isSelected = selectedExercises.some(
                            ex => ex.exerciseId === exercise.id
                        );
                        return (
                            <TouchableOpacity
                                key={exercise.id}
                                onPress={() => !isSelected && addExercise(exercise)}
                                disabled={isSelected}
                                style={[
                                    styles.availableExerciseCard,
                                    isSelected && styles.disabledCard
                                ]}
                            >
                                <View style={styles.availableExerciseInfo}>
                                    <Text style={styles.exerciseEmojiSmall}>{exercise.emoji}</Text>
                                    <View>
                                        <Text style={styles.availableExerciseName}>
                                            {exercise.name}
                                        </Text>
                                        <Text style={styles.availableExerciseMuscle}>
                                            {exercise.muscle}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 16,
                                    backgroundColor: isSelected ? '#E0E0E0' : '#F0FFF4',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={[styles.addIcon, { fontSize: 20 }]}>
                                        {isSelected ? '✓' : '+'}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}

                    <TouchableOpacity
                        onPress={saveRoutine}
                        disabled={!routineName || selectedExercises.length === 0}
                        style={[
                            styles.saveButton,
                            (!routineName || selectedExercises.length === 0) &&
                            styles.disabledButton
                        ]}
                    >
                        <View style={styles.buttonGradient}>
                            <Text style={styles.buttonText}>Guardar Cambios</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}