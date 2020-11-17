import React from 'react';
import { StyleSheet, Image, ScrollView, View, TouchableOpacity, } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Icon } from 'native-base';

import Product from '../assets/images/Laptop.jpg';
import Header from '../assets/images/header.png';

export default function Home({ navigation }) {
  function viewCategory() {
    navigation.navigate('Item');
  }

  function getItemDetail() {
    navigation.navigate('Item Detail');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
      <View style={styles.headerWrapper}>
          <Image style={styles.header1} source={Header} />
            <Text style={styles.headerText}>Street clothes</Text>
          </View>  
        <View style={styles.header}>                    
          <View>
            <Text style={styles.title}>New</Text>
            <Text style={styles.subtitle}>You’ve never seen it before!</Text>
          </View>
          <TouchableOpacity onPress={viewCategory}>
            <Text style={styles.subtitle}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {Array(8).fill(
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={Product} style={styles.image} />
              </CardItem>
              <CardItem>
                <Body>
                  <TouchableOpacity onPress={getItemDetail}>
                  <View style={styles.rating}>
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Text style={styles.subtitle}> (10) </Text>
                    </View>
                    <Text style={styles.subtitle}>Valorant Tech</Text>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>Laptop Gaming New Series</Text>
                  </TouchableOpacity>
                  <Text style={styles.price}>$200.000</Text>                               
                </Body>
              </CardItem>
            </Card>
          )}
        </ScrollView>

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Popular</Text>
            <Text style={styles.subtitle}>Find clothes that are trending recently!</Text>
          </View>
          <TouchableOpacity onPress={viewCategory}>
            <Text style={styles.subtitle}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
        {Array(8).fill(
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={Product} style={styles.image} />
              </CardItem>
              <CardItem>
                <Body>
                  <TouchableOpacity onPress={getItemDetail}>
                  <View style={styles.rating}>
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Text style={styles.subtitle}> (10) </Text>
                    </View>
                    <Text style={styles.subtitle}>Valorant Tech</Text>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>Laptop Gaming New Series</Text>
                  </TouchableOpacity>
                  <Text style={styles.price}>$200.000</Text>                               
                </Body>
              </CardItem>
            </Card>
          )}
        </ScrollView>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
  },
  subtitle: {
    fontSize: 12,
  },
  card: {
    marginTop: 22,
    marginBottom: 35,
    marginRight: 8,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    width: 150,
  },
  image: {
    resizeMode: 'cover',
    width: 150,
    height: 185,
  },
  product: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'green',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 16,
    color: 'orange',
  },
  header1: {
    width: '100%',
  },
  headerWrapper: {
    position: 'relative',
  },
  headerText: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    left: 20,
    bottom: 20,
  },
});
