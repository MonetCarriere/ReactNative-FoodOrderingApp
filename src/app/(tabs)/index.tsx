import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors'
import products from '../../../assets/data/products'

const product = products[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  image:{
    width: '100%',
    height: 100,
  },
    title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  }
});
