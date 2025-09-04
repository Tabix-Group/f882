import pool from '../config/db';
import fs from 'fs';
import path from 'path';

export const initializeDatabase = async () => {
    try {
        console.log('🔄 Inicializando base de datos...');

        // Leer el archivo SQL
        const sqlPath = path.join(__dirname, '../db_init.sql');
        const sqlContent = fs.readFileSync(sqlPath, 'utf8');

        // Ejecutar el SQL
        await pool.query(sqlContent);

        console.log('✅ Base de datos inicializada correctamente');
    } catch (error) {
        console.error('❌ Error al inicializar la base de datos:', error);
        throw error;
    }
};
