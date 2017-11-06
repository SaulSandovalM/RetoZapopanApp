import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Detalle from './src/components/detalle/Detalle';
import Inicio from './src/components/inicio/Inicio';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Inicio" header={null} component={Inicio} initial/>
        <Scene key="Detalle" header={null} component={Detalle} />
      </Scene>
    </Router>
    </Root>
  );
};

export default Routes;
