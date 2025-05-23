import { Button } from "react-native-paper";
import { View, StyleSheet } from 'react-native';

export default function ButtonsCalculator({text, onPress, style, ...props}){
    return (
        <Button
            mode='contained'
            onPress={() => {
                console.log('Button pressed:', text);
                onPress(text);
            }}
            style={[styles.button, style]}
            labelStyle={styles.label}
            {...props}
        >
            {text}
        </Button>
    )
}

const styles = StyleSheet.create({
    button:{
        flex: 1,
        margin: 5,
        height: 60,
        justifyContent: 'center'
    },
    label:{
        fontSize:22
    }
})