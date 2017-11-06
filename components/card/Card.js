import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Container, Card, CardItem, Button, Icon, Left, Body, Right} from 'native-base';
import Cabecera from './components/detalle/Cabecera';

export default class Card extends Component < {} > {
  render() {
    return (
      <Container>
      <Cabecera/>
      <ScrollView>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Image source={{
                  uri: 'https://www.tensorflow.org/_static/images/tensorflow/logo.png'
                }} style={styles.image}/>
              <Text style={styles.title}>
                TensorFlow
              </Text>
            </Body>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={styles.text}>Saving lifes is a program that try to compare the prices of drugs so you
                can choose the best option</Text>
            </Body>
          </CardItem>

          <CardItem>
            <Left>
              <Image source={{
                  uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4'
                }} style={styles.imgPerfil}/>
              <Body>
                <Text>Saul Sandoval M</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem style={styles.carditem}>
            <Left>
              <Button transparent textStyle={{
                  color: '#87838B'
                }}>
                <Text>
                  14 Horas {'\n'}Restantes</Text>
              </Button>
            </Left>

            <Body>
              <Button transparent textStyle={{
                  color: '#87838B'
                }}>
                <Text>
                  14 mil {'\n'}Donadores</Text>
              </Button>
            </Body>

            <Right>
              <Button transparent textStyle={{
                  color: '#87838B'
                }}>
                <Text>
                  $ 10,000 {'\n'}Recaudado</Text>
              </Button>
            </Right>
          </CardItem>

        </Card>
      </ScrollView>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 0
  },
  image: {
    height: 200,
    width: '100%',
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20
  },
  text: {
    fontSize: 16,
    margin: 20,
    marginTop: -20
  },
  imgPerfil: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 20
  },
  carditem: {
    marginLeft: 20,
    marginRight: 20
  }
});
