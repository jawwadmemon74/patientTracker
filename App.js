import React from 'react';
import Login from './components/login/login';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    const resizeMode = 'cover';
    const text = 'This is some text inlaid in an <Image />';
    return (
      
      <View style={styles.container}>
        <Image
      style={{
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
      source={ require('./assets/img/bg.jpg') }
    />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    
    backgroundColor: '#fff',
  },
});
