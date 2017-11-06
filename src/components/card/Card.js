import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Icon, Left, Body, Right} from 'native-base';

export default class CardC extends Component < {} > {
  render() {
    return (
      <TouchableOpacity>
      <Card style={{
          flex: 0,
          width: '95%',
          alignSelf: 'center',
          marginTop: 10
        }}>

        <CardItem style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{
              fontSize: 20,
              fontWeight: 'bold'
            }}>Plataforma Crowfundig</Text>
        </CardItem>

        <CardItem cardBody="cardBody">

          <Image source={{
              uri: 'https://i.ytimg.com/vi/nZjiF0KTR-E/maxresdefault.jpg'
            }} style={{
              height: 300,
              width: '100%',
              flex: 1,
              justifyContent: 'space-between'
            }}>

            <View style={{
                height: 60,
                width: null,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 5
              }}>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Icon name="ios-bookmarks" style={{
                    color: 'white',
                    alignSelf: 'center'
                  }}/>
                <Text style={{
                    color: 'white'
                  }}>Tecnología e Innovación</Text>
              </View>

            </View>

            <View style={{
                backgroundColor: 'rgba(0,0,0,.7)',
                height: 60,
                width: null,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5
              }}>
              <View>
                <Progress.Pie progress={0.2} size={25} color={'white'} style={{
                    alignSelf: 'center'
                  }}/>
                <Text style={{
                    color: 'white'
                  }}>
                  Recaudado</Text>
              </View>

              <View>
                <Icon name="person" style={{
                    color: 'white',
                    alignSelf: 'center'
                  }}/>
                <Text style={{
                    color: 'white'
                  }}>100 Donadores</Text>
              </View>

              <View>
                <Icon name="ios-clock-outline" style={{
                    color: 'white',
                    alignSelf: 'center'
                  }}/>
                <Text style={{
                    color: 'white'
                  }}>14 Hrs restantes</Text>
              </View>

            </View>
          </Image>
        </CardItem>
      </Card>
    </TouchableOpacity>
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
