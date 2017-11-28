import React from 'react';
import Card from './Card';
import {StatusBar} from 'react-native';
import {Content} from 'native-base';

export const ProyectosList = ({proyects}) => {
    return (
        <Content>
            <StatusBar backgroundColor="#802154" barStyle="light-content"/>
            {proyects.data.map((p,index)=><Card
                key={index}
                p={p}
            />)}

        </Content>

    );
};
