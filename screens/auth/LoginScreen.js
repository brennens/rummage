import React, { Component } from 'react'
import {
  Alert,
  Button,
  StyleSheet,
  View,
  Text,
  TextInput } from 'react-native'
import { NavigationActions } from 'react-navigation'

import * as firebase from 'firebase'

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {}, (error) => {
        Alert.alert(error.message)
      })
  }

  onCreateAccountPress = () => {
    var navActions = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Signup'})
      ]
    })
    this.props.navigation.dispatch(navActions)
  }

  onForgotPasswordPress = () => {
    var navActions = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'ForgotPassword'})
      ]
    })
    this.props.navigation.dispatch(navActions)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={(text) => { this.setState({email: text}) }}
          placeholder='Email'
          style={styles.input}
          value={this.state.email}
        />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(text) => { this.setState({password: text}) }}
          placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.onLoginPress} />
        <Button title="Create Account" onPress={this.onCreateAccountPress} />
        <Button title="Forgot Password" onPress={this.onForgotPasswordPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
  }
})