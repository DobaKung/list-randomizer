import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Card extends React.Component {
  render() {
    return (
        <View style={styles.card}>
          <Text style={{fontSize: 18}}>{this.props.text}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 5,
    marginBottom: 10,
    // elevation: 1
  }
});
