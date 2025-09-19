import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const ViewNotes = ({ route }) => {
  const perfil = route.params?.perfil;

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Perfil del Estudiante</Text>
      {perfil ? (
        <>
          <Text>Nombre: {perfil.name} {perfil.lastName}</Text>
          <Text>Email: {perfil.email}</Text>
          <Text>Teléfono: {perfil.phone}</Text>
          <Text>Grado: {perfil.grade}</Text>
        </>
      ) : (
        <Text>No hay datos de estudiante</Text>
      )}
    </View>
  );
};

export default ViewNotes;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});