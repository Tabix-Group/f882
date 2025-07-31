import React from 'react';
import { Box, Typography } from '@mui/material';
import { Paper, Divider } from '@mui/material';

const WhatIsF88Page: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%)', py: 6 }}>
      <Paper elevation={8} sx={{ maxWidth: 650, width: '100%', borderRadius: 5, p: { xs: 3, sm: 5 }, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}>
        <Typography variant="h3" align="center" fontWeight={800} color="primary.main" gutterBottom sx={{ letterSpacing: 1 }}>
          ¿QUÉ ES F88?
        </Typography>
        <Divider sx={{ mb: 3, mt: 1 }} />
        <Typography variant="h6" align="center" color="text.secondary" fontWeight={500} mb={3}>
          Un camino de crecimiento y transformación personal, con la <b>FORTALEZA</b> como eje central.
        </Typography>
        <Box component="pre" sx={{
          background: '#f5f7fa',
          borderRadius: 3,
          fontFamily: 'inherit',
          fontSize: '1.13rem',
          lineHeight: 1.8,
          letterSpacing: 0.1,
          p: 3,
          color: 'text.primary',
          whiteSpace: 'pre-wrap',
          mb: 2,
          boxShadow: '0 2px 8px 0 rgba(31,38,135,0.07)'
        }}>
{`Está diseñado para ayudarte a:
	Desarrollar tu Fortaleza en cinco dimensiones esenciales;
	💪 Física
	🧠 Mental
	❤️ Emocional
	🛡️ De Carácter
	🔥 De Voluntad
	2. Redefinir tu identidad;
...basado en un nuevo código de creencias que tú mismo elegís adoptar. (alt.)
...a partir de nuevos valores y principios que tú eliges VIVIR. (alt.)
F88 comienza con un ciclo de 88 días.
No se rinde, no se aprueba: se ELIGE !!!
Y al finalizar los primeros 88 días, el camino continúa →: F88 es una comunidad de crecimiento y desarrollo continuo, desafíos personales y expansión permanente !!!`}
        </Box>
      </Paper>
    </Box>
  );
};

export default WhatIsF88Page;
