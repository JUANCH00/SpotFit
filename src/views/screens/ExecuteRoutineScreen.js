// src/views/screens/ExecuteRoutineScreen.js
import React, { useState } from 'react';
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
import { ExerciseController } from '../../controllers/ExerciseController';

export default function ExecuteRoutineScreen({
    setCurrentScreen,
    selectedRoutine,
}) {
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [completedSets, setCompletedSets] = useState({});

    if (!selectedRoutine) {
        return null;
    }

    const currentExercise = selectedRoutine.exercises[currentExerciseIndex];
    const exercise = ExerciseController.getExerciseById(currentExercise.exerciseId);

    const completeSet = (setNumber) => {
        const key = `${currentExerciseIndex}-${setNumber}`;
        setCompletedSets({ ...completedSets, [key]: !completedSets[key] });
    };

    const handleNext = () => {
        if (currentExerciseIndex < selectedRoutine.exercises.length - 1) {
            setCurrentExerciseIndex(currentExerciseIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentExerciseIndex > 0) {
            setCurrentExerciseIndex(currentExerciseIndex - 1);
        }
    };

    const handleFinish = () => {
        Alert.alert(
            '¡Rutina Completada! 🎉',
            '¡Excelente trabajo! Has completado tu entrenamiento.',
            [
                {
                    text: 'Finalizar',
                    onPress: () => setCurrentScreen('routines'),
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <LinearGradient
                    colors={['#10b981', '#14b8a6']}
                    style={styles.header}
                >
                    <TouchableOpacity onPress={() => setCurrentScreen('routines')}>
                        <Text style={styles.backButton}>← Volver</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{selectedRoutine.name}</Text>
                    <Text style={styles.headerSubtitle}>
                        Ejercicio {currentExerciseIndex + 1} de{' '}
                        {selectedRoutine.exercises.length}
                    </Text>
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.exerciseDisplay}>
                        <Text style={styles.exerciseDisplayEmoji}>{exercise?.emoji}</Text>
                        <Text style={styles.exerciseDisplayName}>{exercise?.name}</Text>
                        <Text style={styles.exerciseDisplayMuscle}>{exercise?.muscle}</Text>
                    </View>

                    <View style={styles.setsContainer}>
                        <Text style={styles.sectionTitle}>Series</Text>
                        {[...Array(currentExercise.sets)].map((_, idx) => {
                            const isCompleted = completedSets[`${currentExerciseIndex}-${idx}`];
                            return (
                                <View key={idx} style={styles.setRow}>
                                    <Text style={styles.setText}>Serie {idx + 1}</Text>
                                    <Text style={styles.repsText}>
                                        {currentExercise.reps} reps
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => completeSet(idx)}
                                        style={[
                                            styles.checkButton,
                                            isCompleted && styles.checkButtonActive
                                        ]}
                                    >
                                        <Text style={styles.checkIcon}>
                                            {isCompleted ? '✓' : ''}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>

                    <View style={styles.navigationButtons}>
                        {currentExerciseIndex > 0 && (
                            <TouchableOpacity
                                onPress={handlePrevious}
                                style={styles.navButton}
                            >
                                <Text style={styles.navButtonText}>Anterior</Text>
                            </TouchableOpacity>
                        )}
                        {currentExerciseIndex < selectedRoutine.exercises.length - 1 ? (
                            <TouchableOpacity
                                onPress={handleNext}
                                style={styles.navButtonPrimary}
                            >
                                <LinearGradient
                                    colors={['#10b981', '#14b8a6']}
                                    style={styles.buttonGradient}
                                >
                                    <Text style={styles.buttonText}>Siguiente</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={handleFinish}
                                style={styles.navButtonPrimary}
                            >
                                <LinearGradient
                                    colors={['#10b981', '#14b8a6']}
                                    style={styles.buttonGradient}
                                >
                                    <Text style={styles.buttonText}>Finalizar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}