// src/views/components/RoutineCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';
import { ExerciseController } from '../../controllers/ExerciseController';

export default function RoutineCard({ routine, onPress }) {
    return (
        <TouchableOpacity
            style={styles.routineCard}
            onPress={() => onPress && onPress(routine)}
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
    );
}