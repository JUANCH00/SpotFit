// src/controllers/ExerciseController.js
import { Exercise } from '../models/Exercise';

export class ExerciseController {
    static getAllExercises() {
        return Exercise.getAll();
    }

    static getExercisesByCategory(category) {
        return Exercise.getByCategory(category);
    }

    static getExerciseById(id) {
        return Exercise.getById(id);
    }

    static searchExercises(query) {
        if (!query || query.trim() === '') {
            return Exercise.getAll();
        }
        return Exercise.search(query);
    }

    static getExerciseDetails(exerciseId) {
        const exercise = Exercise.getById(exerciseId);
        if (!exercise) {
            return null;
        }

        return {
            ...exercise,
            // Aquí podrías agregar información adicional como:
            // - Instrucciones
            // - Video tutorial
            // - Músculos secundarios trabajados
            // - Nivel de dificultad
        };
    }

    static getCategories() {
        return ['Todos', 'Pecho', 'Espalda', 'Piernas', 'Brazos', 'Hombros'];
    }
}