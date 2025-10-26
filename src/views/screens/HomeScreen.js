// src/views/screens/HomeScreen.js
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/styles';
import { ExerciseController } from '../../controllers/ExerciseController';
import ExerciseCard from '../components/ExerciseCard';
import BottomNav from '../components/BottomNav';

export default function HomeScreen({ currentScreen, setCurrentScreen }) {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ExerciseController.getCategories();

    let filteredExercises = ExerciseController.getExercisesByCategory(selectedCategory);

    if (searchQuery) {
        filteredExercises = ExerciseController.searchExercises(searchQuery);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <LinearGradient
                    colors={['#10b981', '#14b8a6']}
                    style={styles.header}
                >
                    <View style={styles.headerContent}>
                        <Text style={styles.headerTitle}>Explorar</Text>
                        <TouchableOpacity style={styles.notificationButton}>
                            <Text style={styles.bellIcon}>🔔</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.searchContainer}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar ejercicios..."
                            placeholderTextColor="#6b7280"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                </LinearGradient>

                <View style={styles.content}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.categoriesScroll}
                    >
                        {categories.map(cat => (
                            <TouchableOpacity
                                key={cat}
                                onPress={() => {
                                    setSelectedCategory(cat);
                                    setSearchQuery('');
                                }}
                                style={[
                                    styles.categoryButton,
                                    selectedCategory === cat && styles.categoryButtonActive
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.categoryText,
                                        selectedCategory === cat && styles.categoryTextActive
                                    ]}
                                >
                                    {cat}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={styles.exercisesGrid}>
                        {filteredExercises.map(exercise => (
                            <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                                onPress={(ex) => console.log('Exercise selected:', ex.name)}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>

            <BottomNav
                currentScreen={currentScreen}
                setCurrentScreen={setCurrentScreen}
            />
        </SafeAreaView>
    );
}