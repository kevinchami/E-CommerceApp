import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import {COLORS} from '../../constants'

const Carousel = () => {
    const slides = [
        "https://hips.hearstapps.com/hmg-prod/images/smart-watches-for-women-1605809538.jpg?resize=1200:*",
        "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
        "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202308281510"
    ]
  return (
    <View style={styles.carouselContainer}>
        <SliderBox images={slides}
          dotColor={COLORS.primary}
          inactiveDotColor={COLORS.secondary}
          ImageComponentStyle = {{borderRadius: 15, width: "92%", marginTop: 15}}
          autoplay
          circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center"
  }
})