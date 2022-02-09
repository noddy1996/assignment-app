import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mapImg } from '../../utils/common'
import { scale } from 'react-native-size-matters'
import { appColors, shadow } from '../../utils/appColors'
import CustomInput from '../../components/CustomInput'
import Label from '../../components/Label'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function HomeMenu() {
    const items = [
        {
            icon:"calendar",
            label: "Hotel",
        },
        {
            icon: "map-marker",
            label: "Tour",
        },
        {
            icon: "car",
            label: "Car",
        },
        {
            icon: "plane",
            label: "Flight",
        },
        {
            icon: "ship",
            label: "Cruise",
        },
        {
            icon: "bus",
            label: "Bus",
        },
        {
            icon: "star",
            label: "Event",
        },
        {
            icon: "ellipsis-h",
            label: "More",
        },
    ]
    const _renderItems = ({ item }) => {
        const { label, icon } = item
        return (
            <View style={styles.item}>
                <View style={styles.iconWrap}>
                    <FontAwesome name={icon} color={appColors.primary} size={scale(16)}/>
                </View>
                <Label text={label} style={styles.label}/>
            </View>
        )
    }
    return (
        <View>
            <ImageBackground source={{ uri: mapImg }} style={styles.background}>
            </ImageBackground>
            <View style={styles.menu}>
                <CustomInput placeholder={"What're you looking for?"} />
                <FlatList
                data={items}
                // horizontal
                numColumns={4}
                renderItem={_renderItems}
                keyExtractor={(item, key) => "key" + key}
            />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: scale(150)
    },
    menu: {
        backgroundColor: appColors.white,
        ...shadow,
        borderRadius: scale(10),
        padding: scale(5),
        marginHorizontal: scale(20),
        top:-100
    },
    item:{
        flex:1,
        alignItems:"center",
        marginVertical:scale(5)
    },
    label:{
        color:appColors.gray,
        fontSize:scale(12)
    },
    iconWrap:{
        backgroundColor:appColors.offWhite,
        height:scale(35),
        width:scale(35),
        borderRadius:scale(35/2),
        justifyContent:"center",
        alignItems:"center"
    }
})