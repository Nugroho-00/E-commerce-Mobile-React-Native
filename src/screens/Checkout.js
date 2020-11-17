import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Button } from 'native-base';
import CheckBox from '@react-native-community/checkbox';

import Logo1 from '../assets/images/indomaret.png';
import Logo2 from '../assets/images/alfamart.png';
import Logo3 from '../assets/images/gopay.png';

export default function Checkout({ navigation }) {
  function submitOrder() {
    navigation.navigate('Success');
  }

  function changeShippingAddress() {
    navigation.navigate('Shipping Address');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>Shipping address</Text>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <View style={styles.floatingText}>
                <Text style={[styles.text, styles.bold]}>Jhon Doe || 082328467193</Text>
                <TouchableOpacity onPress={changeShippingAddress}>
                  <Text style={[styles.text, styles.bold, styles.link]}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.text}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</Text>
            </Body>
          </CardItem>
        </Card>
        <Text style={styles.header}>Payment</Text>
        <View style={styles.floatingText}>
          <View style={styles.paymentLogo}>
            <Card style={styles.cardLogo}>
              <Image source={Logo1} style={styles.logo} />
            </Card>
            <Text style={[styles.text, styles.bold]}>Indomart</Text>
          </View>
          <CheckBox />
        </View>

        <View style={styles.floatingText}>
          <View style={styles.paymentLogo}>
            <Card style={styles.cardLogo}>
              <Image source={Logo2} style={styles.logo} />
            </Card>
            <Text style={[styles.text, styles.bold]}>Alfamart</Text>
          </View>
          <CheckBox />
        </View>

        <View style={styles.floatingText}>
          <View style={styles.paymentLogo}>
            <Card style={styles.cardLogo}>
              <Image source={Logo3} style={styles.logo} />
            </Card>
            <Text style={[styles.text, styles.bold]}>Gopay</Text>
          </View>
          <CheckBox />
        </View>
      </Content>
      <View style={styles.floatingBar}>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Order</Text>
          <Text style={styles.totalPrice}>$00.00</Text>
        </View>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.totalPrice}>$00.00</Text>
        </View>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Summary</Text>
          <Text style={styles.totalPrice}>$00.00</Text>
        </View>
        <Button
          rounded
          block
          success
          style={styles.floatingButton}
          onPress={submitOrder}>
          <Text>submit order</Text>
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
  floatingButton: {
    marginTop: 8,
  },
  floatingText: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 50,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
  cardLogo: {
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    marginRight: 16,
  },
  link: {
    color: '#DB3022',
  },
  paymentLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 30,
    resizeMode: 'center',
  },
});
