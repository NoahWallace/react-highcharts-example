import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Chart1} from './ChartComponent';
export const App: React.StatelessComponent<{}> = (props) => (
        <Chart1/>
)

ReactDOM.render( <App/> , document.getElementById('app'));
