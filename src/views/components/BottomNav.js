// src/views/components/BottomNav.js - Minimalista
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function BottomNav({ currentScreen, setCurrentScreen }) {
  const navItems = [
    { id: "home", icon: "home" },
    { id: "routines", icon: "dumbbell" },
    { id: "progress", icon: "chart-line" },
    { id: "profile", icon: "account" },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = currentScreen === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => setCurrentScreen(item.id)}
            style={styles.navButton}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={26}
              color={isActive ? "#00D9A3" : "#CCCCCC"}
            />
            {isActive && <View style={styles.dot} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: "#E5E5E5",
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  icon: {
    marginBottom: 4,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#00D9A3",
  },
});
