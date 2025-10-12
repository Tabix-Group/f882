const fs = require('fs');

const filePath = '/home/hernan/proyectos/f882/frontend/src/utils/trainingActivities.ts';

let content = fs.readFileSync(filePath, 'utf8');

// Add videos to CARDIO days with 'Activacion Lateral'

content = content.replace(
    /('Activacion Lateral - \d+ min',\s*'DR \(Directa\/Reversa\) - \d+ min'\s*])/g,
    `$1,
                videos: {
                    'Activacion Lateral': 'https://www.youtube.com/embed/Y_PMm6qVE5E',
                    'DR (Directa/Reversa)': 'https://www.youtube.com/embed/fvf-tc8qQcY'
                }`
);

// For days with only 'Activacion Lateral'

content = content.replace(
    /('Activacion Lateral - \d+ min',\s*'S\/B Escaleras o Step - \d+ min'\s*])/g,
    `$1,
                videos: {
                    'Activacion Lateral': 'https://www.youtube.com/embed/Y_PMm6qVE5E'
                }`
);

// For FLEXIBILIDAD days, update 'Aplausos del Colibri' and 'Incentivo a la Flexibilidad'

content = content.replace(
    /(videos:\s*\{[^}]*\})|(\s*respiracionConsciente:)/g,
    (match, videos, resp) => {
        if (resp && content.includes("'Aplausos del Colibri'")) {
            return `,
                videos: {
                    'Aplausos del Colibri': 'https://www.youtube.com/embed/FydOu-ETNwk',
                    'Incentivo a la Flexibilidad': 'https://www.youtube.com/embed/XPBJchZhoZ8'
                }${resp}`;
        }
        return match;
    }
);

// This is rough, but let's try.

fs.writeFileSync(filePath, content);