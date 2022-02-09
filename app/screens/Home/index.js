import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView, StatusBar,  } from 'react-native'
import {  } from 'react-native-gesture-handler';
import { appColors } from '../../utils/appColors';
import Label from '../../components/Label'; 
import { scale } from 'react-native-size-matters';
import Container from '../../components/Container';
import PromosToday from './PromosToday';
import HomeMenu from './HomeMenu';

export default function Home() {
 

  const Heading = ({label, labelRight})=>{
    return <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Label text={label } style={{fontSize:scale(18), lineHeight:scale(28)}} /> 
      <Label text={ labelRight} style={{fontSize:scale(12), lineHeight:scale(20), color:appColors.primary}} /> 
    </View>
  }
    return (
        <Container isScrollable  style={styles.container}> 
          <HomeMenu/>
        <View style={{marginHorizontal:scale(10),top:scale(-80)}}>
        <View>
          <Label text="Promos Today" medium style={{fontSize:20}}/>
           <PromosToday/>
        </View>        
        <View>
          <Label text="Tours" medium style={{fontSize:20}}/>
           <PromosToday/>
        </View>
        </View>        
      </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal:0
    },
    header: {
      backgroundColor: appColors.primary,
      alignItems: 'center',
      borderBottomWidth: 12,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 25,
      padding: 20,
      margin: 20,
      textAlign:'center'
    },
    TitleText: {
        fontSize: 25,
        // padding: 20,
        marginVertical: 20,
      },
    scrollContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    
  });