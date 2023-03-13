import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Familia2(props) {
    return (
      <View style={styles.container}>
        <View style={styles.listaFamilia}>
            <View style={styles.icone}>
                <MaterialIcons name="accessible-forward" size={24} color="black" />
                <Text style={styles.texto}>Accessible Forward</Text>
            </View>

            <View style={styles.icone}>
                <MaterialIcons name="airplanemode-on" size={24} color="black" />
                <Text style={styles.texto}>Airplanemode On</Text>
            </View>

            <View style={styles.icone}>
                <MaterialIcons name="airport-shuttle" size={24} color="black" />
                <Text style={styles.texto}>Airport Shuttle</Text>
            </View>

            <View style={styles.icone}>
                <MaterialIcons name="alarm-on" size={24} color="black" />
                <Text style={styles.texto}>Alarm On</Text>
            </View>

            <View style={styles.icone}>
                <MaterialIcons name="analytics" size={24} color="black" />
                <Text style={styles.texto}>Analytics</Text>
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
        backgroundColor: '#b19cd9',
    },
    texto: {
        padding: 10,
    },
});