import { StyleSheet, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function Familia2(props) {
    return (
      <View style={styles.container}>
        <View style={styles.listaFamilia}>
            <View style={styles.icone}>
                <Octicons name="accessibility" size={24} color="black" />
                <Text style={styles.texto}>Accessibility</Text>
            </View>

            <View style={styles.icone}>
                <Octicons name="alert" size={24} color="black" />
                <Text style={styles.texto}>Alert</Text>
            </View>

            <View style={styles.icone}>
                <Octicons name="bell" size={24} color="black" />
                <Text style={styles.texto}>Bell</Text>
            </View>

            <View style={styles.icone}>
                <Octicons name="beaker" size={24} color="black" />
                <Text style={styles.texto}>Beaker</Text>
            </View>

            <View style={styles.icone}>
                <Octicons name="book" size={24} color="black" />
                <Text style={styles.texto}>Book</Text>
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
        backgroundColor: 'lightblue',
    },
    texto: {
        padding: 10,
    },
});