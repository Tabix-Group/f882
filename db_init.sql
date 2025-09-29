CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    birthdate TEXT NOT NULL,
    gender TEXT NOT NULL,
    country TEXT NOT NULL
);

-- Tabla para sesiones de chat
CREATE TABLE IF NOT EXISTS chat_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    session_name VARCHAR(255) DEFAULT 'Chat con Jordan',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para mensajes del chat
CREATE TABLE IF NOT EXISTS chat_messages (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES chat_sessions (id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant')),
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para mejorar rendimiento
CREATE INDEX IF NOT EXISTS idx_chat_sessions_user_id ON chat_sessions (user_id);

CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages (session_id);

CREATE INDEX IF NOT EXISTS idx_chat_messages_user_id ON chat_messages (user_id);

CREATE INDEX IF NOT EXISTS idx_chat_messages_timestamp ON chat_messages (timestamp);

-- Tabla para evaluaciones F88
CREATE TABLE IF NOT EXISTS f88_assessments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    question1 INTEGER NOT NULL CHECK (question1 IN (1, 2, 3)),
    question2 INTEGER NOT NULL CHECK (question2 IN (1, 2, 3)),
    question3 INTEGER NOT NULL CHECK (question3 IN (1, 2, 3)),
    level VARCHAR(20) NOT NULL CHECK (
        level IN (
            'INICIAL',
            'FUNCIONAL',
            'IDEAL'
        )
    ),
    rest_day VARCHAR(20) NOT NULL CHECK (
        rest_day IN (
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        )
    ),
    start_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id) -- Un usuario solo puede tener una evaluación
);

-- Tabla para días de entrenamiento
CREATE TABLE IF NOT EXISTS training_days (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    assessment_id INTEGER REFERENCES f88_assessments (id) ON DELETE CASCADE,
    day_number INTEGER NOT NULL CHECK (
        day_number >= 1
        AND day_number <= 88
    ),
    scheduled_date DATE NOT NULL,
    is_rest_day BOOLEAN DEFAULT FALSE,
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, day_number) -- Un usuario solo puede tener un día específico
);

-- Tabla para progreso general del entrenamiento
CREATE TABLE IF NOT EXISTS training_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    assessment_id INTEGER REFERENCES f88_assessments (id) ON DELETE CASCADE,
    total_days INTEGER DEFAULT 88,
    completed_days INTEGER DEFAULT 0,
    current_streak INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    last_completed_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id) -- Un usuario solo puede tener un registro de progreso
);

-- Índices adicionales para el sistema de entrenamiento
CREATE INDEX IF NOT EXISTS idx_f88_assessments_user_id ON f88_assessments (user_id);

CREATE INDEX IF NOT EXISTS idx_training_days_user_id ON training_days (user_id);

CREATE INDEX IF NOT EXISTS idx_training_days_assessment_id ON training_days (assessment_id);

CREATE INDEX IF NOT EXISTS idx_training_days_scheduled_date ON training_days (scheduled_date);

CREATE INDEX IF NOT EXISTS idx_training_progress_user_id ON training_progress (user_id);

-- Tabla para highlights del libro
CREATE TABLE IF NOT EXISTS book_highlights (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índice para highlights
CREATE INDEX IF NOT EXISTS idx_book_highlights_user_id ON book_highlights (user_id);