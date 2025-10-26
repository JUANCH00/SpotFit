// src/controllers/RoutineController.js
import { Routine } from '../models/Routine';

export class RoutineController {
    static createRoutine(name, exercises) {
        if (!name || !exercises || exercises.length === 0) {
            throw new Error('Nombre y ejercicios son requeridos');
        }

        return Routine.create(name, exercises);
    }

    static getPredefinedRoutines() {
        return Routine.getPredefined();
    }

    static addExerciseToRoutine(routine, exerciseId, sets = 3, reps = 10, weight = 0) {
        routine.addExercise(exerciseId, sets, reps, weight);
        return routine;
    }

    static removeExerciseFromRoutine(routine, index) {
        routine.removeExercise(index);
        return routine;
    }

    static updateExerciseInRoutine(routine, index, updates) {
        routine.updateExercise(index, updates);
        return routine;
    }

    static duplicateRoutine(routine) {
        return Routine.create(
            `${routine.name} (Copia)`,
            [...routine.exercises]
        );
    }

    static getRoutineStats(routine) {
        return {
            totalExercises: routine.getTotalExercises(),
            totalSets: routine.getTotalSets(),
            estimatedTime: routine.getTotalSets() * 3, // 3 minutos por serie aproximadamente
        };
    }

    static validateRoutine(name, exercises) {
        const errors = [];

        if (!name || name.trim() === '') {
            errors.push('El nombre de la rutina es requerido');
        }

        if (!exercises || exercises.length === 0) {
            errors.push('Debes agregar al menos un ejercicio');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}