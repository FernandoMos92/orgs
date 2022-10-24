import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import TextComponent from '../../components/TextComponent/TextComponent';
import HeaderComponent from './Components/Header';
import DetailsBasket from './Components/DetailsBasket';

function Basket({top, details}) {

  const [fontLoaded] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });


  if(!fontLoaded) {
    return (
      <View>
          <TextComponent>Carregando...</TextComponent>
      </View>
    )
  }

  return <>
    <HeaderComponent  {...top}/>
    <View style={style.basket}>
      <DetailsBasket {...details}/>
    </View>
  </>
}

const style = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,

  }
})

export default Basket;