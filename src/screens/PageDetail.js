import React, { useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity,} from 'react-native';
import { Container, Content, Text, Button, Icon, Card, CardItem, Body,} from 'native-base';


import Product from '../assets/images/Laptop.jpg';

export default function PageDetail({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: 'Category Name' });
  }, [navigation]);

  function getItemDetail() {
    navigation.navigate('Item Detail');
  }

  function goToCart() {
    navigation.navigate('Cart');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <ScrollView horizontal>
          {Array(5).fill(
            <Image source={Product} style={styles.image} />
          )}
        </ScrollView>

        <View style={styles.itemInfo}>
          <Text style={[styles.header, styles.price]}>$200.000</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.header}>Laptop Gaming New Series</Text>
          <Text style={styles.subtitle}>Valorant Tech</Text>
          <View style={styles.rating}>
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Text style={styles.subtitle}> (10) </Text>
          </View>
        </View>
        <View>
          <Text style={styles.bold}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel molestie orci.
          </Text>
        </View>

        <Text style={styles.relevantItem}>You can also like this</Text>
        <ScrollView horizontal>
          {Array(5).fill(
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={Product} style={styles.relevantImage} />
              </CardItem>
              <CardItem>
                <Body>
                  <TouchableOpacity onPress={getItemDetail}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>Laptop Gaming New Series</Text>
                  </TouchableOpacity>
                  <Text style={[styles.price, styles.description, styles.bold]}>$200.000</Text>
                  <Text style={styles.subtitle}>Valorant Tech</Text>
                  <View style={styles.rating}>
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Text style={styles.subtitle}> (10) </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
          )}
        </ScrollView>
      </Content>
      <View style={styles.floatingBar}>
        <Button rounded block success onPress={goToCart}>
          <Text>add to cart</Text>
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
  image: {
    height: 315,
    width: 315,
    resizeMode: 'cover',
    marginRight: 16,
    borderRadius: 12,
  },
  itemInfo: {
    marginTop: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
  subtitle: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 16,
    color: 'orange',
  },
  relevantItem: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16,
  },
  card: {
    marginRight: 8,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    width: 150,
  },
  relevantImage: {
    resizeMode: 'cover',
    width: 150,
    height: 185,
  },
  product: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
