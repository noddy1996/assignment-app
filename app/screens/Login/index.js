import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Container from '../../components/Container';
import Label from '../../components/Label';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { scale } from 'react-native-size-matters';
import ReduxWrapper from '../../redux/ReduxWrapper';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors } from '../../utils/appColors';

function index({ navigation, setLogin$ }) {
  const [password, setPassword] = useState()
  const [Id, setId] = useState()

  const checkEmpty = () => {
    if (!Id) {
      return "ID"
    }
    if (!password) {
      return "Password"
    }
  }
  const onSignIn = () => {
    const checkIsEmpty = checkEmpty()
    if (checkIsEmpty) {
      return AlertHelper.show("error", `Please enter your ${checkIsEmpty}`)
    }
    setLogin$()
    AlertHelper.show("success", `Login Success`)
    navigation?.navigate("Home")
  }

  return (
    <Container style={styles.container}
      showHeader={true}
      title={"Sign In"}
      onBack={() => navigation.goBack()}>
      <CustomInput placeholder={"ID"} onChangeText={(text) => setId(text)} />
      <CustomInput placeholder={"Password"} onChangeText={(text) => setPassword(text)} secureTextEntry />
      <CustomButton onPress={onSignIn} label={"Sign In"} labelAddationProps={{ bold: true }} style={{ width: "100%" }} />
      <Pressable style={styles.forgot}>
        <Label text={"Forgot your password?"} style={{ color: appColors.gray }} />
      </Pressable>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:20
  },
  forgot: {
    paddingVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default ReduxWrapper(index)