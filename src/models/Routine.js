// src/models/Routine.js
export const predefinedRoutines = [
    {
        id: 'r1',
        name: 'Brazos más fuertes',
        exercises: [
            { exerciseId: 3, sets: 4, reps: 12, weight: 0 },
            { exerciseId: 8, sets: 3, reps: 15, weight: 0 },
            { exerciseId: 1, sets: 4, reps: 10, weight: 0 },
        ]
    },
    {
        id: 'r2',
        name: 'Pierna explosiva',
        exercises: [
            { exerciseId: 2, sets: 5, reps: 10, weight: 0 },
            { exerciseId: 10, sets: 4, reps: 12, weight: 0 },
            { exerciseId: 5, sets: 4, reps: 8, weight: 0 },
        ]
    },
    {
        id: 'r3',
        name: 'Pecho y tríceps',
        exercises: [
            { exerciseId: 1, sets: 4, reps: 10, weight: 0 },
            { exerciseId: 7, sets: 3, reps: 12, weight: 0 },
            { exerciseId: 8, sets: 3, reps: 15, weight: 0 },
        ]
    },
    {
        id: 'r4',
        name: 'Espalda completa',
        exercises: [
            { exerciseId: 5, sets: 4, reps: 8, weight: 0 },
            { exerciseId: 6, sets: 3, reps: 10, weight: 0 },
        ]
    },
];

export class Routine {
    constructor(id, name, exercises = []) {
        this.id = id;
        this.name = name;
        this.exercises = exercises; // [{exerciseId, sets, reps, weight}]
        this.createdAt = new Date();
    }

    static create(name, exercises) {
        return new Routine(Date.now().toString(), name, exercises);
    }

    static getPredefined() {
        return predefinedRoutines;
    }

    addExercise(exerciseId, sets = 3, reps = 10, weight = 0) {
        this.exercises.push({ exerciseId, sets, reps, weight });
    }

    removeExercise(index) {
        this.exercises.splice(index, 1);
    }

    updateExercise(index, updates) {
        this.exercises[index] = { ...this.exercises[index], ...updates };
    }

    getTotalExercises() {
        return this.exercises.length;
    }

    getTotalSets() {
        return this.exercises.reduce((total, ex) => total + ex.sets, 0);
    }
}