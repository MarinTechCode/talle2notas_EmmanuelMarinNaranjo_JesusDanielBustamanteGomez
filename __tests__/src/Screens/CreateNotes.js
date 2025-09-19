
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const CreateNotes = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Pantalla Agregar Nota</Text>
    </View>
  );
};

export default CreateNotes;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});