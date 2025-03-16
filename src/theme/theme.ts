import { StyleSheet } from "react-native";

export const colors = {
    primary:'#07294D',
    secondary:'#FFC600',
    tertiary:'#3a0ca3',
    success:'#8B008B',
    warning:'#fca311',
    danger:'#e71d36',
    dark:'#22223b',
    background:'#fff'
}

export const golbalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:colors.background
    },
    primaryButton:{
        backgroundColor:colors.primary,
        borderRadius:5,
        padding:10,
        width:'100%',
        alignItems:'center',
    },
    buttonText:{
        color:colors.background,
        fontSize:18
    },
    title1: {
        fontSize: 32, 
        fontWeight: 'bold', 
        color: colors.dark, 
        marginBottom: 16, 
      },
      title2: {
        fontSize: 24, 
        fontWeight: '600',
        color: colors.dark, 
        marginBottom: 12, 
      },
      title3: {
        fontSize: 18,
        fontWeight: 'normal', 
        color: colors.dark, 
        marginBottom: 8, 
      },
})