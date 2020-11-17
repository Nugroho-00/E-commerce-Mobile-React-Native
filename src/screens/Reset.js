import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Text, Button, Card, CardItem, Body } from 'native-base';

export default function ResetPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  function resetPassword() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>
          Reset Password
        </Text>
        <Text style={styles.description}>
          You need to change your password to activate your account
        </Text>
        <Form style={styles.formInput}>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>New Password</Label>
                  <Input secureTextEntry={true} onChangeText={text => setPassword(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Confirm New Password</Label>
                  <Input secureTextEntry={true} onChangeText={text => setNewPassword(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Form>
        <Button
          rounded
          block
          success
          onPress={resetPassword}
          disabled={(password === '' || newPassword === '') ? true : false}
        >
          <Text>Reset Password</Text>
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
  description: {
    color: '#F01F0E',
  },
  formInput: {
    marginTop: 16,
    marginBottom: 70,
  },
});
