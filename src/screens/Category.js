import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Container, Content, Text, Button, Card, CardItem, Body} from 'native-base';

import Category from '../assets/images/laptop11.jpg';

export default function Categori({navigation}) {
  function getCategory() {
    navigation.navigate('Item');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Button
          rounded
          block
          success
          style={styles.button}
          onPress={getCategory}>
          <Text>View All Product</Text>
        </Button>
        <Text style={styles.header}>Choose category</Text>
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <TouchableOpacity onPress={getCategory}>
                  <Text style={styles.categoryText}>Laptop</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
            <CardItem cardBody style={styles.cardItem}>
              <Image source={Category} style={styles.image} />
            </CardItem>
        </Card>
        
        <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <TouchableOpacity onPress={getCategory}>
                  <Text style={styles.categoryText}>Handphone</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
            <CardItem cardBody style={styles.cardItem}>
              <Image source={Category} style={styles.image} />
            </CardItem>
          </Card>
        
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <TouchableOpacity onPress={getCategory}>
                  <Text style={styles.categoryText}>Dekstop-PC</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
            <CardItem cardBody style={styles.cardItem}>
              <Image source={Category} style={styles.image} />
            </CardItem>
          </Card>      
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 14,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    marginBottom: 16,
    marginTop: 0,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardItem: {
    width: '50%',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 100,
  },
});
