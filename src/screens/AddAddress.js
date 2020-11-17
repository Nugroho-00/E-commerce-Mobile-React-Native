import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Button, Item, Label, Input } from 'native-base';
import CheckBox from '@react-native-community/checkbox';

export default function AddAddress() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Save address as (ex: home address, office address)</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Recipient's name</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Recipient's telephone number</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Address</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>City</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
          <Item floatingLabel>
                <Label style={styles.text}>Postal code</Label>
                <Input />
              </Item>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body style={styles.picker}>
              <Text style={styles.text}>Primary address</Text>
              <CheckBox />
            </Body>
          </CardItem>
        </Card>
        <Button rounded block success style={styles.button}>
          <Text>save address</Text>
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
    fontSize: 12,
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
