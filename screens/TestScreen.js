import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as firebase from 'firebase'

import { TestComponent } from './../components/AppComponents'

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSignoutPress = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <TestComponent />
        <Button title='Signout' onPress={this.onSignoutPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
});
