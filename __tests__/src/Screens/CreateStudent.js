import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert, Image, StyleSheet } from 'react-native';
import { Card, TextInput, Button, Text } from 'react-native-paper';

const CreateStudent = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      name.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== '' &&
      grade.trim() !== '';
    setFormValid(isValid);
  }, [name, lastName, email, phone, grade]);

  const handleSave = () => {
    if (!formValid) {
      Alert.alert('Error', 'Todos los campos son necesarios', [{ text: 'OK' }]);
      return;
    }

    const profileUser = { name, lastName, email, phone, grade };
    navigation.navigate('ViewNotes', { perfil: profileUser });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.title}>Crear un estudiante</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
            left={<TextInput.Icon icon="account" />}
            mode="outlined"
          />
          <TextInput
            label="Apellido"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            left={<TextInput.Icon icon="account-outline" />}
            mode="outlined"
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            left={<TextInput.Icon icon="email" />}
            mode="outlined"
          />
          <TextInput
            label="Teléfono"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            left={<TextInput.Icon icon="phone" />}
            mode="outlined"
          />
          <TextInput
            label="Grado"
            value={grade}
            onChangeText={setGrade}
            style={styles.input}
            left={<TextInput.Icon icon="school" />}
            mode="outlined"
          />

          <Button
            mode="contained"
            onPress={handleSave}
            style={styles.button}
            disabled={!formValid}
          >
            Guardar Perfil
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default CreateStudent;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 10 },
  input: { marginBottom: 12 },
  button: { marginTop: 16 }
});