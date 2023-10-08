import React from 'react';
import { Paper, Typography } from '@mui/material';

function OutputComponent({ responseText }) {
  return (
    // Utilisation du composant Paper pour obtenir un effet d'ombre et un fond distinct.
    // Le style sx est utilisé pour appliquer des styles directs, notamment pour le padding, la marge et la couleur d'arrière-plan.
    <Paper 
      elevation={3} 
      sx={{ 
        padding: '20px', 
        mt: 3, 
        mx: '10%', 
        // Utilisation du thème pour définir la couleur d'arrière-plan pour une meilleure compatibilité avec différents thèmes.
        backgroundColor: (theme) => theme.palette.background.paper, 
        color: 'grey' 
      }}
    >
      {/* Titre pour indiquer que c'est une zone de réponse */}
      <Typography variant="h6" gutterBottom color="textSecondary">
        Réponse :
      </Typography>
      
      {/* Affichage du texte de réponse.
           Le texte est directement lié à la prop 'responseText'.
           La variante "body1" est utilisée pour un style de texte standard. */}
      <Typography variant="body1" color="textPrimary">
        {responseText}
      </Typography>
    </Paper>
  );
}

export default OutputComponent;


