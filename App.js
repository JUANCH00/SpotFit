// App.js
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './src/views/screens/LoginScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import RoutinesScreen from './src/views/screens/RoutinesScreen';
import CreateRoutineScreen from './src/views/screens/CreateRoutineScreen';
import ExecuteRoutineScreen from './src/views/screens/ExecuteRoutineScreen';
import ProgressScreen from './src/views/screens/ProgressScreen';
import ProfileScreen from './src/views/screens/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [user, setUser] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const screenProps = {
    currentScreen,
    setCurrentScreen,
    user,
    setUser,
    routines,
    setRoutines,
    selectedRoutine,
    setSelectedRoutine,
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen {...screenProps} />;
      case 'home':
        return <HomeScreen {...screenProps} />;
      case 'routines':
        return <RoutinesScreen {...screenProps} />;
      case 'createRoutine':
        return <CreateRoutineScreen {...screenProps} />;
      case 'executeRoutine':
        return <ExecuteRoutineScreen {...screenProps} />;
      case 'progress':
        return <ProgressScreen {...screenProps} />;
      case 'profile':
        return <ProfileScreen {...screenProps} />;
      default:
        return <LoginScreen {...screenProps} />;
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      {renderScreen()}
    </>
  );
}