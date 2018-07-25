/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, ToolbarAndroid, View, ScrollView, StatusBar} from 'react-native';
import FAB from 'react-native-fab';
import Card from './Components/Card';
import Prompt from './Components/Prompt';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { items: 1 };
    this.ask = this.ask.bind(this);
  }
  ask() {
    alert('Fuck you');
  }
  render() {
    return (
      <View style={styles.app}>
        <StatusBar barStyle = "light-content" backgroundColor="#0086c3" hidden = {false}/>
        <ToolbarAndroid title="Randomizer" style={styles.toolbar} titleColor="#fff" />
        <View style={styles.container}>
          { this.state.items == 0 && <Text style={styles.welcome}>The list is empty</Text> }
          <ScrollView style={styles.list}>
            <Card text="Item 1"/>
            <Card text="Item 2"/>
            <Card text="Item 3"/>
            <Text style={styles.note}>Shake to randomize</Text>
          </ScrollView>
          <FAB buttonColor="#fdd835" iconTextColor="#000" onClickAction={this.ask}/>
        </View>
        <Prompt title="Item name" placeholder="Enter item name"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'stretch'
  },
  toolbar: {
    height: 56,
    backgroundColor: '#29b6f6',
    elevation: 3
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50
  },
  list: {
    width: '100%',
    padding: 15
  },
  note: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 60
  }
});
