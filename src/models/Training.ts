export interface F88Assessment {
    id: number;
    user_id: number;
    question1: number; // 1, 2, or 3
    question2: number; // 1, 2, or 3
    question3: number; // 1, 2, or 3
    level: 'INICIAL' | 'FUNCIONAL' | 'IDEAL';
    rest_day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    start_date: Date;
    created_at: Date;
}

export interface TrainingDay {
    id: number;
    user_id: number;
    assessment_id: number;
    day_number: number; // 1-88
    scheduled_date: Date;
    is_rest_day: boolean;
    is_completed: boolean;
    completed_at?: Date;
    notes?: string;
    created_at: Date;
    updated_at: Date;
}

export interface TrainingProgress {
    id: number;
    user_id: number;
    assessment_id: number;
    total_days: number;
    completed_days: number;
    current_streak: number;
    longest_streak: number;
    last_completed_date?: Date;
    created_at: Date;
    updated_at: Date;
}
