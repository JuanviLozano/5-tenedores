import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, Button, Input } from "react-native-elements";

export default function RegisterForm() {

    //Uso de estados para la contraseña
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatePassword, setShowRepeatePassword] = useState(false)

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon 
                        type="material-community" 
                        name="at" 
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                rightIcon={
                    <Icon 
                        type="material-community" 
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder="Repetir contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatePassword ? false : true}
                rightIcon={
                    <Icon 
                        type="material-community" 
                        name={showRepeatePassword ? "eye-off-outline" : "eye-outline"} 
                        iconStyle={styles.iconRight}
                        onPress={() => setShowRepeatePassword(!showRepeatePassword)}
                    />
                }
            />
            <Button
                title="Unirse"
                containerStyle={styles.containerRegister}
                buttonStyle={styles.btnRegister}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    }, 
    inputForm: {
        width: "100%"
    },
    containerRegister: {
        marginTop: 20,
        width: "95%",
    },
    btnRegister: {
        backgroundColor: "#00a680"
    },
    iconRight: {
        color: "#c1c1c1"
    }
});