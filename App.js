import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Container, Card, CardItem, Thumbnail, Button, Icon, Left, Body} from 'native-base';
import Cabecera from './components/detalle/Cabecera';

export default class App extends Component < {} > {
  render() {
    return (
      <Container>
        <Cabecera/>
        <ScrollView>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.tensorflow.org/_static/images/tensorflow/logo.png'}}
                  style={{height: 200, width: '100%', flex: 1}}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>
                  TensorFlow
                </Text>
              </Body>
            </CardItem>

            <CardItem>
                <Body>
                  <Text style={{fontSize: 16, marginLeft: 20, marginTop: -20}}>Saving lifes is a program that try to
                    compare the prices of drugs so you can choose the best option</Text>
                </Body>
            </CardItem>

            <CardItem>
              <Left>
                <Image source={{uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4'}}
                  style={{height: 30, width: 30, borderRadius: 15, marginLeft: 20}}/>
                <Body>
                  <Text>Saul Sandoval M</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200
  },
  h1: {
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    margin: 20
  },
  texto: {
    fontSize: 20
  },
  texto2: {
    color: 'white',
    fontSize: 20
  },
  view: {
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'center'
  },
  view2: {
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'space-around'
  },
  margin: {
    marginRight: 10
  },
  margin2: {
    marginRight: 10,
    marginTop: 5,
    fontWeight: 'bold'
  },
  boton: {
    width: '100%',
    backgroundColor: '#802154',
    justifyContent: 'center'
  },
  back: {
    backgroundColor: '#747372',
    justifyContent: 'center'
  },
  color: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    color: '#61abf8',
    fontSize: 18
  },
  card: {
    marginLeft: 20,
    marginRight: 20
  }
});
