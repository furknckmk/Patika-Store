/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet,ScrollView} from 'react-native';
import StoreCard from './components/StoreCard';
import patikastore_data from './patikastore_data.json';

function App() {
   const renderItemss = ({item}) => <StoreCard products={item}/>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
   <FlatList
        numColumns={2}
        data ={patikastore_data}
        renderItem ={renderItemss}
        keyExtractor={item => item.id.toString}
      />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: '#fff',
paddingTop: 5 ,},
    title: {fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'left',
    color: 'purple'},
});

export default App;
