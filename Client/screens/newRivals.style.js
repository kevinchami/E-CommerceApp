import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../constants/index";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.lightWhite
    },
    wrapper:{
        flex:1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow:{
        width: SIZES.width -50,
        marginHorizontal: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        top: SIZES.large,
        zIndex: 999
    },
    heading:{
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        marginLeft: 5
    },
});

export default styles;


