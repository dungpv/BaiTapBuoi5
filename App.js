import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]}>
          <Text style={styles.textCenter}>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.box, styles.blueBox]}>
          <Text style={styles.textCenter}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.box, styles.greenBox]}>
          <Text style={styles.textCenter}>Green: #96CC96</Text>
        </View>
        <View style={[styles.box, styles.yellowBox]}>
          <Text style={styles.textCenter}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
  },
  box: {
    marginTop: 20,
    width: '95%',
    height: 150,
    borderRadius: 20,
  },
  purpleBox: {
    backgroundColor: '#C9C9FF',
  },
  blueBox: {
    backgroundColor: '#3D85C6',
  },
  greenBox: {
    backgroundColor: '#96CC96',
  },
  yellowBox: {
    backgroundColor: '#F4B940',
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 150,
  },
});
