// src/views/screens/CreateRoutineScreen.js - Mejorado según mockup
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

export default function CreateRoutineScreen({
    setCurrentScreen,
    routines,
    setRoutines,
}) {
    const [routineName, setRoutineName] = useState('');
    const [selectedExercises, setSelectedExercises] = useState([]);

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
        const validation = RoutineController.validateRoutine(
            routineName,
            selectedExercises
        );

        if (!validation.isValid) {
            Alert.alert('Error', validation.errors.join('\n'));
            return;
        }

        try {
            const newRoutine = RoutineController.createRoutine(
                routineName,
                selectedExercises
            );
            setRoutines([...routines, newRoutine]);
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
                    <Text style={styles.headerTitle}>Nueva Rutina</Text>
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
                                <View key={idx} style={styles.selectedExerciseCard}>
                                    <View style={styles.selectedExerciseInfo}>
                                        <Text style={styles.exerciseEmojiSmall}>
                                            {exercise?.emoji}
                                        </Text>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.selectedExerciseName}>
                                                {exercise?.name}
                                            </Text>
                                            <Text style={styles.selectedExerciseDetails}>
                                                {ex.sets} series × {ex.reps} reps
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
                            <Text style={styles.buttonText}>Guardar Rutina</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}