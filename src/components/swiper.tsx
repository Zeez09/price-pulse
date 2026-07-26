import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");
const  carouselWidth = width - 32;

const images = [
    require("../../assets/images/semovita.jpg"),
    require("../../assets/images/pringles.jpeg"),
];


export default function Swiper() {
    return (
        <Carousel 
        width={carouselWidth}
        loop={true}
        autoPlay={true}
        autoPlayInterval={3000}
        height={100}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({item}) => (
            <View 
            style={{
                flex: 1,
                borderRadius: 12,
                overflow: "hidden",
            }}
            >
            <Image 
            source={item}
            style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                
                
            }}
            resizeMode="cover"
            />
            </View>
        )}
        />
        

    )

}


const styles = StyleSheet.create({

})