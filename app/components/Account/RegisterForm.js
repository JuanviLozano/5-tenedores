import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, Button, Input } from "react-native-elements";
import { validateEmail } from "../../utils/validations";

export default function RegisterForm() {

    //Uso de estados para la contraseña
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatePassword, setShowRepeatePassword] = useState(false);
    // Almacenar datos del formulario
    const [formData, setFormData] = useState(defaultFormValue())

    const onSubmit = () => {
        console.log(validateEmail(formData.email))
    }

    const onChange = (e, type) => {
        // setFormData({ [type]: e.nativeEvent.text })
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                onChange={e => onChange(e, "email")}
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
                onChange={e => onChange(e, "password")}
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
                onChange={e => onChange(e, "repeatPassword")}
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
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValue() {
    return {
        email: "",
        password: "",
        repeatPassword: ""
    }
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