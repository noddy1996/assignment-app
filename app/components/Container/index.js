import React from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {scale} from 'react-native-size-matters';
import { appColors } from '../../utils/appColors';
import CustomHeader from '../CustomHeader/CustomHeader';

export default function Container({children, isScrollable,style,showHeader,title,onBack,}) {
  return (
    <SafeAreaView style={styles.container} >
       {showHeader&& <CustomHeader title={title} onBack={onBack}/>}
        {isScrollable ? (
          <ScrollView showsVerticalScrollIndicator={false} >
            <View style={[styles.innerView,style]}>{children}</View>
          </ScrollView>
        ) : (
          <View style={[styles.innerView,style]}>{children}</View>
        )}
       
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColors.white,
    // paddingTop:20
  },
  innerView: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
});
