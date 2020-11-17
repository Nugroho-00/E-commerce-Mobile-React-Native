import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Text, Button, Card, CardItem, Body } from 'native-base';
import { useDispatch } from 'react-redux';

import Action from '../redux/actions/auth'

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function doLogin() {
    const data = {
      email,
      password
    };
    dispatch(Action.login(data))
  }

  function forgot() {
    navigation.navigate('Forgot');
  }

  // function goToHome() {
  //   navigation.navigate('Home');
  // }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>
          Login
        </Text>
        <Form>
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
                  <Input secureTextEntry onChangeText={text => setPassword(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Form>
        <TouchableOpacity onPress={forgot} style={styles.login}>
          <Text style={styles.loginLink}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <Button
          rounded
          block
          success
          onPress={doLogin}
        >
          <Text>Login</Text>
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
