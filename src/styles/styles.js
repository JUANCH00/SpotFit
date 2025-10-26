// src/styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Container styles
    container: {
        flex: 1,
        backgroundColor: '#111827',
    },
    gradientContainer: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 16,
    },

    // Login styles
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoGradient: {
        width: 80,
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    logoEmoji: {
        fontSize: 40,
    },
    logoText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    logoAccent: {
        color: '#34d399',
    },
    subtitle: {
        color: '#9ca3af',
        marginTop: 8,
    },

    // Form styles
    formContainer: {
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        borderRadius: 20,
        padding: 24,
        borderWidth: 1,
        borderColor: '#374151',
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        color: '#d1d5db',
        marginBottom: 8,
    },
    input: {
        backgroundColor: 'rgba(55, 65, 81, 0.5)',
        borderWidth: 1,
        borderColor: '#4b5563',
        borderRadius: 12,
        padding: 12,
        color: '#fff',
        fontSize: 16,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(55, 65, 81, 0.5)',
        borderWidth: 1,
        borderColor: '#4b5563',
        borderRadius: 12,
    },
    passwordInput: {
        flex: 1,
        padding: 12,
        color: '#fff',
        fontSize: 16,
    },
    eyeButton: {
        padding: 12,
    },
    eyeIcon: {
        fontSize: 20,
    },

    // Button styles
    primaryButton: {
        marginTop: 8,
        borderRadius: 12,
        overflow: 'hidden',
    },
    buttonGradient: {
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    forgotButton: {
        marginTop: 16,
        alignItems: 'center',
    },
    forgotText: {
        color: '#34d399',
        fontSize: 14,
    },
    registerText: {
        marginTop: 16,
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: 14,
    },
    registerLink: {
        color: '#34d399',
    },

    // Header styles
    header: {
        paddingTop: 20,
        paddingBottom: 24,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerSubtitle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
        marginTop: 4,
    },
    headerWithBack: {
        marginBottom: 8,
    },
    backButton: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
    },

    // Search styles
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 20,
        paddingHorizontal: 16,
    },
    searchIcon: {
        fontSize: 20,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 12,
        color: '#1f2937',
        fontSize: 16,
    },

    // Notification styles
    notificationButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellIcon: {
        fontSize: 20,
    },

    // Category styles
    categoriesScroll: {
        marginBottom: 16,
    },
    categoryButton: {
        backgroundColor: '#374151',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 8,
    },
    categoryButtonActive: {
        backgroundColor: '#10b981',
    },
    categoryText: {
        color: '#d1d5db',
        fontWeight: '500',
    },
    categoryTextActive: {
        color: '#fff',
    },

    // Exercise card styles
    exercisesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    exerciseCard: {
        width: '48%',
        backgroundColor: '#1f2937',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
    },
    exerciseImageContainer: {
        backgroundColor: '#374151',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    exerciseEmoji: {
        fontSize: 48,
    },
    exerciseInfo: {
        padding: 12,
    },
    exerciseName: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 4,
    },
    exerciseMuscle: {
        color: '#34d399',
        fontSize: 12,
    },

    // Routine styles
    newRoutineButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 16,
    },
    newRoutineText: {
        color: '#9333ea',
        fontWeight: '600',
        fontSize: 16,
    },
    routineCard: {
        backgroundColor: '#1f2937',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    routineName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    routineExercises: {
        gap: 8,
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
        color: '#d1d5db',
    },
    routineExerciseSets: {
        color: '#6b7280',
        fontSize: 14,
    },

    // Empty state
    emptyState: {
        alignItems: 'center',
        paddingVertical: 60,
    },
    emptyEmoji: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyText: {
        color: '#9ca3af',
        fontSize: 16,
        marginBottom: 24,
    },
    emptyButton: {
        borderRadius: 20,
        overflow: 'hidden',
    },

    // Predefined routines
    predefinedSection: {
        marginTop: 32,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    predefinedCard: {
        backgroundColor: '#1f2937',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(52, 211, 153, 0.3)',
    },
    predefinedCount: {
        color: '#9ca3af',
        fontSize: 14,
        marginTop: 4,
    },
    addIcon: {
        color: '#34d399',
        fontSize: 24,
    },

    // Create routine styles
    selectedExerciseCard: {
        backgroundColor: '#1f2937',
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
        fontSize: 24,
        marginRight: 12,
    },
    selectedExerciseName: {
        color: '#fff',
        fontWeight: '500',
    },
    selectedExerciseDetails: {
        color: '#9ca3af',
        fontSize: 12,
        marginTop: 2,
    },
    removeButton: {
        color: '#ef4444',
        fontSize: 20,
        paddingHorizontal: 8,
    },
    availableExerciseCard: {
        backgroundColor: '#1f2937',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    availableExerciseInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    availableExerciseName: {
        color: '#fff',
        fontWeight: '500',
    },
    availableExerciseMuscle: {
        color: '#34d399',
        fontSize: 12,
        marginTop: 2,
    },
    disabledCard: {
        opacity: 0.5,
    },
    saveButton: {
        marginTop: 24,
        borderRadius: 20,
        overflow: 'hidden',
    },
    disabledButton: {
        opacity: 0.5,
    },

    // Execute routine styles
    exerciseDisplay: {
        backgroundColor: '#1f2937',
        borderRadius: 20,
        padding: 32,
        alignItems: 'center',
        marginBottom: 24,
    },
    exerciseDisplayEmoji: {
        fontSize: 80,
        marginBottom: 16,
    },
    exerciseDisplayName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    exerciseDisplayMuscle: {
        color: '#34d399',
        fontSize: 16,
    },
    setsContainer: {
        backgroundColor: '#1f2937',
        borderRadius: 20,
        padding: 20,
        marginBottom: 24,
    },
    setRow: {
        backgroundColor: '#111827',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    setText: {
        color: '#fff',
        flex: 1,
    },
    repsText: {
        color: '#9ca3af',
        marginRight: 16,
    },
    checkButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#374151',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkButtonActive: {
        backgroundColor: '#10b981',
    },
    checkIcon: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navigationButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    navButton: {
        flex: 1,
        backgroundColor: '#374151',
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
    },
    navButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    navButtonPrimary: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },

    // Progress screen styles
    statsGrid: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 16,
    },
    statCard: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
    },
    statValue: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    statLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        marginTop: 4,
    },
    chartCard: {
        backgroundColor: '#1f2937',
        borderRadius: 20,
        padding: 20,
        marginBottom: 24,
    },
    chartTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: 150,
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderRadius: 12,
        padding: 16,
    },
    chartDay: {
        alignItems: 'center',
        gap: 8,
    },
    chartBar: {
        width: 24,
        backgroundColor: '#10b981',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    chartDayLabel: {
        color: '#9ca3af',
        fontSize: 12,
    },
    calendarCard: {
        backgroundColor: '#1f2937',
        borderRadius: 20,
        padding: 20,
    },
    calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    calendarHeader: {
        width: '12.5%',
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 8,
    },
    calendarDay: {
        width: '12.5%',
        aspectRatio: 1,
        backgroundColor: '#374151',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarDayActive: {
        backgroundColor: '#10b981',
    },
    calendarDayText: {
        color: '#6b7280',
        fontSize: 14,
        fontWeight: '500',
    },
    calendarDayTextActive: {
        color: '#fff',
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
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileEmail: {
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
    },
    infoCard: {
        backgroundColor: '#1f2937',
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#374151',
    },
    infoLabel: {
        color: '#d1d5db',
    },
    infoValue: {
        color: '#fff',
        fontWeight: '500',
    },
    settingsCard: {
        backgroundColor: '#1f2937',
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
    },
    settingsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: 'rgba(55, 65, 81, 0.5)',
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    settingsLabel: {
        color: '#d1d5db',
        fontSize: 16,
    },
    chevron: {
        color: '#9ca3af',
        fontSize: 24,
    },
    logoutButton: {
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    logoutText: {
        color: '#ef4444',
        fontSize: 16,
        fontWeight: '600',
    },

    // Bottom navigation styles
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#111827',
        borderTopWidth: 1,
        borderTopColor: '#1f2937',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    navIconContainer: {
        backgroundColor: 'transparent',
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navIconContainerActive: {
        backgroundColor: '#10b981',
    },
    navIcon: {
        fontSize: 24,
    },
    navLabel: {
        color: '#6b7280',
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
    },
    navLabelActive: {
        color: '#34d399',
    },
});