import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

import * as firebase from 'firebase'

export default class ProfileScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  onProfileSavePress = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
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
        <Button title="Save" onPress={this.onProfileSavePress} />
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
})