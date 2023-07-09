import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

const BudgetEntryListScreen = () => {
  const budgetEntryList = useSelector(state => state.budgetEntryList)|| [];

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>Name: {item.itemName}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Budget Entry List
      </Text>
      <FlatList
        data={budgetEntryList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default BudgetEntryListScreen;

