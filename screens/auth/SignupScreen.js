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

export default class SignupScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
    }
  }

  onSignupPress = () => {
    if(this.state.password !== this.state.passwordConfirm) {
      Alert.alert('Passwords do not match');
      return
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.database().ref('users').set({
          firstName: this.state.firstName,
          lastName: this.state.lastName
        }).then(() => {
          Alert.alert('Success')
        }, (error) => {
          Alert.alert(error.message)
        })
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
        <Text>Signup</Text>
        <TextInput
          autoCorrect={false}
          onChangeText={(text) => { this.setState({firstName: text}) }}
          placeholder='First Name'
          style={styles.input}
          value={this.state.firstName}
        />
        <TextInput
          autoCorrect={false}
          onChangeText={(text) => { this.setState({lastName: text}) }}
          placeholder='Last Name'
          style={styles.input}
          value={this.state.lastName}
        />
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
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
          placeholder='Confirm Password'
          secureTextEntry={true}
          style={styles.input}
          value={this.state.passwordConfirm}
        />
        <Button title="Signup" onPress={this.onSignupPress} />
        <Button title="Back to Login" onPress={this.onBackToLoginPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
  }
});