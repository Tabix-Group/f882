// Actividades de entrenamiento por nivel
export const TRAINING_ACTIVITIES = {
    INICIAL: {
        1: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 12,
            details: {
                type: 'CARDIO',
                duration: 12,
                exercises: ['Caminata intensa - 12 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        2: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 12,
            details: {
                type: 'CARDIO',
                duration: 12,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 6 min',
                    'DR (Directa/Reversa) - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        3: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 12,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 12,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 40 reps - 2 series',
                    'Vortice pendular - 20 reps - 2 series',
                    'Toque cruzado - 40 reps - 2 series',
                    'Sembrando movimiento - 30 reps - 2 series',
                    'Incentivo a la Flexibilidad - 4 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        4: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 12,
            details: {
                type: 'FUERZA',
                duration: 12,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 20 reps - 2 series',
                    'Flexión Vertical - 20 reps - 2 series',
                    'Activador Zen - 20 reps - 2 series',
                    'Puente de Glúteos - 20 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 15 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        5: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 12,
            details: {
                type: 'CARDIO',
                duration: 12,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 6 min',
                    'S/B Escaleras o Step - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        6: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 12,
            details: {
                type: 'CARDIO',
                duration: 12,
                exercises: ['Caminata intensa - 12 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        7: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        8: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'DR (Directa/Reversa) - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        9: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 15,
            details: {
                type: 'FUERZA',
                duration: 15,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 30 reps - 2 series',
                    'Flexión Vertical - 20 reps - 2 series',
                    'Activador Zen - 30 reps - 2 series',
                    'Puente de Glúteos - 30 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 15 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        10: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                exercises: ['Caminata intensa - 15 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        11: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'S/B Escaleras o Step - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        12: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 15,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 15,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 2 series',
                    'Vortice pendular - 35 reps - 2 series',
                    'Toque cruzado - 50 reps - 2 series',
                    'Sembrando movimiento - 35 reps - 2 series',
                    'Incentivo a la Flexibilidad - 5 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        13: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'DR (Directa/Reversa) - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        14: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        15: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 18,
            details: {
                type: 'CARDIO',
                duration: 18,
                exercises: ['Caminata intensa - 18 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        16: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 18,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 18,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 3 series',
                    'Vortice pendular - 25 reps - 3 series',
                    'Toque cruzado - 50 reps - 3 series',
                    'Sembrando movimiento - 30 reps - 3 series',
                    'Incentivo a la Flexibilidad - 5 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        17: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 18,
            details: {
                type: 'CARDIO',
                duration: 18,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 8 min',
                    'DR (Directa/Reversa) - 10 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        18: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 18,
            details: {
                type: 'FUERZA',
                duration: 18,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 2 series',
                    'Flexión Vertical - 20 reps - 2 series',
                    'Activador Zen - 40 reps - 2 series',
                    'Puente de Glúteos - 40 reps - 2 series',
                    'Abdominal Supino - 5 reps - 2 series',
                    'Reductor Cintura x lado - 15 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        19: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 18,
            details: {
                type: 'CARDIO',
                duration: 18,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 8 min',
                    'S/B Escaleras o Step - 10 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        20: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 18,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 18,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 3 series',
                    'Vortice pendular - 25 reps - 3 series',
                    'Toque cruzado - 50 reps - 3 series',
                    'Sembrando movimiento - 30 reps - 3 series',
                    'Incentivo a la Flexibilidad - 5 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        21: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        22: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 21,
            details: {
                type: 'CARDIO',
                duration: 21,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'DR (Directa/Reversa) - 14 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        23: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 21,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 21,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 3 series',
                    'Vortice pendular - 35 reps - 3 series',
                    'Toque cruzado - 50 reps - 3 series',
                    'Sembrando movimiento - 35 reps - 3 series',
                    'Incentivo a la Flexibilidad - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        24: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 21,
            details: {
                type: 'CARDIO',
                duration: 21,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'S/B Escaleras o Step - 14 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        25: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 21,
            details: {
                type: 'FUERZA',
                duration: 21,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 30 reps - 3 series',
                    'Flexión Vertical - 20 reps - 3 series',
                    'Activador Zen - 30 reps - 3 series',
                    'Puente de Glúteos - 25 reps - 3 series',
                    'Abdominal Supino - 3 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        26: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 21,
            details: {
                type: 'CARDIO',
                duration: 21,
                exercises: ['Caminata intensa - 21 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        27: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 21,
            details: {
                type: 'FUERZA',
                duration: 21,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 30 reps - 3 series',
                    'Flexión Vertical - 20 reps - 3 series',
                    'Activador Zen - 30 reps - 3 series',
                    'Puente de Glúteos - 25 reps - 3 series',
                    'Abdominal Supino - 3 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        28: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        29: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 24,
            details: {
                type: 'CARDIO',
                duration: 24,
                exercises: ['Caminata intensa - 24 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        30: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 24,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 24,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 50 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        31: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 24,
            details: {
                type: 'CARDIO',
                duration: 24,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'S/B Escaleras o Step - 17 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        32: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 24,
            details: {
                type: 'FUERZA',
                duration: 24,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 30 reps - 3 series',
                    'Flexión Vertical - 25 reps - 3 series',
                    'Activador Zen - 30 reps - 3 series',
                    'Puente de Glúteos - 30 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        33: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 24,
            details: {
                type: 'CARDIO',
                duration: 24,
                exercises: ['Caminata intensa - 24 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        34: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 24,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 24,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 50 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        35: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        36: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'S/B Escaleras o Step - 18 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        37: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FUERZA',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 30 reps - 3 series',
                    'Flexión Vertical - 25 reps - 3 series',
                    'Activador Zen - 30 reps - 3 series',
                    'Puente de Glúteos - 30 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        38: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                exercises: ['Caminata intensa - 25 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        39: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 50 reps - 4 series',
                    'Sembrando movimiento - 35 reps - 4 series',
                    'Incentivo a la Flexibilidad - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        40: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FUERZA',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 30 reps - 3 series',
                    'Flexión Vertical - 25 reps - 3 series',
                    'Activador Zen - 30 reps - 3 series',
                    'Puente de Glúteos - 30 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        41: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 50 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        42: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        43: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 26,
            details: {
                type: 'CARDIO',
                duration: 26,
                exercises: ['Caminata intensa - 26 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        44: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 26,
            details: {
                type: 'FUERZA',
                duration: 26,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 25 reps - 3 series',
                    'Activador Zen - 30 reps - 3 series',
                    'Puente de Glúteos - 30 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        45: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 26,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 26,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 60 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 60 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        46: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 26,
            details: {
                type: 'FUERZA',
                duration: 26,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 25 reps - 3 series',
                    'Activador Zen - 35 reps - 3 series',
                    'Puente de Glúteos - 35 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        47: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 26,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 26,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 60 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 60 reps - 4 series',
                    'Sembrando movimiento - 35 reps - 4 series',
                    'Incentivo a la Flexibilidad - 6 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        48: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 26,
            details: {
                type: 'CARDIO',
                duration: 26,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 8 min',
                    'S/B Escaleras o Step - 18 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        49: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        50: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 27,
            details: {
                type: 'CARDIO',
                duration: 27,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'S/B Escaleras o Step - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        51: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 27,
            details: {
                type: 'FUERZA',
                duration: 27,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 40 reps - 3 series',
                    'Puente de Glúteos - 35 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        52: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 27,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 27,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 70 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 70 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        53: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 27,
            details: {
                type: 'CARDIO',
                duration: 27,
                exercises: ['Caminata intensa - 27 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        54: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 27,
            details: {
                type: 'FUERZA',
                duration: 27,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 40 reps - 3 series',
                    'Puente de Glúteos - 35 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        55: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 27,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 27,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 70 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 70 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        56: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        57: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 28,
            details: {
                type: 'CARDIO',
                duration: 28,
                exercises: ['Caminata intensa - 28 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        58: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 28,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 28,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 75 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 75 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        59: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 28,
            details: {
                type: 'FUERZA',
                duration: 28,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 40 reps - 3 series',
                    'Puente de Glúteos - 40 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        60: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 28,
            details: {
                type: 'CARDIO',
                duration: 28,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 23 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        61: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 28,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 28,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 75 reps - 4 series',
                    'Vortice pendular - 30 reps - 4 series',
                    'Toque cruzado - 75 reps - 4 series',
                    'Sembrando movimiento - 30 reps - 4 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        62: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 28,
            details: {
                type: 'FUERZA',
                duration: 28,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 40 reps - 3 series',
                    'Puente de Glúteos - 40 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 20 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        63: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        64: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 29,
            details: {
                type: 'CARDIO',
                duration: 29,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 24 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        65: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 29,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 29,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 110 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 110 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        66: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 28,
            details: {
                type: 'FUERZA',
                duration: 28,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 75 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 75 reps - 2 series',
                    'Puente de Glúteos - 75 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        67: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 29,
            details: {
                type: 'CARDIO',
                duration: 29,
                exercises: ['Caminata intensa - 29 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        68: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 29,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 29,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 110 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 110 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        69: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 28,
            details: {
                type: 'FUERZA',
                duration: 28,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 75 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 75 reps - 2 series',
                    'Puente de Glúteos - 75 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        70: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        71: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                exercises: ['Caminata intensa - 30 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        72: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 85 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 85 reps - 2 series',
                    'Puente de Glúteos - 85 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        73: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 110 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 110 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        74: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 85 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 85 reps - 2 series',
                    'Puente de Glúteos - 85 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        75: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 110 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 110 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        76: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 25 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        77: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        78: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 85 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 85 reps - 2 series',
                    'Puente de Glúteos - 85 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        79: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 120 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        80: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 85 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 85 reps - 2 series',
                    'Puente de Glúteos - 85 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        81: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 120 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        82: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 25 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        83: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                exercises: ['Caminata intensa - 30 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        84: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        85: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 3 min',
                    'S/B Escaleras o Step - 27 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        86: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                exercises: ['Caminata intensa - 30 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        87: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 120 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        88: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 85 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 85 reps - 2 series',
                    'Puente de Glúteos - 85 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        }
    },
    FUNCIONAL: {
        1: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                exercises: ['Caminata intensa o trote - 15 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        2: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'DR (Directa/Reversa) - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        3: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 15,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 15,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 2 series',
                    'Vortice pendular - 30 reps - 2 series',
                    'Toque cruzado - 50 reps - 2 series',
                    'Sembrando movimiento - 40 reps - 2 series',
                    'Incentivo a la Flexibilidad - 5 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        4: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 15,
            details: {
                type: 'FUERZA',
                duration: 15,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 30 reps - 2 series',
                    'Flexión Vertical - 20 reps - 2 series',
                    'Activador Zen - 30 reps - 2 series',
                    'Puente de Glúteos - 30 reps - 2 series',
                    'Abdominal Supino - 4 reps - 2 series',
                    'Reductor Cintura x lado - 20 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        5: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 7 min',
                    'S/B Escaleras o Step - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        6: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 15,
            details: {
                type: 'CARDIO',
                duration: 15,
                exercises: ['Caminata intensa o trote - 15 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        7: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        8: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 20,
            details: {
                type: 'CARDIO',
                duration: 20,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'DR (Directa/Reversa) - 15 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        9: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 20,
            details: {
                type: 'FUERZA',
                duration: 20,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 2 series',
                    'Flexión Vertical - 25 reps - 2 series',
                    'Activador Zen - 40 reps - 2 series',
                    'Puente de Glúteos - 40 reps - 2 series',
                    'Abdominal Supino - 5 reps - 2 series',
                    'Reductor Cintura x lado - 30 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        10: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 20,
            details: {
                type: 'CARDIO',
                duration: 20,
                exercises: ['Caminata intensa o trote - 20 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        11: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 20,
            details: {
                type: 'CARDIO',
                duration: 20,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 6 min',
                    'S/B Escaleras o Step - 14 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        12: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 20,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 20,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 50 reps - 3 series',
                    'Vortice pendular - 30 reps - 3 series',
                    'Toque cruzado - 50 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 5 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        13: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 20,
            details: {
                type: 'CARDIO',
                duration: 20,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 6 min',
                    'DR (Directa/Reversa) - 14 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        14: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        15: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                exercises: ['Caminata intensa o trote - 25 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        16: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 80 reps - 3 series',
                    'Vortice pendular - 35 reps - 3 series',
                    'Toque cruzado - 80 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        17: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'DR (Directa/Reversa) - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        18: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FUERZA',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 2 series',
                    'Flexión Vertical - 25 reps - 2 series',
                    'Activador Zen - 50 reps - 2 series',
                    'Puente de Glúteos - 50 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 40 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        19: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        20: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 80 reps - 3 series',
                    'Vortice pendular - 35 reps - 3 series',
                    'Toque cruzado - 80 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        21: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        22: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'DR (Directa/Reversa) - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        23: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 80 reps - 3 series',
                    'Vortice pendular - 35 reps - 3 series',
                    'Toque cruzado - 80 reps - 3 series',
                    'Sembrando movimiento - 40 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        24: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        25: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FUERZA',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 2 series',
                    'Flexión Vertical - 25 reps - 2 series',
                    'Activador Zen - 50 reps - 2 series',
                    'Puente de Glúteos - 50 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 40 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        26: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 25,
            details: {
                type: 'CARDIO',
                duration: 25,
                exercises: ['Caminata intensa o trote - 25 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        27: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 25,
            details: {
                type: 'FUERZA',
                duration: 25,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 2 series',
                    'Flexión Vertical - 30 reps - 2 series',
                    'Activador Zen - 50 reps - 2 series',
                    'Puente de Glúteos - 50 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 40 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        28: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        29: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                exercises: ['Caminata intensa o trote - 30 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        30: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 80 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 80 reps - 4 series',
                    'Sembrando movimiento - 35 reps - 4 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        31: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        32: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 40 reps - 3 series',
                    'Puente de Glúteos - 50 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 25 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        33: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                exercises: ['Caminata intensa o trote - 30 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        34: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 80 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 80 reps - 4 series',
                    'Sembrando movimiento - 35 reps - 4 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        35: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        36: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        37: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 40 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 40 reps - 3 series',
                    'Puente de Glúteos - 50 reps - 3 series',
                    'Abdominal Supino - 4 reps - 3 series',
                    'Reductor Cintura x lado - 25 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        38: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 35,
            details: {
                type: 'CARDIO',
                duration: 35,
                exercises: ['Caminata intensa o trote - 35 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        39: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 100 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        40: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FUERZA',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 50 reps - 3 series',
                    'Puente de Glúteos - 50 reps - 3 series',
                    'Abdominal Supino - 5 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        41: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 100 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        42: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        43: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 35,
            details: {
                type: 'CARDIO',
                duration: 35,
                exercises: ['Caminata intensa o trote - 35 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        44: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FUERZA',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 50 reps - 3 series',
                    'Puente de Glúteos - 50 reps - 3 series',
                    'Abdominal Supino - 5 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        45: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 100 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        46: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FUERZA',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 50 reps - 3 series',
                    'Puente de Glúteos - 50 reps - 3 series',
                    'Abdominal Supino - 5 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        47: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 100 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        48: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 35,
            details: {
                type: 'CARDIO',
                duration: 35,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 25 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        49: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        50: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 35,
            details: {
                type: 'CARDIO',
                duration: 35,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 30 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        51: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FUERZA',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 3 series',
                    'Flexión Vertical - 35 reps - 3 series',
                    'Activador Zen - 50 reps - 3 series',
                    'Puente de Glúteos - 50 reps - 3 series',
                    'Abdominal Supino - 5 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        52: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 100 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        53: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 35,
            details: {
                type: 'CARDIO',
                duration: 35,
                exercises: ['Caminata intensa o trote - 35 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        54: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FUERZA',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 50 reps - 3 series',
                    'Flexión Vertical - 35 reps - 3 series',
                    'Activador Zen - 50 reps - 3 series',
                    'Puente de Glúteos - 50 reps - 3 series',
                    'Abdominal Supino - 5 reps - 3 series',
                    'Reductor Cintura x lado - 30 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        55: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 35,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 35,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 4 series',
                    'Vortice pendular - 35 reps - 4 series',
                    'Toque cruzado - 100 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        56: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        57: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 40,
            details: {
                type: 'CARDIO',
                duration: 40,
                exercises: ['Caminata intensa o trote - 40 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        58: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 40 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        59: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FUERZA',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 100 reps - 2 series',
                    'Flexión Vertical - 50 reps - 2 series',
                    'Activador Zen - 100 reps - 2 series',
                    'Puente de Glúteos - 100 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        60: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 40,
            details: {
                type: 'CARDIO',
                duration: 40,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 35 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        61: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 40 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        62: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FUERZA',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 100 reps - 2 series',
                    'Flexión Vertical - 50 reps - 2 series',
                    'Activador Zen - 100 reps - 2 series',
                    'Puente de Glúteos - 100 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        63: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        64: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 40,
            details: {
                type: 'CARDIO',
                duration: 40,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 35 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        65: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 40 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        66: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FUERZA',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 100 reps - 2 series',
                    'Flexión Vertical - 50 reps - 2 series',
                    'Activador Zen - 100 reps - 2 series',
                    'Puente de Glúteos - 100 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        67: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 40,
            details: {
                type: 'CARDIO',
                duration: 40,
                exercises: ['Caminata intensa o trote - 40 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        68: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 40 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        69: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 40,
            details: {
                type: 'FUERZA',
                duration: 40,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 100 reps - 2 series',
                    'Flexión Vertical - 50 reps - 2 series',
                    'Activador Zen - 100 reps - 2 series',
                    'Puente de Glúteos - 100 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        70: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        71: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                exercises: ['Caminata intensa o trote - 45 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        72: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FUERZA',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 125 reps - 2 series',
                    'Flexión Vertical - 40 reps - 2 series',
                    'Activador Zen - 125 reps - 2 series',
                    'Puente de Glúteos - 125 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        73: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 11 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        74: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FUERZA',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 125 reps - 2 series',
                    'Flexión Vertical - 40 reps - 2 series',
                    'Activador Zen - 125 reps - 2 series',
                    'Puente de Glúteos - 125 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        75: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 11 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        76: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 40 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        77: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        78: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FUERZA',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 125 reps - 2 series',
                    'Flexión Vertical - 40 reps - 2 series',
                    'Activador Zen - 125 reps - 2 series',
                    'Puente de Glúteos - 125 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        79: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 150 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 150 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        80: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FUERZA',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 125 reps - 2 series',
                    'Flexión Vertical - 40 reps - 2 series',
                    'Activador Zen - 125 reps - 2 series',
                    'Puente de Glúteos - 125 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        81: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 150 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 150 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        82: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 40 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        83: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                exercises: ['Caminata intensa o trote - 45 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        84: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        85: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 5 min',
                    'S/B Escaleras o Step - 40 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        86: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                exercises: ['Caminata intensa o trote - 45 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        87: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 150 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 150 reps - 4 series',
                    'Sembrando movimiento - 40 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        88: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FUERZA',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 125 reps - 2 series',
                    'Flexión Vertical - 40 reps - 2 series',
                    'Activador Zen - 125 reps - 2 series',
                    'Puente de Glúteos - 125 reps - 2 series',
                    'Abdominal Supino - 6 reps - 2 series',
                    'Reductor Cintura x lado - 50 reps - 2 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        }
    },
    IDEAL: {
        1: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                exercises: ['Caminata intensa o trote - 30 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        2: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 60 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 60 reps - 3 series',
                    'Sembrando movimiento - 50 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        3: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 20 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        4: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FUERZA',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 60 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 60 reps - 3 series',
                    'Puente de Glúteos - 60 reps - 3 series',
                    'Abdominal Supino - 6 reps - 3 series',
                    'Reductor Cintura x lado - 40 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        5: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 30,
            details: {
                type: 'CARDIO',
                duration: 30,
                exercises: ['Caminata intensa o trote - 30 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        6: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 30,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 30,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 60 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 60 reps - 3 series',
                    'Sembrando movimiento - 50 reps - 3 series',
                    'Incentivo a la Flexibilidad - 7 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        7: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        8: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 33,
            details: {
                type: 'CARDIO',
                duration: 33,
                exercises: ['Caminata intensa o trote - 33 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        9: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 33,
            details: {
                type: 'FUERZA',
                duration: 33,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 60 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 60 reps - 3 series',
                    'Puente de Glúteos - 60 reps - 3 series',
                    'Abdominal Supino - 6 reps - 3 series',
                    'Reductor Cintura x lado - 40 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        10: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 33,
            details: {
                type: 'CARDIO',
                duration: 33,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 23 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        11: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 33,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 33,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 80 reps - 3 series',
                    'Vortice pendular - 40 reps - 3 series',
                    'Toque cruzado - 80 reps - 3 series',
                    'Sembrando movimiento - 50 reps - 3 series',
                    'Incentivo a la Flexibilidad - 8 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        12: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 33,
            details: {
                type: 'CARDIO',
                duration: 33,
                exercises: ['Caminata intensa o trote - 33 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        13: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 33,
            details: {
                type: 'FUERZA',
                duration: 33,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 60 reps - 3 series',
                    'Flexión Vertical - 30 reps - 3 series',
                    'Activador Zen - 60 reps - 3 series',
                    'Puente de Glúteos - 60 reps - 3 series',
                    'Abdominal Supino - 6 reps - 3 series',
                    'Reductor Cintura x lado - 40 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        14: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        15: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 36,
            details: {
                type: 'CARDIO',
                duration: 36,
                exercises: ['Caminata intensa o trote - 36 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        16: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 36,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 36,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 3 series',
                    'Vortice pendular - 45 reps - 3 series',
                    'Toque cruzado - 100 reps - 3 series',
                    'Sembrando movimiento - 50 reps - 3 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        17: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 36,
            details: {
                type: 'CARDIO',
                duration: 36,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 26 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        18: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 36,
            details: {
                type: 'FUERZA',
                duration: 36,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 70 reps - 3 series',
                    'Flexión Vertical - 35 reps - 3 series',
                    'Activador Zen - 70 reps - 3 series',
                    'Puente de Glúteos - 70 reps - 3 series',
                    'Abdominal Supino - 7 reps - 3 series',
                    'Reductor Cintura x lado - 50 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        19: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 36,
            details: {
                type: 'CARDIO',
                duration: 36,
                exercises: ['Caminata intensa o trote - 36 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        20: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 36,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 36,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 3 series',
                    'Vortice pendular - 45 reps - 3 series',
                    'Toque cruzado - 100 reps - 3 series',
                    'Sembrando movimiento - 50 reps - 3 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        21: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        22: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 39,
            details: {
                type: 'CARDIO',
                duration: 39,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 29 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        23: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 39,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 39,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 100 reps - 4 series',
                    'Vortice pendular - 45 reps - 4 series',
                    'Toque cruzado - 100 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 9 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        24: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 39,
            details: {
                type: 'CARDIO',
                duration: 39,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'DR (Directa/Reversa) - 29 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        25: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 39,
            details: {
                type: 'FUERZA',
                duration: 39,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 70 reps - 3 series',
                    'Flexión Vertical - 35 reps - 3 series',
                    'Activador Zen - 70 reps - 3 series',
                    'Puente de Glúteos - 70 reps - 3 series',
                    'Abdominal Supino - 7 reps - 3 series',
                    'Reductor Cintura x lado - 50 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        26: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 39,
            details: {
                type: 'CARDIO',
                duration: 39,
                exercises: ['Caminata intensa o trote - 39 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        27: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 39,
            details: {
                type: 'FUERZA',
                duration: 39,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 70 reps - 3 series',
                    'Flexión Vertical - 35 reps - 3 series',
                    'Activador Zen - 70 reps - 3 series',
                    'Puente de Glúteos - 70 reps - 3 series',
                    'Abdominal Supino - 7 reps - 3 series',
                    'Reductor Cintura x lado - 50 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        28: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        29: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 42,
            details: {
                type: 'CARDIO',
                duration: 42,
                exercises: ['Caminata intensa o trote - 42 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        30: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 42,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 42,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 10 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        31: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 42,
            details: {
                type: 'CARDIO',
                duration: 42,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 32 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        32: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 42,
            details: {
                type: 'FUERZA',
                duration: 42,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 80 reps - 3 series',
                    'Flexión Vertical - 40 reps - 3 series',
                    'Activador Zen - 80 reps - 3 series',
                    'Puente de Glúteos - 80 reps - 3 series',
                    'Abdominal Supino - 8 reps - 3 series',
                    'Reductor Cintura x lado - 60 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        33: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 42,
            details: {
                type: 'CARDIO',
                duration: 42,
                exercises: ['Caminata intensa o trote - 42 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        34: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 42,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 42,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 120 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 120 reps - 4 series',
                    'Sembrando movimiento - 50 reps - 4 series',
                    'Incentivo a la Flexibilidad - 10 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        35: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        36: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 35 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        37: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FUERZA',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 80 reps - 3 series',
                    'Flexión Vertical - 40 reps - 3 series',
                    'Activador Zen - 80 reps - 3 series',
                    'Puente de Glúteos - 80 reps - 3 series',
                    'Abdominal Supino - 8 reps - 3 series',
                    'Reductor Cintura x lado - 60 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        38: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 45,
            details: {
                type: 'CARDIO',
                duration: 45,
                exercises: ['Caminata intensa o trote - 45 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        39: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 140 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 140 reps - 4 series',
                    'Sembrando movimiento - 60 reps - 4 series',
                    'Incentivo a la Flexibilidad - 11 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        40: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FUERZA',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 80 reps - 3 series',
                    'Flexión Vertical - 40 reps - 3 series',
                    'Activador Zen - 80 reps - 3 series',
                    'Puente de Glúteos - 80 reps - 3 series',
                    'Abdominal Supino - 8 reps - 3 series',
                    'Reductor Cintura x lado - 60 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        41: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 45,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 45,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 140 reps - 4 series',
                    'Vortice pendular - 50 reps - 4 series',
                    'Toque cruzado - 140 reps - 4 series',
                    'Sembrando movimiento - 60 reps - 4 series',
                    'Incentivo a la Flexibilidad - 11 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        42: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        43: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 48,
            details: {
                type: 'CARDIO',
                duration: 48,
                exercises: ['Caminata intensa o trote - 48 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        44: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 48,
            details: {
                type: 'FUERZA',
                duration: 48,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 90 reps - 3 series',
                    'Flexión Vertical - 45 reps - 3 series',
                    'Activador Zen - 90 reps - 3 series',
                    'Puente de Glúteos - 90 reps - 3 series',
                    'Abdominal Supino - 9 reps - 3 series',
                    'Reductor Cintura x lado - 70 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        45: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 48,
            details: {
                type: 'CARDIO',
                duration: 48,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 38 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        46: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 48,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 48,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 160 reps - 4 series',
                    'Vortice pendular - 60 reps - 4 series',
                    'Toque cruzado - 160 reps - 4 series',
                    'Sembrando movimiento - 60 reps - 4 series',
                    'Incentivo a la Flexibilidad - 12 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        47: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 48,
            details: {
                type: 'CARDIO',
                duration: 48,
                exercises: ['Caminata intensa o trote - 48 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        48: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 48,
            details: {
                type: 'FUERZA',
                duration: 48,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 90 reps - 3 series',
                    'Flexión Vertical - 45 reps - 3 series',
                    'Activador Zen - 90 reps - 3 series',
                    'Puente de Glúteos - 90 reps - 3 series',
                    'Abdominal Supino - 9 reps - 3 series',
                    'Reductor Cintura x lado - 70 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        49: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        50: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 51,
            details: {
                type: 'CARDIO',
                duration: 51,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 41 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        51: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 51,
            details: {
                type: 'FUERZA',
                duration: 51,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 100 reps - 3 series',
                    'Flexión Vertical - 50 reps - 3 series',
                    'Activador Zen - 100 reps - 3 series',
                    'Puente de Glúteos - 100 reps - 3 series',
                    'Abdominal Supino - 10 reps - 3 series',
                    'Reductor Cintura x lado - 80 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        52: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 51,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 51,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 180 reps - 4 series',
                    'Vortice pendular - 60 reps - 4 series',
                    'Toque cruzado - 180 reps - 4 series',
                    'Sembrando movimiento - 70 reps - 4 series',
                    'Incentivo a la Flexibilidad - 13 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        53: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 51,
            details: {
                type: 'CARDIO',
                duration: 51,
                exercises: ['Caminata intensa o trote - 51 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        54: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 51,
            details: {
                type: 'FUERZA',
                duration: 51,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 100 reps - 3 series',
                    'Flexión Vertical - 50 reps - 3 series',
                    'Activador Zen - 100 reps - 3 series',
                    'Puente de Glúteos - 100 reps - 3 series',
                    'Abdominal Supino - 10 reps - 3 series',
                    'Reductor Cintura x lado - 80 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        55: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 51,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 51,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 180 reps - 4 series',
                    'Vortice pendular - 60 reps - 4 series',
                    'Toque cruzado - 180 reps - 4 series',
                    'Sembrando movimiento - 70 reps - 4 series',
                    'Incentivo a la Flexibilidad - 13 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        56: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        57: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 54,
            details: {
                type: 'CARDIO',
                duration: 54,
                exercises: ['Caminata intensa o trote - 54 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        58: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 54,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 54,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 200 reps - 4 series',
                    'Vortice pendular - 70 reps - 4 series',
                    'Toque cruzado - 200 reps - 4 series',
                    'Sembrando movimiento - 70 reps - 4 series',
                    'Incentivo a la Flexibilidad - 14 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        59: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 54,
            details: {
                type: 'FUERZA',
                duration: 54,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 110 reps - 3 series',
                    'Flexión Vertical - 55 reps - 3 series',
                    'Activador Zen - 110 reps - 3 series',
                    'Puente de Glúteos - 110 reps - 3 series',
                    'Abdominal Supino - 11 reps - 3 series',
                    'Reductor Cintura x lado - 90 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        60: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 54,
            details: {
                type: 'CARDIO',
                duration: 54,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 44 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        61: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 54,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 54,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 200 reps - 4 series',
                    'Vortice pendular - 70 reps - 4 series',
                    'Toque cruzado - 200 reps - 4 series',
                    'Sembrando movimiento - 70 reps - 4 series',
                    'Incentivo a la Flexibilidad - 14 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        62: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 54,
            details: {
                type: 'FUERZA',
                duration: 54,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 110 reps - 3 series',
                    'Flexión Vertical - 55 reps - 3 series',
                    'Activador Zen - 110 reps - 3 series',
                    'Puente de Glúteos - 110 reps - 3 series',
                    'Abdominal Supino - 11 reps - 3 series',
                    'Reductor Cintura x lado - 90 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        63: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        64: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 57,
            details: {
                type: 'CARDIO',
                duration: 57,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 47 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        65: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 57,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 57,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 220 reps - 4 series',
                    'Vortice pendular - 70 reps - 4 series',
                    'Toque cruzado - 220 reps - 4 series',
                    'Sembrando movimiento - 80 reps - 4 series',
                    'Incentivo a la Flexibilidad - 15 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        66: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 57,
            details: {
                type: 'FUERZA',
                duration: 57,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 120 reps - 3 series',
                    'Flexión Vertical - 60 reps - 3 series',
                    'Activador Zen - 120 reps - 3 series',
                    'Puente de Glúteos - 120 reps - 3 series',
                    'Abdominal Supino - 12 reps - 3 series',
                    'Reductor Cintura x lado - 100 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        67: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 57,
            details: {
                type: 'CARDIO',
                duration: 57,
                exercises: ['Caminata intensa o trote - 57 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        68: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 57,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 57,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 220 reps - 4 series',
                    'Vortice pendular - 70 reps - 4 series',
                    'Toque cruzado - 220 reps - 4 series',
                    'Sembrando movimiento - 80 reps - 4 series',
                    'Incentivo a la Flexibilidad - 15 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        69: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 57,
            details: {
                type: 'FUERZA',
                duration: 57,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 120 reps - 3 series',
                    'Flexión Vertical - 60 reps - 3 series',
                    'Activador Zen - 120 reps - 3 series',
                    'Puente de Glúteos - 120 reps - 3 series',
                    'Abdominal Supino - 12 reps - 3 series',
                    'Reductor Cintura x lado - 100 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        70: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        71: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 60,
            details: {
                type: 'CARDIO',
                duration: 60,
                exercises: ['Caminata intensa o trote - 60 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        72: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FUERZA',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 130 reps - 3 series',
                    'Flexión Vertical - 65 reps - 3 series',
                    'Activador Zen - 130 reps - 3 series',
                    'Puente de Glúteos - 130 reps - 3 series',
                    'Abdominal Supino - 13 reps - 3 series',
                    'Reductor Cintura x lado - 110 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        73: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 240 reps - 4 series',
                    'Vortice pendular - 80 reps - 4 series',
                    'Toque cruzado - 240 reps - 4 series',
                    'Sembrando movimiento - 80 reps - 4 series',
                    'Incentivo a la Flexibilidad - 16 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        74: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FUERZA',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 130 reps - 3 series',
                    'Flexión Vertical - 65 reps - 3 series',
                    'Activador Zen - 130 reps - 3 series',
                    'Puente de Glúteos - 130 reps - 3 series',
                    'Abdominal Supino - 13 reps - 3 series',
                    'Reductor Cintura x lado - 110 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        75: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 240 reps - 4 series',
                    'Vortice pendular - 80 reps - 4 series',
                    'Toque cruzado - 240 reps - 4 series',
                    'Sembrando movimiento - 80 reps - 4 series',
                    'Incentivo a la Flexibilidad - 16 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        76: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 60,
            details: {
                type: 'CARDIO',
                duration: 60,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 50 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        77: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        78: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FUERZA',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 130 reps - 3 series',
                    'Flexión Vertical - 65 reps - 3 series',
                    'Activador Zen - 130 reps - 3 series',
                    'Puente de Glúteos - 130 reps - 3 series',
                    'Abdominal Supino - 13 reps - 3 series',
                    'Reductor Cintura x lado - 110 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        79: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 260 reps - 4 series',
                    'Vortice pendular - 80 reps - 4 series',
                    'Toque cruzado - 260 reps - 4 series',
                    'Sembrando movimiento - 90 reps - 4 series',
                    'Incentivo a la Flexibilidad - 16 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        80: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FUERZA',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 130 reps - 3 series',
                    'Flexión Vertical - 65 reps - 3 series',
                    'Activador Zen - 130 reps - 3 series',
                    'Puente de Glúteos - 130 reps - 3 series',
                    'Abdominal Supino - 13 reps - 3 series',
                    'Reductor Cintura x lado - 110 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        81: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 260 reps - 4 series',
                    'Vortice pendular - 80 reps - 4 series',
                    'Toque cruzado - 260 reps - 4 series',
                    'Sembrando movimiento - 90 reps - 4 series',
                    'Incentivo a la Flexibilidad - 16 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        82: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 60,
            details: {
                type: 'CARDIO',
                duration: 60,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 50 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        83: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 60,
            details: {
                type: 'CARDIO',
                duration: 60,
                exercises: ['Caminata intensa o trote - 60 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        84: {
            activity: 'LIBRE',
            warmup: 'na',
            exercise: 'na',
            details: {
                type: 'LIBRE',
                duration: 'na',
                exercises: ['Día libre - Descanso activo']
            }
        },
        85: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 60,
            details: {
                type: 'CARDIO',
                duration: 60,
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Activacion Lateral - 10 min',
                    'S/B Escaleras o Step - 50 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        86: {
            activity: 'CARDIO',
            warmup: 'na',
            exercise: 60,
            details: {
                type: 'CARDIO',
                duration: 60,
                exercises: ['Caminata intensa o trote - 60 min'],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        87: {
            activity: 'FLEXIBILIDAD',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FLEXIBILIDAD',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Aplausos del Colibri - 260 reps - 4 series',
                    'Vortice pendular - 80 reps - 4 series',
                    'Toque cruzado - 260 reps - 4 series',
                    'Sembrando movimiento - 90 reps - 4 series',
                    'Incentivo a la Flexibilidad - 16 min'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        },
        88: {
            activity: 'FUERZA',
            warmup: 3,
            exercise: 60,
            details: {
                type: 'FUERZA',
                duration: 60,
                warmup: 'Precalentamiento: 3 min',
                restBetweenSets: '30 a 60 segs',
                exercises: [
                    'Abandonar la silla - 130 reps - 3 series',
                    'Flexión Vertical - 65 reps - 3 series',
                    'Activador Zen - 130 reps - 3 series',
                    'Puente de Glúteos - 130 reps - 3 series',
                    'Abdominal Supino - 13 reps - 3 series',
                    'Reductor Cintura x lado - 110 reps - 3 series'
                ],
                respiracionConsciente: 'Respiración consciente - 10 min'
            }
        }
    }
};

export const getActivityForDay = (level: string, dayNumber: number) => {
    const levelActivities = TRAINING_ACTIVITIES[level as keyof typeof TRAINING_ACTIVITIES];
    return levelActivities ? levelActivities[dayNumber as keyof typeof levelActivities] : null;
};
