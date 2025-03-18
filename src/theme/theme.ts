import { StyleSheet } from "react-native";

export const colors = {
    primary:'#07294D',
    secondary:'#FFC600',
    tertiary:'#021D3A',
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
        backgroundColor:colors.secondary,
        borderRadius:5,
        padding:10,
        width:'100%',
        alignItems:'center',
    },
    SecondaryButtonButton:{
        backgroundColor:colors.tertiary,
        borderRadius:20,
        paddingHorizontal:30,
        paddingVertical:8,
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
        textAlign:'center' 
    },
    title2: {
      fontSize: 24, 
      fontWeight: '600',
      color: colors.dark, 
      marginBottom: 12,
      textAlign:'center' 
    },
    title3: {
      fontSize: 18,
      fontWeight: 'normal', 
      color: colors.dark, 
      marginBottom: 8,
      textAlign:'center' 
    },
    fontBold:{
        fontWeight:'bold'
    },
    containerButons:{
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        padding:10,
        borderTopWidth:1,
        borderColor:colors.primary
      }

})