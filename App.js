import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

// Importar pantallas
import CreateStudent from './src/Screens/CreateStudent';
import ViewNotes from './src/Screens/ViewNotes';
import CreateTeacher from './src/Screens/CreateTeacher';
import CreateNotes from './src/Screens/CreateNotes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CreateStudent">
          <Stack.Screen 
            name="CreateStudent" 
            component={CreateStudent} 
            options={{ title: 'Crear Estudiante' }}
          />
          <Stack.Screen 
            name="ViewNotes" 
            component={ViewNotes} 
            options={{ title: 'Notas' }}
          />
          <Stack.Screen 
            name="CreateTeacher" 
            component={CreateTeacher} 
            options={{ title: 'Crear Docente' }}
          />
          <Stack.Screen 
            name="CreateNotes" 
            component={CreateNotes} 
            options={{ title: 'Agregar Nota' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}