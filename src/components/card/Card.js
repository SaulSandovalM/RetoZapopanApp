import React, {Component} from 'react';
import {Text, View, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Icon, Left, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class CardC extends Component < {} > {
  render() {
    return (
      <TouchableOpacity onPress={()=>Actions.Detalle()}>
      <Card style={styles.card}>
        <CardItem style={styles.carditem}>
          <Text style={styles.title}>Plataforma Crowfundig</Text>
        </CardItem>

        <CardItem cardBody>
          <ImageBackground source={{
              uri: 'https://i.ytimg.com/vi/nZjiF0KTR-E/maxresdefault.jpg'
            }} style={styles.image}>

            <View style={styles.view}>
              <View style={styles.view2}>
                <Icon name="ios-bookmarks" style={styles.icon}/>
                <Text style={styles.text}>Tecnología e Innovación</Text>
              </View>
            </View>

            <View style={styles.view3}>
              <View>
                {/*<Progress.Pie progress={0.2} size={25} color={'white'} style={{
                    alignSelf: 'center'
                  }}/>*/}
                <Text style={styles.text}>Recaudado</Text>
              </View>

              <View>
                <Icon name="person" style={styles.icon}/>
                <Text style={styles.text}>100 Donadores</Text>
              </View>

              <View>
                <Icon name="ios-clock-outline" style={styles.icon}/>
                <Text style={styles.text}>14 Hrs restantes</Text>
              </View>
            </View>

          </ImageBackground>
        </CardItem>
      </Card>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 0,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10
  },
  carditem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    height: 300,
    width: '100%',
    flex: 1,
    justifyContent: 'space-between'
  },
  view: {
    height: 60,
    width: null,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  view3: {
    backgroundColor: 'rgba(0,0,0,.7)',
    height: 60,
    width: null,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
});
