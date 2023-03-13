import { StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function Familia2(props) {
    return (
      <View style={styles.container}>
        <View style={styles.listaFamilia}>
            <View style={styles.icone}>
                <Fontisto name="discord" size={24} color="black" />
                <Text style={styles.texto}>Discord</Text>
            </View>

            <View style={styles.icone}>
                <Fontisto name="atom" size={24} color="black" />
                <Text style={styles.texto}>Atom</Text>
            </View>

            <View style={styles.icone}>
                <Fontisto name="electronjs" size={24} color="black" />
                <Text style={styles.texto}>Electronjs</Text>
            </View>

            <View style={styles.icone}>
                <Fontisto name="gitlab" size={24} color="black" />
                <Text style={styles.texto}>Gitlab</Text>
            </View>

            <View style={styles.icone}>
                <Fontisto name="jenkins" size={24} color="black" />
                <Text style={styles.texto}>Jenkins</Text>
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
        backgroundColor: 'lightyellow',
    },
    texto: {
        padding: 10,
    },
});