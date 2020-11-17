import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native';

import {
  Login, Register, Home, Forgot, Categori, Product, ResetPassword,
  PageDetail, Cart, Checkout, Success, Profile, ShippingAddress, AddAddress,
  UpdateAddress, Settings, UpdatePassword, UpdateProfile, Splash  } from '../screens'

const Stack = createStackNavigator();
const ShoppingStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ShoppingStackScreen() {
  return (
    <ShoppingStack.Navigator>
      <ShoppingStack.Screen
        name="Category"
        component={Categori}
        options={{
          title: 'Category',
          headerRight: iconSearch,
          headerTitleAlign: 'center',
        }}
      />
      <ShoppingStack.Screen
        name="Item"
        component={Product}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerRight: iconSearch,
        }}
      />
    </ShoppingStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (focused, color, size) => (
            <Icon type="MaterialIcons" name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShoppingStackScreen}
        options={{
          tabBarIcon: (focused, color, size) => (
            <Icon
              type="MaterialIcons"
              name="store"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyBag"
        component={Cart}
        options={{
          tabBarIcon: (focused, color, size) => (
            <Icon
              type="MaterialIcons"
              name="local-mall"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Home}
        options={{
          tabBarIcon: (focused, color, size) => (
            <Icon
              type="MaterialIcons"
              name="favorite-border"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (focused, color, size) => (
            <Icon
              type="MaterialIcons"
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function iconSearch() {
  return <Icon type="MaterialIcons" name="search" style={styles.icon} />;
}

function iconShare() {
  return <Icon type="MaterialIcons" name="share" style={styles.icon} />;
}

export default function Main() {
  const auth = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {auth.isLogin ? (
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={Splash}
      />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{title: ''}}
          />
          <Stack.Screen name="Login" component={Login} options={{title: ''}} />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Reset Password"
            component={ResetPassword}
            options={{title: ''}}
          />
        </Stack.Navigator>
      ) : (
        <MainStack.Navigator>
          <MainStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Item Detail"
            component={PageDetail}
            options={{
              title: '',
              headerTitleAlign: 'center',
              headerRight: iconShare,
            }}
          />
          <MainStack.Screen
            name="Checkout"
            component={Checkout}
            options={{headerTitleAlign: 'center'}}
          />
          <MainStack.Screen
            name="Success"
            component={Success}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Shipping Address"
            component={ShippingAddress}
            options={{headerTitleAlign: 'center'}}
          />
          <MainStack.Screen
            name="Add Shipping Address"
            component={AddAddress}
            options={{
              headerTitleAlign: 'center',
              title: 'New Shipping Address',
            }}
          />
          <MainStack.Screen
            name="Update Shipping Address"
            component={UpdateAddress}
            options={{
              headerTitleAlign: 'center',
              title: 'Edit Shipping Address',
            }}
          />
          <MainStack.Screen
            name="Setting"
            component={Settings}
            options={{title: ''}}
          />
          <MainStack.Screen
            name="Update Password"
            component={UpdatePassword}
            options={{
              headerTitleAlign: 'center',
              title: 'Change Password',
            }}
          />
          <MainStack.Screen
            name="Update Profile"
            component={UpdateProfile}
            options={{
              headerTitleAlign: 'center',
              title: 'Edit Profile',
            }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 16,
  },
});
