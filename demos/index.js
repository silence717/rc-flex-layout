import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { HView, VView } from '../src/index';

export default class Demo extends PureComponent {
    render() {
        return (
            <div>
                <h2>这里是布局组件</h2>
                <VView gap={10}>
                    <HView width="100px" height="100px" bgColor="red">100</HView>
                    <HView width={200} height={200} padding={20} bgColor="yellow" gap={5} hAlign="center" vAlign="center">
                        <HView>a</HView>
                        <VView>b</VView>
                    </HView>
                    <HView width={300} height={300} bgColor="green">300</HView>
                </VView>
            </div>
        )
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Demo />, domContainer);