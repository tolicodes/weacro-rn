import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterByName } from '../../../store/actions/actions';
import { Icon, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const SearchIcon = styled(Icon).attrs({
    name:"search",
    size: "big"
})`
    margin: 0;
`;
class Search extends Component {
    state = {
        active: false
    }
    activate = () => this.setState({active: true})
    onChange = ({target: { value: search }}) => this.setState({search})
    render() {
        if (this.state.active) {
            return <input value={this.props.name} onChange={this.props.filterByName}/>
        }
        else {
            return <Menu.Item onClick={this.activate}><SearchIcon /></Menu.Item>
        }
    }
}

const mapStateToProps = ({ view: { name } }) => ({ name });
const mapDispatchToProps = dispatch => ({
  filterByName: ({target: {value: name}}) => dispatch(filterByName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)
  