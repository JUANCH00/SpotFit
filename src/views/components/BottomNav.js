// src/views/components/BottomNav.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

export default function BottomNav({ currentScreen, setCurrentScreen }) {
    const navItems = [
        { id: 'home', icon: '🏠', label: 'Explorar' },
        { id: 'routines', icon: '💪', label: 'Rutinas' },
        { id: 'progress', icon: '📊', label: 'Progreso' },
        { id: 'profile', icon: '👤', label: 'Perfil' },
    ];

    return (
        <View style={styles.bottomNav}>
            {navItems.map(item => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => setCurrentScreen(item.id)}
                    style={styles.navItem}
                >
                    <View style={[
                        styles.navIconContainer,
                        currentScreen === item.id && styles.navIconContainerActive
                    ]}>
                        <Text style={styles.navIcon}>{item.icon}</Text>
                    </View>
                    <Text style={[
                        styles.navLabel,
                        currentScreen === item.id && styles.navLabelActive
                    ]}>
                        {item.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}