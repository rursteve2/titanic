import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 
class Charts extends Component {
    constructor() {
        super()
        this.state = {
            survived: 0,
            dead: 0,
            male: 0,
            female: 0,
            maleSurvived: 0,
            femaleSurvived: 0
        }
    }

    componentDidMount = async () => {
        await this.props.loadData()
        await this.parseData()
    }

    parseData = () => {
        let survived = 0;
        let dead = 0;
        let male = 0;
        let female = 0;
        let maleSurvived = 0;
        let femaleSurvived = 0;
        for(let i = 0; i < this.props.data.length; i++) {
            if(Object.values(this.props.data[i])[1] === 1) {
                survived += 1
            } else if(Object.values(this.props.data[i])[1] === 0) {
                dead += 1
            } 
        }
            for(let i = 0; i < this.props.data.length; i++) {
            if(Object.values(this.props.data[i])[4] === "male") {
                male += 1
            } else if(Object.values(this.props.data[i])[4] === "female") {
                female += 1
            } 
        }
            for(let i = 0; i < this.props.data.length; i++) {
            if(Object.values(this.props.data[i])[4] === "male" && Object.values(this.props.data[i])[1] === 1) {
                maleSurvived += 1
            } else if(Object.values(this.props.data[i])[4] === "female" && Object.values(this.props.data[i])[1] === 1) {
                femaleSurvived += 1
            }
        }
        this.setState({
            survived, dead, male, female, maleSurvived, femaleSurvived
        })
    }

 
    render() {
        const pieOptions = {
            chart: {
              type: 'pie'
            },
            title: {
              text: 'How many survived'
            },
            series: [{
                name: 'Amount of people',
                colorByPoint: true,
                data: [{name: 'Survived', y: this.state.survived}, {name: 'Dead', y: this.state.dead}]
            }]
          };

        const barOptions = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Male vs Female'
            },
            xAxis: {
                categories: ['Male', 'Female'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of people',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 200,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            series: [{
                name: 'Total',
                data: [this.state.male, this.state.female]
            }, {
                name: 'Survived',
                data: [this.state.maleSurvived, this.state.femaleSurvived]
            }, {
                name: 'Dead',
                data: [this.state.male - this.state.maleSurvived, this.state.female - this.state.femaleSurvived]
            }
        ]
        }
        return (
            <div>
                <h1>Charts</h1>
                <HighchartsReact highcharts={Highcharts} options={pieOptions} />
                <HighchartsReact highcharts={Highcharts} options={barOptions} />

            </div>
        );
    }
 
}

export default Charts