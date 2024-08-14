import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const MoviesSelectScreen = ({ navigation }) => {
  const [selectedMoviesGenres, setSelectedMoviesGenres] = useState([]);

  const movieOptions = [
    'Acción', 'Comedia', 'Drama', 'Ciencia Ficción', 'Terror',
    'Romance', 'Documental', 'Animación', 'Aventura', 'Musical',
  ];

  const handleSelection = (option) => {
    if (selectedMoviesGenres.includes(option)) {
      setSelectedMoviesGenres(selectedMoviesGenres.filter(item => item !== option));
    } else {
      setSelectedMoviesGenres([...selectedMoviesGenres, option]);
    }
  };

  const handleSave = () => {
    console.log('Géneros de películas seleccionados:', selectedMoviesGenres);
    navigation.navigate('Editar perfil');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {movieOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedMoviesGenres.includes(option) && styles.selectedButton,
            ]}
            onPress={() => handleSelection(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedMoviesGenres.includes(option) && styles.selectedText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
      textAlign: 'center',
    },
    scrollContainer: {
      alignItems: 'center',
    },
    optionButton: {
      backgroundColor: '#fff',
      padding: 15,
      marginVertical: 5,
      borderRadius: 8,
      width: '80%',
      alignItems: 'center',
    },
    selectedButton: {
      backgroundColor: '#4A90E2',
    },
    optionText: {
      fontSize: 18,
      color: '#333',
    },
    selectedText: {
      color: '#fff',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    roundButton: {
      backgroundColor: '#4A90E2',
      padding: 20,
      borderRadius: 50,
      alignItems: 'center',
      width: 100,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
export default MoviesSelectScreen;
