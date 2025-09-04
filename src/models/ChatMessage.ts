export interface ChatMessage {
    id: number;
    user_id: number;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    created_at: Date;
}

export interface ChatSession {
    id: number;
    user_id: number;
    session_name: string;
    created_at: Date;
    updated_at: Date;
}
