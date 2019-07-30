import React, { Component } from 'react';
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);


 
class Charts extends Component {
 
 
    render() {
        let myChart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
        return (
            <div>
                <h1>Charts</h1>
                {myChart}
            </div>
        );
    }
 
}

export default Charts