import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest() {
    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image 
                source={require("../../../assets/img/user-guest (1).jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil de 5 Tenedores</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    }
});