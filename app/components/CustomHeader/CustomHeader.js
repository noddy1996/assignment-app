import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { appColors } from '../../utils/appColors';
import Label from '../Label';

export default function CustomHeader({title,onBack,}) {
  console.log({title});
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        <Ionicons name={"arrow-back"} size={30} color={appColors.primary}/>
        </Pressable>
        <Label text={title} style={styles.label}/>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:5,
    paddingTop:20
  },
  label:{
    flex:1,
    textAlign:"center",
    color:appColors.gray
  }
});
