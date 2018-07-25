import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class Prompt extends React.Component {
  render() {
    return(
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 4}}>{this.props.title}</Text>
            <TextInput style={{fontSize: 18}} placeholder={this.props.placeholder} underlineColorAndroid="#000"/>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.button}>Cancel</Text>
              <Text style={styles.button}>Add</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  show: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '100%',
    width: '100%'
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 8,
    borderRadius: 5,
    elevation: 3,
    width: '90%',
    maxWidth: 300
  },
  button: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    padding: 10
  }
});
