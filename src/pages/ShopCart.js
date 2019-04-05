/**
 * @Author: Mario
 * @Date:   2019-04-05T22:04:17+08:00
 * @Last modified by:   Mario
 * @Last modified time: 2019-04-05T22:36:15+08:00
 */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";

import { NavigationActions } from "react-navigation";

import * as countAction from "../actions/CountActions";

import * as loginActions from "../actions/LoginActions";

class MainPage extends Component {
  static navigationOptions = {
    title: "MainPage"
  };

  outData = {
    status: "请重新登录",
    isSuccess: false,
    user: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.state.params.user.name,
      age: this.props.navigation.state.params.user.age
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cartItems}>
          <Text style={styles.left}>奶粉</Text>
          <View style={styles.right}>
            <Text>+</Text>
            <Text>0</Text>
            <Text>+</Text>
          </View>
        </View>

        <Text>购物车总数:100</Text>
      </View>
    );
  }
}

function mapStateToProps(store) {
  return {
    count: store.countReducer.count,
    color: store.themeReducer.color
  };
}

export default connect(mapStateToProps)(MainPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  cartItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
