// src/views/components/ExerciseCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

export default function ExerciseCard({ exercise, onPress }) {
    return (
        <TouchableOpacity
            style={styles.exerciseCard}
            onPress={() => onPress && onPress(exercise)}
        >
            <View style={styles.exerciseImageContainer}>
                <Text style={styles.exerciseEmoji}>{exercise.emoji}</Text>
            </View>
            <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseMuscle}>{exercise.muscle}</Text>
            </View>
        </TouchableOpacity>
    );
}