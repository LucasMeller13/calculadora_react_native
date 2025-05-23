import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MatrixCalculator from './matrix';


export default function MainCalculatorView(){
    const [display, setDisplay] = useState('')

    const handlePress = (label) => {
        if (label === '='){
            try{
                setDisplay(eval(display).toString())
            } catch {
                setDisplay('Error')
            }
        }else if (label === 'C'){
            setDisplay('')
        }else{
            setDisplay(display + label)
        }
    }

    return(
        <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.display}>{display}</Text>
        <MatrixCalculator onButtonPress={handlePress} />
      </View>
        </PaperProvider>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  display: {
    fontSize: 38,
    textAlign: 'right',
    margin: 16,
    minHeight: 60,
    color: '#212121',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 1,
  },
});