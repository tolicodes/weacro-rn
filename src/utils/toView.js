import { View } from 'react-native';
import styled from 'styled-components';
import { arrayOfDeffered } from '../../node_modules/redux-saga/utils';

export default (...Components) => (
    Components.reduce((out, Component) => {
       out[Component.name] = Component.withComponent(View);
       return out;
    }, {})
)
