import { StyleSheet, Text, View } from "react-native";
import { colors, golbalStyles } from "../../../theme/theme";

interface Props {
    label:string,
    value?:string
}

const DetailRow = ({ label, value='' }:Props) => {
    return (
      <View style={styles.detailRow}>
        <Text style={[styles.texts, { color: '#fff' }]}>{label}: </Text>
        <Text 
          style={[styles.texts, { color: colors.secondary, flexShrink: 1 }]}
          numberOfLines={2} 
        >
          {value}
        </Text>
      </View>
    );
};

export default DetailRow

const styles = StyleSheet.create({
    detailRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    texts:{
        ...golbalStyles.title2,
        textAlign:'left'
      }
})