import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Switch, Item, Label, Input,} from 'native-base';

export default function Settings({ navigation }) {
  function updatePassword() {
    navigation.navigate('Update Password');
  }

  function updateProfile() {
    navigation.navigate('Update Profile');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>Settings</Text>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.subHeader}>Personal Information</Text>
          <TouchableOpacity onPress={updateProfile}>
            <Text style={styles.text}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Full name</Label>
                <Input  />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Date of birth</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.subHeader}>Password</Text>
          <TouchableOpacity onPress={updatePassword}>
            <Text style={styles.text}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Password</Label>
                <Input secureTextEntry />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Text style={[styles.subHeader, styles.marginBottom]}>Notifications</Text>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.text}>Sales</Text>
          <Switch />
        </View>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.text}>New arrivals</Text>
          <Switch />
        </View>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.text}>Delivery status changes</Text>
          <Switch />
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
  marginBottom: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 24,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
});
