import pool from './config/db';
import fs from 'fs';
import path from 'path';

const runMigrations = async () => {
    try {
        console.log('🚀 Iniciando migraciones de base de datos...');

        // Leer el archivo SQL
        const sqlPath = path.join(__dirname, '../db_init.sql');
        const sqlContent = fs.readFileSync(sqlPath, 'utf8');

        // Ejecutar las sentencias SQL
        await pool.query(sqlContent);

        console.log('✅ Migraciones completadas exitosamente');
        console.log('📋 Tablas creadas:');
        console.log('  - users (existente)');
        console.log('  - chat_sessions (nueva)');
        console.log('  - chat_messages (nueva)');
        console.log('  - Índices de rendimiento');

    } catch (error) {
        console.error('❌ Error en migraciones:', error);
    } finally {
        await pool.end();
    }
};

runMigrations();
