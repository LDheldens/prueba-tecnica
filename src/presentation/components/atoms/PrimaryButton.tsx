import { View, Text, Pressable, PressableProps, StyleSheet } from 'react-native'
import React from 'react'
import { golbalStyles } from '../../../theme/theme'

interface Props extends PressableProps {
    onPress:()=>void,
    label:string
}

const PrimaryButton = ({onPress,label,...rest}:Props) => {

    const combinedStyles = StyleSheet.flatten([
        golbalStyles.primaryButton, 
        rest.style, 
      ]);

    return (
        <Pressable onPress={onPress} {...rest} style={combinedStyles}>
            <Text style={golbalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}

export default PrimaryButton