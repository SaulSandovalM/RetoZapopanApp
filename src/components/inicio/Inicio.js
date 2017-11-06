import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Container, Content} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Card from '../card/Card';

export default class Inicio extends Component < {} > {
  render() {
    return (
      <Container>
      <Content>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Content>
    </Container>
    );
  }
}
