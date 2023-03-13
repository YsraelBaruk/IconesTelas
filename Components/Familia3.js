import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Familia2(props) {
    return (
      <View style={styles.container}>
        <View style={styles.listaFamilia}>
            <View style={styles.icone}>
                <AntDesign name="infocirlceo" size={24} color="black" />
                <Text style={styles.texto}>Infocirlceo</Text>
            </View>

            <View style={styles.icone}>
                <AntDesign name="check" size={24} color="black" />
                <Text style={styles.texto}>Check</Text>
            </View>

            <View style={styles.icone}>
                <AntDesign name="customerservice" size={24} color="black" />
                <Text style={styles.texto}>Customerservice</Text>
            </View>

            <View style={styles.icone}>
                <AntDesign name="question" size={24} color="black" />
                <Text style={styles.texto}>Question</Text>
            </View>

            <View style={styles.icone}>
                <AntDesign name="creditcard" size={24} color="black" />
                <Text style={styles.texto}>Creditcard</Text>
            </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listaFamilia: {
        width: '90%',
    },
    icone: {
        width: '90%',
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderRadius: 10,
        backgroundColor: 'lightpink',
    },
    texto: {
        padding: 10,
    },
});