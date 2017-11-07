import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Card from './Card';
import {Content, Container} from 'native-base';

class ProyectosList extends Component {
  state = {
    allProyectos: []
  };

  componentWillMount() {
    const {allProyectos} = this.props;
    this.setState({allProyectos});
  };

  render() {
    const {allProyectos} = this.state;
    return (
      <Content>
      {
        allProyectos.map((p, index) => {
          return <Card key={index} index={index} {...p}/>
        })
      }
      </Content>
    );
  };
};

function mapStateToProps(state, ownProps) {
  return {allProyectos: state.proyectos.allProyectos};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(dispatch)};
}

export default ProyectosList = connect(mapStateToProps, mapDispatchToProps)(ProyectosList);
