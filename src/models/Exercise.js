// src/models/Exercise.js
export const exercisesData = [
    { id: 1, name: 'Press de banca', muscle: 'PECHO', emoji: '🏋️', category: 'Pecho' },
    { id: 2, name: 'Sentadillas', muscle: 'PIERNAS', emoji: '🦵', category: 'Piernas' },
    { id: 3, name: 'Curl de bíceps', muscle: 'BRAZOS', emoji: '💪', category: 'Brazos' },
    { id: 4, name: 'Press militar', muscle: 'HOMBROS', emoji: '🏋️', category: 'Hombros' },
    { id: 5, name: 'Peso muerto', muscle: 'ESPALDA', emoji: '💪', category: 'Espalda' },
    { id: 6, name: 'Dominadas', muscle: 'ESPALDA', emoji: '🤸', category: 'Espalda' },
    { id: 7, name: 'Fondos', muscle: 'PECHO', emoji: '💪', category: 'Pecho' },
    { id: 8, name: 'Extensión de tríceps', muscle: 'BRAZOS', emoji: '💪', category: 'Brazos' },
    { id: 9, name: 'Elevaciones laterales', muscle: 'HOMBROS', emoji: '🏋️', category: 'Hombros' },
    { id: 10, name: 'Zancadas', muscle: 'PIERNAS', emoji: '🦵', category: 'Piernas' },
];

export const categories = ['Todos', 'Pecho', 'Espalda', 'Piernas', 'Brazos', 'Hombros'];

export class Exercise {
    constructor(id, name, muscle, emoji, category) {
        this.id = id;
        this.name = name;
        this.muscle = muscle;
        this.emoji = emoji;
        this.category = category;
    }

    static getAll() {
        return exercisesData;
    }

    static getByCategory(category) {
        if (category === 'Todos') {
            return exercisesData;
        }
        return exercisesData.filter(ex => ex.category === category);
    }

    static getById(id) {
        return exercisesData.find(ex => ex.id === id);
    }

    static search(query) {
        const lowerQuery = query.toLowerCase();
        return exercisesData.filter(ex =>
            ex.name.toLowerCase().includes(lowerQuery) ||
            ex.muscle.toLowerCase().includes(lowerQuery) ||
            ex.category.toLowerCase().includes(lowerQuery)
        );
    }
}