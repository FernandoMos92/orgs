import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import TextComponent from '../../../../components/TextComponent/TextComponent';

import topImage from './../../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

const pictureDimensions = {
  'height': 578,
  'width': 768
};

/* height: 578 / 768 * width 
  578 é a altura da imagem que importamos,
  768 é sua largura
*/

function HeaderComponent({title}) {
  return( 
  <>
    <Image source={topImage} style={styles.top}/>
    <TextComponent style={styles.title}>{title}</TextComponent>
  </>)
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: pictureDimensions.height / pictureDimensions.width * width,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    position: "absolute",
    textAlign: "center",
    padding: 16
  },
})

export default HeaderComponent;