import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import CustomButton from '../../components/CustomButton'
import { appColors } from '../../utils/appColors'
import Label from '../../components/Label'
import IntroCarasoul from '../../components/IntroCarasoul'

export default function Welcome({navigation}) {
  return (
    <Container>
      <IntroCarasoul/>
         <CustomButton
         label={"Login with Facebook"}
         style={{backgroundColor:appColors.fb}}
         />
         <CustomButton
         label={"Sign In"}
         onPress={()=>navigation.navigate("Login")}
         />
         <View style={styles.fdRow}>
            <Label text={"Haven't registred yet?"} style={{color:appColors.gray}}/>
            <Label text={"Join Now"} style={{color:appColors.primary}}/>
         </View>
    </Container>
  )
}

const styles = StyleSheet.create({
    fdRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})