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

export default class ForgotPasswordScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
  }

  onResetPasswordPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
      .then(() => {
        Alert.alert('Password reset email has been sent.')
      }, (error) => {
        Alert.alert(error.message)
      })
  }

  onBackToLoginPress = () => {
    var navActions = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Login'})
      ]
    })
    this.props.navigation.dispatch(navActions)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Forgot Password</Text>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={(text) => { this.setState({email: text}) }}
          placeholder='Email'
          style={styles.input}
          value={this.state.email}
        />
        <Button title="Reset Password" onPress={this.onResetPasswordPress} />
        <Button title="Back to Login" onPress={this.onBackToLoginPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
  }
})