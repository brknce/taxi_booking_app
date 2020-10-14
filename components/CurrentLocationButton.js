import React from 'react';
import { StyleSheet, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default DestinationButton = function (props) {
    //if props.cb is passed, use it. If not, console.log() when cb() is called.
    const cb = props.cb ? props.cb : () => console.log("sadasd")
    //if props.bottom is passed, use it. If not, set bottom to 65.
    const bottom = props.bottom ? props.bottom : 65;
    return (
        <View style={[styles.container, { top: HEIGHT - bottom }]}>
            <MaterialIcons
                name="my-location"
                color="#000"
                size={25}
                onPress={() => {cb()}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: "absolute",
        width: 45,
        height: 45,
        backgroundColor: "#fff",
        left: WIDTH - 70,
        borderRadius: 50,
        shadowColor: "#000",
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: "space-around",
        alignItems: "center"
    }
});