import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import ProyectosList from "../card/ProyectosList";
import {Container} from 'native-base';

class Principal extends Component {
    render(){
        return(
            <Container>
                <ProyectosList />
            </Container>
        );
    };
};

function mapStateToProps(state) {
    return {allProyectos: state.proyectos.allProyectos}
}

export default Principal = connect(mapStateToProps)(Principal) ;