import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer:{
        flex:1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow:"hidden",
    },
    image:{
        aspectRatio:1,
        resizeMode: 'cover'
    },
    details:{
        padding:SIZES.small
    },
    title:{
        fontFamily:"bold",
        fontSize: SIZES.large,
        marginBottom: 2
    },
    supplier:{
        fontFamily:"regular",
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price:{
        fontFamily:"bold",
        fontSize: SIZES.medium,
    },
    addBtn:{
        position:"absolute",
        bottom: SIZES.xSmall,
        right: SIZES.xSmall
    }
});

export default styles;