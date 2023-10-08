import React, { useState } from 'react';
import axios from 'axios';
import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent';
import { Container, Typography, CssBaseline } from '@mui/material';

function App() {

  // États locaux pour stocker le texte entré par l'utilisateur et la réponse obtenue de l'API.

  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  // Fonction pour gérer la soumission du texte et obtenir une réponse de l'API.

  const handleSubmit = async () => {
    try {

      // Faire une requête POST à l'API avec le texte entré par l'utilisateur.
      
      const response = await axios.post('http://localhost:5000/api/chat', { text: inputText });
      
      // Mettre à jour l'état avec la réponse obtenue.
      setResponseText(response.data.response);
    } catch (error) {
      // Gestion des erreurs : affichage dans la console et mise à jour de l'état avec un message d'erreur.
      console.error("Erreur lors de l'appel API:", error);
      setResponseText("Une erreur s'est produite lors de la récupération de la réponse.");
    }
  };

  return (
    // Conteneur principal pour l'application
    <Container component="main" maxWidth="md">
      {/* Réinitialisation des styles pour assurer la cohérence sur différents navigateurs */}
      <CssBaseline />
      
      {/* Titre de l'application */}
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        SayItWhole
      </Typography>
      
      {/* Composant d'entrée : permet à l'utilisateur d'entrer du texte et de le soumettre */}
      <InputComponent inputText={inputText} setInputText={setInputText} handleSubmit={handleSubmit} />
      
      {/* Composant de sortie : affiche la réponse obtenue de l'API */}
      <OutputComponent responseText={responseText} />
    </Container>
  );
}

export default App;