import { StyleSheet, Text, View } from 'react-native';
import { Zocial } from '@expo/vector-icons';

export default function Familia1(props) {
    return (
      <View style={styles.container}>
        <View style={styles.listaFamilia}>

            <View style={styles.icone}>
                <Zocial name="acrobat" size={24} color="black" />
                <Text style={styles.texto}>Acrobat</Text>
            </View>
            <View style={styles.icone}>
                <Zocial name="amazon" size={24} color="black" />
                <Text style={styles.texto}>Amazon</Text>
            </View>
            <View style={styles.icone}>
                <Zocial name="android" size={24} color="black" />
                <Text style={styles.texto}>Android</Text>
            </View>
            <View style={styles.icone}>
                <Zocial name="angellist" size={24} color="black" />
                <Text style={styles.texto}>Angellist</Text>
            </View>
            <View style={styles.icone}>
                <Zocial name="appstore" size={24} color="black" />
                <Text style={styles.texto}>Appstore</Text>
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
        backgroundColor: 'lightgreen',
    },
    texto: {
        padding: 10,
    },
});