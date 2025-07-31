
import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider, Chip, useTheme } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import WhatshotIcon from '@mui/icons-material/Whatshot';


const WhatIsF88Page: React.FC = () => {
  const theme = useTheme();
  return (
    <Box maxWidth={700} mx="auto" mt={6} px={2}>
      <Card elevation={6} sx={{ borderRadius: 4, background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)` }}>
        <CardContent>
          <Typography variant="h3" align="center" fontWeight={700} color="primary.main" gutterBottom>
            ¿QUÉ ES F88?
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" mb={3}>
            Un camino de crecimiento y transformación personal, con la <b>FORTALEZA</b> como eje central.
          </Typography>
          <Divider sx={{ my: 2 }}>
            <Chip label="¿Para qué está diseñado?" color="primary" />
          </Divider>
          <Typography variant="body1" mb={2}>
            Está diseñado para ayudarte a:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><FitnessCenterIcon color="primary" /></ListItemIcon>
              <ListItemText primary={<b>Desarrollar tu Fortaleza en cinco dimensiones esenciales:</b>} />
            </ListItem>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem>
                <ListItemIcon><FitnessCenterIcon sx={{ color: '#1976d2' }} /></ListItemIcon>
                <ListItemText primary={<span><b>Física</b> <span role="img" aria-label="Física">💪</span></span>} />
              </ListItem>
              <ListItem>
                <ListItemIcon><PsychologyIcon sx={{ color: '#512da8' }} /></ListItemIcon>
                <ListItemText primary={<span><b>Mental</b> <span role="img" aria-label="Mental">🧠</span></span>} />
              </ListItem>
              <ListItem>
                <ListItemIcon><FavoriteIcon sx={{ color: '#d32f2f' }} /></ListItemIcon>
                <ListItemText primary={<span><b>Emocional</b> <span role="img" aria-label="Emocional">❤️</span></span>} />
              </ListItem>
              <ListItem>
                <ListItemIcon><SecurityIcon sx={{ color: '#388e3c' }} /></ListItemIcon>
                <ListItemText primary={<span><b>De Carácter</b> <span role="img" aria-label="Carácter">🛡️</span></span>} />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatshotIcon sx={{ color: '#ff9800' }} /></ListItemIcon>
                <ListItemText primary={<span><b>De Voluntad</b> <span role="img" aria-label="Voluntad">🔥</span></span>} />
              </ListItem>
            </List>
            <ListItem sx={{ mt: 2 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText
                primary={<b>Redefinir tu identidad:</b>}
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      ...basado en un nuevo código de creencias que tú mismo eliges adoptar. <i>(alt.)</i><br />
                      ...a partir de nuevos valores y principios que tú eliges <b>VIVIR</b>. <i>(alt.)</i>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
          <Divider sx={{ my: 3 }}>
            <Chip label="¿Cómo funciona?" color="secondary" />
          </Divider>
          <Typography variant="body1" align="center" mb={2}>
            <b>F88 comienza con un ciclo de 88 días.</b>
          </Typography>
          <Typography variant="body1" align="center" color="primary" fontWeight={600}>
            No se rinde, no se aprueba: <span style={{ textTransform: 'uppercase' }}>¡se ELIGE!</span>
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mt={2}>
            Y al finalizar los primeros 88 días, el camino continúa →<br />
            <b>F88 es una comunidad de crecimiento y desarrollo continuo, desafíos personales y expansión permanente</b> <span role="img" aria-label="expansión">🚀</span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WhatIsF88Page;
