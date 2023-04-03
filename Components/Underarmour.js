import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

export default function Underarmour(props) {
    return (
        <ScrollView>
            <ImageBackground style={styles.container} source={{uri: 'https://c.pxhere.com/photos/4c/84/cracked_mud_dry_texture_earth_nature_soil_land-768112.jpg!d'}}>
                <ImageBackground style={styles.card} source={{uri: 'https://underarmourbr.vteximg.com.br/arquivos/ids/282261-1200-1200/3025522-800-01.jpg?v=638077734719730000'}}>
                    <Text style={styles.card_tiutlo}>Under Armour Hovr Phantom 3 S</Text>
                    <Text style={styles.card_valor}>R$ 1299,99</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://static.netshoes.com.br/produtos/tenis-de-treino-masculino-under-armour-hovr-mega-2/06/39W-7579-006/39W-7579-006_zoom1.jpg?ts=1680270117'}}>
                    <Text style={styles.card_tiutlo}>Under Armour Hovr Mega 2</Text>
                    <Text style={styles.card_valor}>R$ 1099,99</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://itapua.vteximg.com.br/arquivos/ids/1773108-1000-1000/image-a0db5f466b4441a6b40d78039c5346d4.jpg?v=638119788487770000'}}>
                    <Text style={styles.card_tiutlo}>Under Armour Heat Seeker</Text>
                    <Text style={styles.card_valor}>R$ 699,99</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://imgmarketplace.lojasrenner.com.br/20001/1171/7010701075347/7510701847591/1.jpeg'}}>
                    <Text style={styles.card_tiutlo}>Under Armour Charged First</Text>
                    <Text style={styles.card_valor}>R$ 299,99</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://static.netshoes.com.br/produtos/tenis-under-armour-flow-velociti-wind-2-amarelo-e-laranja/10/39W-3081-110/39W-3081-110_zoom1.jpg?ts=1658239019'}}>
                    <Text style={styles.card_tiutlo}>Under Armour Flow Velociti Wind 2</Text>
                    <Text style={styles.card_valor}>R$ 1199,99</Text>
                </ImageBackground>
            </ImageBackground>
        </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#ff000017',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    card: {
        width: 360,
        height: 250,
        marginTop: 20,
        marginBottom: 20,
    },
    card_tiutlo: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#0f0f0fdb',
        paddingLeft:10,
        color:'#FFF'
    },
      card_valor: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#0f0f0fdb',
        color:'green',
        marginTop: 197,
        textAlign:'center'
    },
});