import React from 'react';
import { Box, Typography, Paper, Divider, List, ListItem } from '@mui/material';
const WhatIsF88Page: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%)', py: 6 }}>
      <Paper elevation={8} sx={{ maxWidth: 700, width: '100%', borderRadius: 5, p: { xs: 3, sm: 5 }, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}>
        <Typography variant="h3" align="center" fontWeight={800} color="primary.main" gutterBottom sx={{ letterSpacing: 1 }}>
          ¿QUÉ ES F88?
        </Typography>
        <Divider sx={{ mb: 3, mt: 1 }} />
        <Typography variant="h6" align="center" color="text.secondary" fontWeight={500} mb={3}>
          Un camino de crecimiento y transformación personal, con la <b>FORTALEZA</b> como eje central.
        </Typography>
        <Box sx={{ background: '#f5f7fa', borderRadius: 3, p: 3, mb: 2, boxShadow: '0 2px 8px 0 rgba(31,38,135,0.07)' }}>
          <Typography variant="body1" mb={1}>
            Está diseñado para ayudarte a:
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem disableGutters sx={{ display: 'list-item', pl: 2, fontWeight: 700, fontSize: '1.08rem', listStyleType: 'none' }}>
              <span style={{ fontWeight: 700 }}>Desarrollar tu Fortaleza en cinco dimensiones esenciales:</span>
            </ListItem>
            <List sx={{ pl: 4 }}>
              <ListItem disableGutters sx={{ display: 'list-item', pl: 2, listStyleType: 'none' }}>
                <span role="img" aria-label="Física">💪</span> <b>Física</b>
              </ListItem>
              <ListItem disableGutters sx={{ display: 'list-item', pl: 2, listStyleType: 'none' }}>
                <span role="img" aria-label="Mental">🧠</span> <b>Mental</b>
              </ListItem>
              <ListItem disableGutters sx={{ display: 'list-item', pl: 2, listStyleType: 'none' }}>
                <span role="img" aria-label="Emocional">❤️</span> <b>Emocional</b>
              </ListItem>
              <ListItem disableGutters sx={{ display: 'list-item', pl: 2, listStyleType: 'none' }}>
                <span role="img" aria-label="De Carácter">🛡️</span> <b>De Carácter</b>
              </ListItem>
              <ListItem disableGutters sx={{ display: 'list-item', pl: 2, listStyleType: 'none' }}>
                <span role="img" aria-label="De Voluntad">🔥</span> <b>De Voluntad</b>
              </ListItem>
            </List>
            <ListItem disableGutters sx={{ display: 'list-item', pl: 2, fontWeight: 700, fontSize: '1.08rem', listStyleType: 'none', mt: 1 }}>
              <span style={{ fontWeight: 700 }}>2. Redefinir tu identidad;</span>
            </ListItem>
          </List>
          <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
            ...basado en un <b>nuevo código de creencias</b> que tú mismo elegís adoptar. <i>(alt.)</i>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            ...a partir de <b>nuevos valores y principios</b> que tú eliges <b>VIVIR</b>. <i>(alt.)</i>
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
            F88 comienza con un ciclo de 88 días.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
            No se rinde, no se aprueba: <span style={{ fontWeight: 700, textDecoration: 'underline', color: '#1976d2' }}>se ELIGE !!!</span>
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mt: 2 }}>
            Y al finalizar los primeros 88 días, <b>el camino continúa →</b>: F88 es una comunidad de crecimiento y desarrollo continuo, desafíos personales y expansión <b><u>permanente !!!</u></b>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default WhatIsF88Page;
