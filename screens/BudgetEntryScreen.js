import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from '../redux/actions';

const BudgetEntryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const handleSave = () => {
    const budgetEntry = {
      itemName,
      plannedAmount: parseFloat(plannedAmount),
      actualAmount: parseFloat(actualAmount),
    };

    dispatch(addBudgetEntry(budgetEntry));
    // Clear input fields
    setItemName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <View>
      <TextInput
        placeholder="Name of the item"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        placeholder="Planned amount"
        keyboardType="numeric"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
      />
      <TextInput
        placeholder="Actual amount"
        keyboardType="numeric"
        value={actualAmount}
        onChangeText={setActualAmount}
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Show items" onPress={() => navigation.navigate('BudgetEntryList')} />
    </View>
  );
};

export default BudgetEntryScreen;
