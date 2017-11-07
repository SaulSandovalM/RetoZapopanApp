import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Icon, Item, Input} from 'native-base';
import image from '../../assets/imgs/image.png'
import {Actions} from 'react-native-router-flux';

const Encabezado = ({onSearch}) => {

    return (
        <Header searchBar style={styles.header}>

            <View style={styles.view}>
                <Image
                    style={{width: 90, height: 50}}
                    source={image}
                />
            </View>
            <Item style={styles.item}>
                <Icon name="ios-search" style={styles.icon}/>
                <Input onChangeText={onSearch} placeholder="Buscar proyecto" style={styles.input}/>
            </Item>



        </Header>
    );
};

export default Encabezado;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#802154",
        justifyContent: "space-between",
    },
    view: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    color: {
        color: "white",
        fontSize: 35
    },
    item: {
        backgroundColor: 'white',
        borderRadius: 15
    },
    icon: {
        color: "#000"
    },
    input: {
        borderRadius:50
    }
});
