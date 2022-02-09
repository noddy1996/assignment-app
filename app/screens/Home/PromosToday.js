import {
    View,
    Text,
    Image,
    FlatList,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Label from '../../components/Label';
import { appColors } from '../../utils/appColors';
import { dummyImg, dummyImg2, dummyImg3 } from '../../utils/common';

export default function PromosToday() {
    const promos = [
        {
            title: 'Barcelona',
            subTitle: 'Attaction & Activities',
            bg: dummyImg,
        },
        {
            title: 'Australia',
            subTitle: 'Attaction & Activities',
            bg: dummyImg2,
        },

        {
            title: 'Barcelona',
            subTitle: 'Attaction & Activities',
            bg: dummyImg3,
        }
    ];
    const _renderItems = ({ item }) => {
        const { title, subTitle, bg } = item;
        return (
            <View>
                <ImageBackground resizeMode="cover" source={{ uri: bg }} style={styles.img}>
                    <View style={styles.content}>
                        <Label
                            text={subTitle}
                            style={{ fontSize: scale(14), color: appColors.white }}
                        />
                        <Label
                            text={title}
                            bold
                            style={{ fontSize: scale(16), color: appColors.white }}
                        />
                        <View style={styles.btn}>
                            <Label text={"Book Now"} style={styles.btnText} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    };
    return (
        <View style={{ paddingVertical: scale(10),marginBottom:scale(20) }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={promos}
                renderItem={_renderItems}
                keyExtractor={(item,key)=>"key"+key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: scale(200),
        height: scale(250),
        borderRadius: scale(5),
        justifyContent: 'flex-end',
        overflow: "hidden",
        marginRight: scale(10)
    },
    content: {
        paddingBottom: scale(10),
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingHorizontal:scale(5)
    },
    btn: {
        backgroundColor: appColors.primary,
        paddingHorizontal: scale(10),
        borderRadius: scale(5),
        paddingVertical: scale(2)
    },
    btnText: {
        fontSize: scale(12),
        color: appColors.white,
    },
});
