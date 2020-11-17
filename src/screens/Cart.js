import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Icon, Button } from 'native-base';

import Item from '../assets/images/Laptop.jpg';

export default function Cart({ navigation }) {
  function checkout() {
    navigation.navigate('Checkout');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>My Bag</Text>
        {Array(3).fill(
          <Card style={styles.card}>
            <CardItem cardBody style={styles.cardImage}>
              <Image source={Item} style={styles.image} />
            </CardItem>
            <CardItem style={styles.cardContent}>
              <Body>
                <View style={[styles.cardHeader, styles.contentMargin]}>
                  <View>
                    <Text style={styles.cardTitle}>Laptop Gaming New Series</Text>
                    <Text style={styles.cardSubtitle}>Color: Green </Text>
                    <Text style={styles.cardSubtitle}>Conditions: New </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Icon
                        type="MaterialIcons"
                        name="delete"
                        style={styles.delete}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.cardHeader}>
                  <View style={styles.card}>
                    <TouchableOpacity style={styles.counterButton}>
                      <Icon
                        type="MaterialIcons"
                        name="remove"
                        style={styles.counterIcon}
                      />
                    </TouchableOpacity>
                    <Text style={styles.counterText}>
                      {'  '}1{'  '}
                    </Text>
                    <TouchableOpacity style={styles.counterButton}>
                      <Icon
                        type="MaterialIcons"
                        name="add"
                        style={styles.counterIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.counterText, styles.priceText]}>
                    $200.000
                  </Text>
                </View>
              </Body>
            </CardItem>
          </Card>,
        )}
      </Content>
      <View style={styles.floatingBar}>
        <View style={styles.cardHeader}>
          <Text style={styles.counterText}>Total</Text>
          <Text style={styles.totalPrice}>$00.00</Text>
        </View>
        <Button
          rounded
          block
          success
          style={styles.floatingButton}
          onPress={checkout}>
          <Text>Checkout</Text>
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 105,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '30%',
  },
  cardContent: {
    width: '70%',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delete: {
    color: 'grey',
    fontSize: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
  },
  counterButton: {
    height: 36,
    width: 36,
    backgroundColor: '#ffff',
    elevation: 2,
    borderRadius: 100,
  },
  counterIcon: {
    alignSelf: 'center',
    paddingTop: 4,
  },
  counterText: {
    fontSize: 14,
  },
  priceText: {
    color: 'green',
    fontWeight: 'bold',
  },
  contentMargin: {
    marginBottom: 6,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  floatingBar: {
    padding: 16,
    backgroundColor: '#ffff',
  },
  floatingButton: {
    marginTop: 16,
  },
});
