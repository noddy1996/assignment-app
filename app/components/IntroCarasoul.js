import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React,{useState} from 'react'
import Carousel , { Pagination }from 'react-native-snap-carousel';
import { scale } from 'react-native-size-matters';
import Label from './Label';
import { dummyImg } from '../utils/common';
import { appColors } from '../utils/appColors';

const{width,height}=Dimensions.get("window")
export default function IntroCarasoul() {
    const [activeIndex, setActiveIndex] = useState(0)

  const  carouselItems= [
        {
            icon:"Item 1",
            text: "Picking Your Travel Destination",
        },
        {
            icon:"Item 2",
            text: "Picking Your Travel Destination",
        },
        {
            icon:"Item 3",
            text: "Picking Your Travel Destination",
        },
        {
            icon:"Item 4",
            text: "Picking Your Travel Destination",
        }
      ]
    const  _renderItem=({item,index})=>{
        return (
          <View style={{
              borderRadius: 5,
              alignItems:"center"
               }}>
            <Image source={{uri:dummyImg}} style={styles.img}/>
            <Label text={item.text}/>
          </View>

        )
    }
    const PaginationDots = () => {
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  backgroundColor: appColors.primary
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
                  backgroundColor:appColors.gray
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }
  return (
    <View style={{marginVertical:scale(30)}}>
      <Carousel
                  layout={"default"}
                 
                  data={carouselItems}
                  sliderWidth={width- scale(40)}
                  itemWidth={width- scale(40)}
                  renderItem={_renderItem}
                  onSnapToItem={(index) => setActiveIndex(index) }
                  />
                  <PaginationDots/>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        height:scale(180),
        width:scale(180),
        borderRadius:scale(180/2),
        marginVertical:scale(20)
    }
})