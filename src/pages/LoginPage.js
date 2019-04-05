/**
 * @Author: Mario
 * @Date:   2018-07-26T19:19:30+08:00
 * @Last modified by:   Mario
 * @Last modified time: 2019-04-05T23:07:03+08:00
 */

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAction from "../actions/LoginActions";
import * as themeAction from "../actions/ThemeActions";
import { NavigationActions } from "react-navigation";

import MainPage from "./MainPage";

class LoginPage extends Component {
  static navigationOptions = {
    title: "LoginPage"
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.status === "登录成功" && nextProps.isSuccess) {
      this.props.navigation.push("Main", { user: nextProps.user });
    }
    return true;
  }

  render() {
    const { LoginAction } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={[styles.textItems, styles.top]}>
          <Text>账号</Text>
          <TextInput
            style={styles.text}
            value={this.props.name}
            placeholder="请输入账号"
            onChangeText={text => {
              console.log(text);
              this.props.dispatch(loginAction.change_name());
            }}
          />
        </View>
        <View style={styles.textItems}>
          <Text>密码</Text>
          <TextInput
            style={styles.text}
            value={this.props.password}
            placeholder="请输入密码"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#cc0000",
            marginTop: 30,
            paddingHorizontal: 10,
            paddingVertical: 3
          }}
          onPress={() => {
            this.props.dispatch(loginAction.requireLogin());
            // LoginAction()
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              paddingHorizontal: 10,
              paddingVertical: 3
            }}
          >
            登录
          </Text>
        </TouchableOpacity>

        <Text style={styles.status}>{this.props.status}</Text>
        <View
          style={{
            width: 100,
            height: 50,
            backgroundColor: this.props.color,
            marginTop: 20
          }}
        />
        <TouchableOpacity
          style={{ backgroundColor: "#cdcdcd", marginTop: 20 }}
          onPress={() => {
            this.props.dispatch(themeAction.redAction());
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#333333",
              paddingHorizontal: 10,
              paddingVertical: 3
            }}
          >
            紅色
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#cdcdcd", marginTop: 20 }}
          onPress={() => {
            this.props.dispatch(themeAction.blueAction());
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#333333",
              paddingHorizontal: 10,
              paddingVertical: 3
            }}
          >
            藍色
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// 这个函数最正确的名字应该叫 mapStateToProps(state) 把 reducer 里改变过的 state 通过 props 传递过来
function mapStateToProps(state) {
  return {
    name: state.LoginReducer.data.name,
    password: state.LoginReducer.data.password,
    status: state.LoginReducer.data.status,
    isSuccess: state.LoginReducer.data.isSuccess,
    user: state.LoginReducer.data.user,
    color: state.themeReducer.color
  };
}

// 自动绑定 action creators到 dispatch() 函数 这个函数一样 把你要 dispatch 的 action 当做 props 传递过来  如果这么写 上面的触发 action 的时候就不要 this.prop.dispatch(xxxAction) 了 , 可以直接写 this,props.LoginAction
function matchDispatchToProps(dispatch) {
  return {
    ChangeName: bindActionCreators(loginAction.change_name, dispatch),
    ChangePassword: bindActionCreators(loginAction.change_password, dispatch),
    LoginAction: bindActionCreators(loginAction.requireLogin, dispatch)
  };
}

//connect 连接组件与 store ,任何时候只要 store 发生改变, mapStateToProps 都会被调用,
// 函数接收两个参数 第一个参数里有两个参数 分别是mapStateToProps  matchDispatchToProps
export default connect(mapStateToProps)(LoginPage);
//export default connect(select)(LoginPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  status: {
    fontSize: 16,
    color: "#3333"
  },
  top: {
    marginTop: 200
  },
  textItems: {
    marginLeft: 100,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    justifyContent: "space-between"
  },
  text: {
    paddingLeft: 20,
    flex: 1
  }
});
