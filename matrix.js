import * as React from 'react-native';
import ButtonsCalculator from './buttons';
import { View, StyleSheet } from 'react-native';

const botoes = [
    ['7','8','9','*'],
    ['4','5','6','/'],
    ['1','2','3','-'],
    ['0','C','=','+'],
]

export default function MatrixCalculator({onButtonPress}){
    return (
        <View style={styles.pad}>
            {botoes.map((row, rowIndex) => (
                <View style={styles.row} key={rowIndex}>
                    {row.map((label) => (
                        <ButtonsCalculator
                            key={label}
                            text={label}
                            onPress={onButtonPress}
                            style={isNaN(label) && label !== '.' ? styles.operator : null}
                        />
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    pad:{
        margin:16,
        justifyContent:'center'
    },
    row:{
        flexDirection: 'row',
        marginBottom: 8
    },
    operator:{
        backgroundColor: '#ff9800'
    }
})