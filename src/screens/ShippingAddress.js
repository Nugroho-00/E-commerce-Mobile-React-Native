/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Button,} from 'native-base';

export default function ShippingAddress({ navigation }) {
  function addAddress() {
    navigation.navigate('Add Shipping Address');
  }

  function updateAddress() {
    navigation.navigate('Update Shipping Address');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>Shipping address</Text>
        {Array(2).fill(
          <Card style={styles.card}>
            <CardItem>
              <Body>
                <View style={styles.cardHeader}>
                  <TouchableOpacity>
                    <Text style={[styles.text, styles.bold]}>
                    Jhon Doe || 082328467193
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={updateAddress}>
                    <Text style={[styles.text, styles.bold, styles.link]}>
                      Update
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>
                  Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                  Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                  16] Sokaraja, Kab. Banyumas, 53181
                </Text>
              </Body>
            </CardItem>
          </Card>,
        )}
        <Button
          bordered
          rounded
          block
          dark
          style={styles.button}
          onPress={addAddress}>
          <Text>add new address</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
  cardHeader: {
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
  link: {
    color: '#DB3022',
  },
  button: {
    marginTop: 16,
  },
});
