import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

export default DestinationButton = function(props) {
    return (
        <TouchableOpacity onPress={() => { }} style={styles.container}>
            <View style={styles.leftCol}>
                {/*<Text style={{ fontSize: 8 }}>{"\u25A0"}</Text>*/}
                <Ionicons name="md-search" color="#000" size={25} style={{ alignSelf: "center" }}></Ionicons>
            </View>
            <View style={styles.centerCol}>
                <Text style={{fontSize: 21, color: "gray" }}>Where to?</Text>
            </View>
            <View style={styles.rightCol}>
                <Ionicons name="md-car" color="#000" size={25} style={{ alignSelf: "center" }}></Ionicons>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 4,
        position: "absolute",
        flexDirection: "row",
        width: (WIDTH - 40),
        height: 60,
        top : 50,
        left: 20,
        borderRadius: 12,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor : "gray",
        elevation : 7,
        shadowRadius : 12,
        shadowOpacity : 0.5
    },
    leftCol: {
        flex: 1,
        alignItems: "center",
    },
    centerCol: {
        flex: 4,
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: "#ededed"
    }
});