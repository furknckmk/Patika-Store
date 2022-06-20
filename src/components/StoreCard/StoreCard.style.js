/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

export default  StyleSheet.create({
container: {backgroundColor: '#eceff1', flex:1,padding:15, margin:10},
image: {height: Dimensions.get('window').height / 4,
width: '100%',
resizeMode: 'contain',
borderRadius: 10,
},
innerContainer: {padding: 5},
title: {fontWeight: '700', fontSize:17},
price: {marginTop: 5,color: '#333333',
fontWeight: 'bold',
fontSize: 17},
inStock: {color: 'red', marginTop: 5, textTransform: 'uppercase',fontWeight: 'bold',fontSize: 17},
});
