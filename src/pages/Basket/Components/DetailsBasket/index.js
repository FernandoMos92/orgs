import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import TextComponent from '../../../../components/TextComponent/TextComponent';

function DetailsBasket({name, farmName, description, price, logoFarm}) {
  return <>
    <TextComponent style={styles.nameBasket}>{name}</TextComponent>
      <View style={styles.farm}>
        <Image source={logoFarm} style={styles.logoFarm}/>
        <TextComponent style={styles.nameFarm}>{farmName}</TextComponent>
      </View>
      <TextComponent style={styles.description}>{description}</TextComponent>
      <TextComponent style={styles.price}>R$ {price}</TextComponent>
      </>
}

const styles = StyleSheet.create({
  nameBasket: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold"
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  logoFarm: {
    width: 32,
    height: 32
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12
  },
  description:{
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
})

export default DetailsBasket;