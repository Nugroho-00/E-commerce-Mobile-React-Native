import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Text, Button } from 'native-base';

import SuccessImage from '../assets/images/success.png';

export default function Success({ navigation }) {
  function goToHome() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <View style={styles.content}>
        <Image source={SuccessImage} />
        <Text style={styles.header}> Success!</Text>
        <Text style={styles.text}>Your order will be delivered soon. Thank you for choosing our app!</Text>
      </View>
      <View style={styles.floatingBar}>
        <Button
          rounded
          block
          success
          onPress={goToHome}>
          <Text>continue shopping</Text>
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  floatingBar: {
    padding: 16,
    backgroundColor: '#ffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 34,
    marginTop: 50,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    width: 220,
    textAlign: 'justify',
  },
});
