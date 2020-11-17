/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Text, Button, Card, CardItem, Body,} from 'native-base';

export default function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    navigation.navigate('Login');
  }

  function doSignup() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>
          Sign up
        </Text>
        <Form>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input onChangeText={text => setName(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={text => setEmail(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true} onChangeText={text => setPassword(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Form>
        <TouchableOpacity onPress={login} style={styles.login}>
          <Text style={styles.loginLink}>
            Already have an account?
          </Text>
        </TouchableOpacity>
        <Button
          rounded
          block
          success
          onPress={doSignup}
          enable={(name === '' || email === '' || password === '') ? true : false}
        >
          <Text>Sign Up</Text>
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
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 28,
  },
  login: {
    alignItems: 'flex-end',
  },
});
