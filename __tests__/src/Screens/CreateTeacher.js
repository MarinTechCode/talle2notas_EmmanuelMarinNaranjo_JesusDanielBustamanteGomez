import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const CreateTeacher = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Pantalla Crear Docente</Text>
    </View>
  );
};

export default CreateTeacher;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});