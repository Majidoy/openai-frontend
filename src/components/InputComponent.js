import React from 'react';
import { Button, TextField, Box } from '@mui/material';

function InputComponent({ inputText, setInputText, handleSubmit }) {
  // Gère le changement de texte dans le champ de saisie
  const handleInputChange = (event) => {
    // Mise à jour de l'état du texte avec la nouvelle valeur saisie
    setInputText(event.target.value);
  };

  return (
    // Conteneur principal centré avec des marges 
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3, mb: 3, mx: '10%' }}>
      
      {/* Champ de saisie pour l'utilisateur 
           - "outlined" donne une bordure claire autour du champ.
           - "multiline" permet d'entrer plusieurs lignes de texte.
           - La valeur et le gestionnaire de changement assurent une liaison bidirectionnelle avec l'état inputText.
      */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        rows={4}
        value={inputText}
        onChange={handleInputChange}
        label="Entrez votre texte ici..."
        color="secondary"
      />
      
      {/* Bouton pour soumettre le texte 
           - Déclenche la fonction de soumission passée en tant que props.
           - Esthétiquement accordé avec une largeur de 50% pour un meilleur aspect visuel.
      */}
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
        sx={{ mt: 2, width: '50%', fontSize: '1.1rem' }}
      >
        Envoyer
      </Button>
    </Box>
  );
}

export default InputComponent;