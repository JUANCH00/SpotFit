// src/styles/styles.js - Mejorado según mockup
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // Container styles
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    gradientContainer: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },

    // Login styles
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoImage: {
        width: 90,
        height: 90,
        marginBottom: 16,
    },
    logoText: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 6,
        letterSpacing: -0.5,
    },
    logoAccent: {
        color: '#00D9A3',
    },
    subtitle: {
        color: '#999999',
        fontSize: 14,
        marginTop: 2,
        fontWeight: '400',
    },

    // Form styles
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        padding: 0,
    },
    formTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 24,
        textAlign: 'left',
    },
    inputGroup: {
        marginBottom: 18,
    },
    label: {
        color: '#1A1A1A',
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#F7F7F7',
        borderWidth: 0,
        borderColor: 'transparent',
        borderRadius: 10,
        padding: 14,
        color: '#1A1A1A',
        fontSize: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderWidth: 0,
        borderColor: 'transparent',
        borderRadius: 10,
    },
    passwordInput: {
        flex: 1,
        padding: 14,
        color: '#1A1A1A',
        fontSize: 15,
    },
    eyeButton: {
        padding: 14,
    },
    eyeIcon: {
        fontSize: 18,
    },

    // Button styles
    primaryButton: {
        marginTop: 6,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#1A1A1A',
    },
    buttonGradient: {
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
    forgotButton: {
        marginTop: 14,
        alignItems: 'center',
    },
    forgotText: {
        color: '#00D9A3',
        fontSize: 13,
        fontWeight: '500',
    },
    registerText: {
        marginTop: 16,
        textAlign: 'center',
        color: '#999999',
        fontSize: 13,
    },
    registerLink: {
        color: '#00D9A3',
        fontWeight: '600',
    },

    // Header styles
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    headerSubtitle: {
        color: '#999999',
        fontSize: 13,
        marginTop: 4,
        fontWeight: '400',
    },
    headerWithBack: {
        marginBottom: 8,
    },
    backButton: {
        color: '#00D9A3',
        fontSize: 16,
        marginBottom: 16,
        fontWeight: '600',
    },

    // Search styles
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginTop: 16,
    },
    searchIcon: {
        fontSize: 20,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 14,
        color: '#1A1A1A',
        fontSize: 16,
    },

    // Notification styles
    notificationButton: {
        backgroundColor: '#F5F5F5',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellIcon: {
        fontSize: 20,
    },

    // Category styles
    categoriesScroll: {
        marginBottom: 20,
    },
    categoryButton: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    categoryButtonActive: {
        backgroundColor: '#1A1A1A',
    },
    categoryText: {
        color: '#666666',
        fontWeight: '600',
        fontSize: 14,
    },
    categoryTextActive: {
        color: '#FFFFFF',
    },

    // Exercise card styles
    exercisesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    exerciseCard: {
        width: (width - 50) / 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    exerciseImageContainer: {
        backgroundColor: '#F5F5F5',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    exerciseEmoji: {
        fontSize: 56,
    },
    exerciseInfo: {
        padding: 12,
    },
    exerciseName: {
        color: '#1A1A1A',
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 4,
    },
    exerciseMuscle: {
        color: '#00D9A3',
        fontSize: 12,
        fontWeight: '500',
    },

    // Routine styles
    newRoutineButton: {
        backgroundColor: '#1A1A1A',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    newRoutineText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
    },
    routineCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    routineName: {
        color: '#1A1A1A',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 16,
    },
    routineExercises: {
        gap: 12,
    },
    routineExerciseItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    routineExerciseEmoji: {
        fontSize: 24,
        marginRight: 12,
    },
    routineExerciseName: {
        flex: 1,
        color: '#333333',
        fontSize: 14,
    },
    routineExerciseSets: {
        color: '#999999',
        fontSize: 14,
        fontWeight: '500',
    },

    // Empty state
    emptyState: {
        alignItems: 'center',
        paddingVertical: 80,
    },
    emptyEmoji: {
        fontSize: 64,
        marginBottom: 20,
    },
    emptyText: {
        color: '#666666',
        fontSize: 16,
        marginBottom: 30,
    },
    emptyButton: {
        borderRadius: 12,
        overflow: 'hidden',
    },

    // Predefined routines
    predefinedSection: {
        marginTop: 40,
    },
    sectionTitle: {
        color: '#1A1A1A',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
    },
    predefinedCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        padding: 20,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    predefinedCount: {
        color: '#999999',
        fontSize: 14,
        marginTop: 4,
    },
    addIcon: {
        color: '#00D9A3',
        fontSize: 28,
        fontWeight: '300',
    },

    // Create routine styles
    selectedExerciseCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedExerciseInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    exerciseEmojiSmall: {
        fontSize: 28,
        marginRight: 12,
    },
    selectedExerciseName: {
        color: '#1A1A1A',
        fontWeight: '600',
        fontSize: 15,
    },
    selectedExerciseDetails: {
        color: '#999999',
        fontSize: 13,
        marginTop: 2,
    },
    removeButton: {
        color: '#FF3B30',
        fontSize: 24,
        paddingHorizontal: 8,
    },
    availableExerciseCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    availableExerciseInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    availableExerciseName: {
        color: '#1A1A1A',
        fontWeight: '600',
        fontSize: 15,
    },
    availableExerciseMuscle: {
        color: '#00D9A3',
        fontSize: 13,
        marginTop: 2,
        fontWeight: '500',
    },
    disabledCard: {
        opacity: 0.4,
    },
    saveButton: {
        marginTop: 30,
        borderRadius: 12,
        overflow: 'hidden',
    },
    disabledButton: {
        opacity: 0.5,
    },

    // Execute routine styles
    exerciseDisplay: {
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        marginBottom: 24,
    },
    exerciseDisplayEmoji: {
        fontSize: 100,
        marginBottom: 20,
    },
    exerciseDisplayName: {
        color: '#1A1A1A',
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 8,
        textAlign: 'center',
    },
    exerciseDisplayMuscle: {
        color: '#00D9A3',
        fontSize: 16,
        fontWeight: '600',
    },
    setsContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    setRow: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    setText: {
        color: '#1A1A1A',
        flex: 1,
        fontWeight: '600',
        fontSize: 15,
    },
    repsText: {
        color: '#666666',
        marginRight: 16,
        fontSize: 15,
    },
    checkButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkButtonActive: {
        backgroundColor: '#00D9A3',
    },
    checkIcon: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navigationButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    navButton: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    navButtonText: {
        color: '#1A1A1A',
        fontSize: 16,
        fontWeight: '700',
    },
    navButtonPrimary: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#1A1A1A',
    },

    // Progress screen styles
    statsGrid: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
    },
    statValue: {
        color: '#1A1A1A',
        fontSize: 26,
        fontWeight: '700',
    },
    statLabel: {
        color: '#666666',
        fontSize: 12,
        marginTop: 6,
        fontWeight: '500',
    },
    chartCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    chartTitle: {
        color: '#1A1A1A',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 20,
    },
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: 180,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 20,
    },
    chartDay: {
        alignItems: 'center',
        gap: 10,
    },
    chartBar: {
        width: 28,
        backgroundColor: '#00D9A3',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    chartDayLabel: {
        color: '#999999',
        fontSize: 12,
        fontWeight: '600',
    },
    calendarCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    calendarHeader: {
        width: '12.5%',
        textAlign: 'center',
        color: '#999999',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 12,
    },
    calendarDay: {
        width: '12.5%',
        aspectRatio: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarDayActive: {
        backgroundColor: '#00D9A3',
    },
    calendarDayText: {
        color: '#999999',
        fontSize: 14,
        fontWeight: '600',
    },
    calendarDayTextActive: {
        color: '#FFFFFF',
        fontWeight: '700',
    },

    // Profile screen styles
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        backgroundColor: '#F5F5F5',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 40,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        color: '#1A1A1A',
        fontSize: 24,
        fontWeight: '700',
    },
    profileEmail: {
        color: '#666666',
        marginTop: 4,
        fontSize: 14,
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        color: '#1A1A1A',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    infoLabel: {
        color: '#666666',
        fontSize: 15,
    },
    infoValue: {
        color: '#1A1A1A',
        fontWeight: '600',
        fontSize: 15,
    },
    settingsCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    settingsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 10,
    },
    settingsLabel: {
        color: '#1A1A1A',
        fontSize: 15,
        fontWeight: '500',
    },
    chevron: {
        color: '#999999',
        fontSize: 20,
    },
    logoutButton: {
        backgroundColor: '#FFF5F5',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    logoutText: {
        color: '#FF3B30',
        fontSize: 16,
        fontWeight: '700',
    },

    // Bottom navigation styles
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        paddingVertical: 10,
        paddingHorizontal: 16,
        paddingBottom: 25,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 10,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 6,
    },
    navIconContainer: {
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navIconContainerActive: {
        backgroundColor: '#1A1A1A',
    },
    navIcon: {
        fontSize: 24,
    },
    navLabel: {
        color: '#999999',
        fontSize: 11,
        marginTop: 4,
        fontWeight: '600',
    },
    navLabelActive: {
        color: '#00D9A3',
    },

    // Logo gradient for login (keeping for compatibility)
    logoGradient: {
        width: 90,
        height: 90,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#00D9A3',
    },
    logoEmoji: {
        fontSize: 46,
    },
});