// src/views/components/BottomNav.js - Minimalista
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BottomNav({ currentScreen, setCurrentScreen }) {
    const navItems = [
        { id: 'home', icon: '🏠' },
        { id: 'routines', icon: '💪' },
        { id: 'progress', icon: '📊' },
        { id: 'profile', icon: '👤' },
    ];

    return (
        <View style={styles.container}>
            {navItems.map(item => {
                const isActive = currentScreen === item.id;
                return (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => setCurrentScreen(item.id)}
                        style={styles.navButton}
                        activeOpacity={0.7}
                    >
                        <Text style={[
                            styles.icon,
                            !isActive && styles.iconInactive
                        ]}>
                            {item.icon}
                        </Text>
                        {isActive && <View style={styles.dot} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 25,
        paddingHorizontal: 20,
        borderTopWidth: 0.5,
        borderTopColor: '#E5E5E5',
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    },
    icon: {
        fontSize: 26,
        marginBottom: 4,
    },
    iconInactive: {
        opacity: 0.35,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#00D9A3',
    },
});