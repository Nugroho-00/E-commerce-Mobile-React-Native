import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Item, Label, Input, Button, Thumbnail, DatePicker,} from 'native-base';
import { Picker } from '@react-native-picker/picker';

import User from '../assets/images/orang.png';

export default function UpdateProfile() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <View style={styles.uploadImage}>
          <TouchableOpacity>
            <Thumbnail large source={User} />
          </TouchableOpacity>
        </View>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Full name</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Email</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Phone number</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body style={styles.picker}>
              <Text style={styles.text}>Gender</Text>
              <Picker style={styles.pickerSize}>
                <Picker.Item label="Laki - Laki" />
                <Picker.Item label="Perempuan" />
              </Picker>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body style={styles.picker}>
              <Text style={styles.text}>Date of birth</Text>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={'en'}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Select date"
              />
            </Body>
          </CardItem>
        </Card>
        <Button rounded block success style={styles.button}>
          <Text>save profile</Text>
        </Button>
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
  },
  text: {
    fontSize: 14,
  },
  card: {
    marginBottom: 16,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
  uploadImage: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerSize: {
    height: 24,
    width: 100,
  },
});
