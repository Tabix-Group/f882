const { Pool } = require('pg');
const pool = new Pool({
    host: 'switchyard.proxy.rlwy.net',
    port: 32400,
    user: 'postgres',
    password: 'AItuAiXwZNxqwGUIyspjFswKPrdVzpCu',
    database: 'railway'
});

async function checkData() {
    try {
        // Verificar datos del usuario
        const assessment = await pool.query('SELECT id, start_date, rest_day, level FROM f88_assessments WHERE user_id = 53');
        console.log('Assessment:', assessment.rows[0]);

        const progress = await pool.query('SELECT * FROM training_progress WHERE user_id = 53');
        console.log('Progress:', progress.rows[0]);

        const days = await pool.query('SELECT COUNT(*) as total, MIN(scheduled_date) as start, MAX(scheduled_date) as end FROM training_days WHERE user_id = 53');
        console.log('Training days count:', days.rows[0]);

        // Verificar algunos días específicos
        const sampleDays = await pool.query('SELECT day_number, scheduled_date, is_rest_day, is_completed FROM training_days WHERE user_id = 53 ORDER BY day_number LIMIT 5');
        console.log('Sample days:', sampleDays.rows);

        pool.end();
    } catch (err) {
        console.error('Error:', err);
        pool.end();
    }
}
checkData();
