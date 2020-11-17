import React, { UseEffect } from 'react';
import {Image, View} from 'react-native';
import {StyleSheet} from 'react-native';

import logo from '../assets/images/shopingTas.png';

export default function SplashScreen({ navigation }) {
   
  UseEffect(() => {
    setTimeout(() => {
      navigation.replace('Main')
    }, 4000)
  })

    return (
        <View style={style.parent}>
          <View style={style.logo}>
            <Image style={style.img} source={logo} />
          </View>
        </View>
      );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  img: {
    width: 70,
    resizeMode: 'contain',
  },
  content: {
    width: '80%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginBtn: {
    borderRadius: 25,
    backgroundColor: 'green',
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  login: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  signupBtn: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
    backgroundColor: 'grey',
  },
  signup: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
