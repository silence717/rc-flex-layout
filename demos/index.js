import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Layout from '../src/index';


export default class Demo extends PureComponent {
    render() {
        return (
            <Layout />
        )
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Demo />, domContainer);