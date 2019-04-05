/**
 * @Author: Mario
 * @Date:   2019-03-27T13:07:00+08:00
 * @Last modified by:   Mario
 * @Last modified time: 2019-04-05T22:05:47+08:00
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";

import MainPage from "./src/pages/MainPage";
import LoginPage from "./src/pages/LoginPage";
import ShopCart from "./src/pages/ShopCart";

import { StackNavigator, createStackNavigator } from "react-navigation";

const mScreenWidth = Dimensions.get("window").width;
const mScreenHeight = Dimensions.get("window").height;

export default class App extends Component {
  StackNav = null;
  constructor(props) {
    super(props);
    this.state = {};

    this.initNavigation();
  }

  componentDidMount() {
    console.log("什么时候出发");
  }

  initNavigation() {
    this.StackNav = createStackNavigator(
      {
        Login: { screen: LoginPage },
        Main: { screen: MainPage },
        ShopCart: { screen: ShopCart }
      },
      {
        initialRouteName: "Login"
      }
    );
  }

  render() {
    return (
      <View style={{ width: mScreenWidth, height: mScreenHeight }}>
        <this.StackNav />
      </View>
    );
  }
}
