import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Chart_1 extends Component {
    state = {
        series: [{
            data: [5, 6, 15, 9, 12, 22, 30, 10, 14]
        }],
        options: {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false
                },
                parentHeightOffset: 0,
            },
            colors: [
                function ({ value, seriesIndex, dataPointIndex, w }) {
                    if (dataPointIndex <= 7) {
                        return "rgba(13, 110, 253,0.2)";
                    } else {
                        return "#0D6EFD";
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '80%',
                    endingShape: 'rounded',
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: false
            },
            grid: {
                show: false,
                padding: {
                    bottom: 0,
                    right: 0,
                    left: 0,
                    top: 0
                }
            },
        }
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={100} width={"150"} />
        )
    }
}
class Chart_2 extends Component {
    state = {
        series: [{
            data: [5, 6, 15, 9, 12, 22, 30, 10, 14]
        }],
        options: {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false
                },
                parentHeightOffset: 0,
            },
            colors: [
                function ({ value, seriesIndex, dataPointIndex, w }) {
                    if (dataPointIndex <= 7) {
                        return "rgba(220, 53, 69,0.2)";
                    } else {
                        return "#DC3545";
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '80%',
                    endingShape: 'rounded',
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: false
            },
            grid: {
                show: false,
                padding: {
                    bottom: 0,
                    right: 0,
                    left: 0,
                    top: 0
                }
            },
        }
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={100} width={"150"} />
        )
    }
}
class Chart_3 extends Component {
    state = {
        series: [{
            data: [5, 6, 15, 9, 12, 22, 30, 10, 14]
        }],
        options: {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false
                },
                parentHeightOffset: 0,
            },
            colors: [
                function ({ value, seriesIndex, dataPointIndex, w }) {
                    if (dataPointIndex <= 7) {
                        return "rgba(32, 201, 151,0.2)";
                    } else {
                        return "#20C997";
                    }
                }
            ],
            /*colors: "#20c997",*/
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '80%',
                    endingShape: 'rounded',
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: false
            },
            grid: {
                show: false,
                padding: {
                    bottom: 0,
                    right: 0,
                    left: 0,
                    top: 0
                }
            },
        }
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={100} width={"150"} />
        )
    }
}
class Chart_4 extends Component {
    state = {
        series: [{
            data: [5, 6, 15, 9, 12, 22, 30, 10, 14]
        }],
        options: {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false
                },
                parentHeightOffset: 0,
            },
            colors: [
                function ({ value, seriesIndex, dataPointIndex, w }) {
                    if (dataPointIndex <= 7) {
                        return "rgba(136, 64, 242,0.2)";
                    } else {
                        return "rgb(136, 64, 242)";
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '80%',
                    endingShape: 'rounded',
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: false
            },
            grid: {
                show: false,
                padding: {
                    bottom: 0,
                    right: 0,
                    left: 0,
                    top: 0
                }
            },

        }
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={100} width={"150"} />
        )
    }
}
class Chart_5 extends Component {
    state = {

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                type: 'area',
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                    },
                },

            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },

        }
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" />
        )
    }
}
class Chart_6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Inflation',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    parentHeightOffset: 0,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },

                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }

                },
                title: {
                    text: 'Monthly Inflation in Argentina, 2002',
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>)
    }
}
export { Chart_1, Chart_4, Chart_2, Chart_3, Chart_5, Chart_6 };
