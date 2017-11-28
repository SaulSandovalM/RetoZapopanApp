import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {ProyectosList} from "../card/ProyectosList";
import {ResultList} from './listado/ResultList';
import {Container, Spinner} from 'native-base';
import Encabezado from "./Encabezado";
import {setSearch} from '../../actions/filterActions';

import {fetchData} from "../../actions/proyectosActions";

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    componentWillMount(){
        this.props.fetchData();
    }


    onSearch = (value) => {
        this.props.setSearch(value);
        let results = this.props.dataProyectos;
        console.log(results)
        const rEx = new RegExp(value, 'i');
        results = results.data.filter(p => rEx.test(p.name));
        console.log(results)
        this.setState({results})
    };

    render(){
        const {search, dataProyectos} = this.props;
        const {results} = this.state;
        console.log(this.props.dataProyectos.data)
        console.log(this.props.search);
        return(
            <Container style={{backgroundColor: '#BDBDBD'}}>
                <Encabezado onSearch={this.onSearch} />
                {this.props.dataProyectos.isFetching && <Spinner color='red' />}

                {
                    !search
                        ?
                        <ProyectosList proyects={dataProyectos}/>
                        :
                        <ResultList results={results}/>
                }
            </Container>
        );
    };
};

function mapStateToProps(state) {
    return {search: state.filter.search, dataProyectos:state.dataReducer}
}


const styles = StyleSheet.create({
    back: {
        backgroundColor: '#802154'
    }
});

export default connect(mapStateToProps,{setSearch, fetchData})(Principal);