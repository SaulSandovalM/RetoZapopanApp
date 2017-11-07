import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ProyectosList from "../card/ProyectosList";
import {Container} from 'native-base';

class Principal extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <ProyectosList/>
      </Container>
    );
  };
};

function mapStateToProps(state) {
  return {allProyectos: state.proyectos.allProyectos}
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#802154'
  }
});

export default Principal = connect(mapStateToProps)(Principal);
