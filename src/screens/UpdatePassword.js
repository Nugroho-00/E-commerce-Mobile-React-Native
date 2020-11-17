import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Item, Label, Input, Button,} from 'native-base';

export default function UpdatePassword() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Old Password</Label>
                <Input secureTextEntry />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>New Password</Label>
                <Input secureTextEntry />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Confirm New Password</Label>
                <Input secureTextEntry />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Button rounded block success style={styles.button}>
          <Text>save password</Text>
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
});
