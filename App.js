import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';
import { Provider } from 'react-redux';
import BudgetEntryScreen from './screens/BudgetEntryScreen';
import BudgetEntyListScreen from './screens/BudgetEntryListScreen';
import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
          <Stack.Screen name="BudgetEntryList" component={BudgetEntyListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

    
  


