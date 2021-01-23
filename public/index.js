import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { HView, VView } from '../src/index';

export default class Demo extends PureComponent {

    handleClick() {
        console.log('handle click');
    };

    render() {
        return (
            <HView gap={50}>
                <HView width={100} height="100px" bgColor="red" hAlign="center" onClick={this.handleClick.bind(this)}>100</HView>
                <VView width={200} height={200} hAlign="center" vAlign="space-between" bgColor="blue" gap={10}>
                    <div>a</div>
                    <div>b</div>
                    <VView style={{ width: '50px', height: "50px" }}>
                        <div style={{ width: '25px', height: "25px" }}>123</div>
                        <div>456</div>
                    </VView>
                </VView>
                <HView width={300} height={300} bgColor="green">300</HView>
            </HView>
        )
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Demo />, domContainer);