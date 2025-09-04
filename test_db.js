const { Pool } = require('pg');
const pool = new Pool({
    host: 'switchyard.proxy.rlwy.net',
    port: 32400,
    user: 'postgres',
    password: 'AItuAiXwZNxqwGUIyspjFswKPrdVzpCu',
    database: 'railway'
});

async function test() {
    try {
        const result = await pool.query('SELECT COUNT(*) as total_days FROM training_days WHERE user_id = 53');
        console.log('Total de días en BD:', result.rows[0].total_days);

        const days = await pool.query('SELECT day_number, scheduled_date, is_completed FROM training_days WHERE user_id = 53 ORDER BY day_number LIMIT 10');
        console.log('Primeros 10 días:', days.rows);

        const assessment = await pool.query('SELECT start_date, rest_day FROM f88_assessments WHERE user_id = 53');
        console.log('Assessment info:', assessment.rows[0]);

        pool.end();
    } catch (err) {
        console.error('Error:', err);
        pool.end();
    }
}
test();
