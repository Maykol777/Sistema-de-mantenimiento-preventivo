fetch('http://127.0.0.1:8000/obtener_data_general_lebu/')
.then(response => response.json())
.then(data => {
    console.log(data);

    var dom = document.getElementById('grafico-lebu')
    var myChart = echarts.init(dom, null)

    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '-1%',
            left: 'center'
        },
        series: [
            {
                name: 'Estado General',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: data.bueno, name: 'Bueno' },
                    { value: data.regular, name: 'Regular' },
                    { value: data.malo, name: 'Malo' },
                    { value: data.baja, name: 'Baja' }
                ]
            }
        ]
    };

    myChart.setOption(option);
})

fetch('http://127.0.0.1:8000/obtener_data_total_arauco/')
.then(response => response.json())
.then(data => {
    console.log(data);

    var dom = document.getElementById('grafico-arauco')
    var myChart = echarts.init(dom, null)

    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '-1%',
            left: 'center'
        },
        series: [
            {
                name: 'Estado General',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: data.bueno, name: 'Bueno' },
                    { value: data.regular, name: 'Regular' },
                    { value: data.malo, name: 'Malo' },
                    { value: data.baja, name: 'Baja' }
                ]
            }
        ]
    };

    myChart.setOption(option);
})

fetch('http://127.0.0.1:8000/obtener_data_total_institucion_canete/')
.then(response => response.json())
.then(data => {
    console.log(data);

    var dom = document.getElementById('grafico-canete')
    var myChart = echarts.init(dom, null)

    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '-1%',
            left: 'center'
        },
        series: [
            {
                name: 'Estado General',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: data.bueno, name: 'Bueno' },
                    { value: data.regular, name: 'Regular' },
                    { value: data.malo, name: 'Malo' },
                    { value: data.baja, name: 'Baja' }
                ]
            }
        ]
    };

    myChart.setOption(option);
})























fetch('http://127.0.0.1:8000/obtener_grafico_lebu/')
    .then(response => response.json())
    .then(data => {

        const domContenedorMultiplesgraficos = document.getElementById('grafico1')
        var myChart1 = echarts.init(domContenedorMultiplesgraficos, null)
        // Supongamos que tienes los porcentajes para cada categoría

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['M.E.I']
            },
            series: [
                {
                    name: 'Bueno',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.bueno]
                },
                {
                    name: 'Regular',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.regular]
                },
                {
                    name: 'Malo',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.malo]
                },
                {
                    name: 'Baja',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.baja]
                },
            ],
            media: [
                {
                    query: {
                        maxWidth: 500 // Ajusta el ancho máximo del contenedor
                    },
                    option: {
                        grid: {
                            left: '5%',
                            right: '5%',
                            bottom: '15%',
                            width: '85%',
                            height: '100%',
                            containLabel: true
                        }
                    }
                }
                // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
            ],
            resize: true
        };
        myChart1.setOption(option);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

fetch('http://127.0.0.1:8000/obtener_data_equipos_industriales_arauco/')
.then(response => response.json())
.then(data => {

    const domContenedorMultiplesgraficos = document.getElementById('grafico1-arauco')
    var myChart1 = echarts.init(domContenedorMultiplesgraficos, null)
    // Supongamos que tienes los porcentajes para cada categoría

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.E.I']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };
    myChart1.setOption(option);
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
});

fetch('http://127.0.0.1:8000/obtener_data_equipos_industriales/')
.then(response => response.json())
.then(data => {

    const domContenedorMultiplesgraficos = document.getElementById('grafico1-canete')
    var myChart1 = echarts.init(domContenedorMultiplesgraficos, null)
    // Supongamos que tienes los porcentajes para cada categoría

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.E.I']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };
    myChart1.setOption(option);
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
});























fetch('http://127.0.0.1:8000/obtener_data_equipos_medicos_lebu/')
.then(response => response.json())
.then(data => {
    console.log(data);
    const domContenedorGrafico2 = document.getElementById('grafico2')
    var myChart2 = echarts.init(domContenedorGrafico2, null)
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.E.M']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };
    
    myChart2.setOption(option);
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
});

fetch('http://127.0.0.1:8000/obtener_data_equipos_medicos_arauco/')
.then(response => response.json())
.then(data => {
    console.log(data);
    const domContenedorGrafico2 = document.getElementById('grafico2-arauco')
    var myChart2 = echarts.init(domContenedorGrafico2, null)
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.E.M']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };
    
    myChart2.setOption(option);
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
});

fetch('http://127.0.0.1:8000/obtener_data_equipos_medicos_canete/')
.then(response => response.json())
.then(data => {
    console.log(data);
    const domContenedorGrafico2 = document.getElementById('grafico2-canete')
    var myChart2 = echarts.init(domContenedorGrafico2, null)
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.E.M']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };
    
    myChart2.setOption(option);
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
});





























fetch('http://127.0.0.1:8000/obtener_data_ambulancias_lebu/')
.then(response => response.json())
.then(data => {

    const domContenedorGrafico3 = document.getElementById('grafico3')
    var myChart3 = echarts.init(domContenedorGrafico3, null)
    
    console.log(data);
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.V']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };

    
    myChart3.setOption(option);
})

fetch('http://127.0.0.1:8000/obtener_data_vehiculos_arauco/')
.then(response => response.json())
.then(data => {

    const domContenedorGrafico3 = document.getElementById('grafico3-arauco')
    var myChart3 = echarts.init(domContenedorGrafico3, null)
    
    console.log(data);
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.V']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };

    
    myChart3.setOption(option);
})

fetch('http://127.0.0.1:8000/obtener_data_vehiculos_canete/')
.then(response => response.json())
.then(data => {

    const domContenedorGrafico3 = document.getElementById('grafico3-canete')
    var myChart3 = echarts.init(domContenedorGrafico3, null)
    
    console.log(data);
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['M.V']
        },
        series: [
            {
                name: 'Bueno',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.bueno]
            },
            {
                name: 'Regular',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.regular]
            },
            {
                name: 'Malo',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.malo]
            },
            {
                name: 'Baja',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [data.baja]
            },
        ],
        media: [
            {
                query: {
                    maxWidth: 500 // Ajusta el ancho máximo del contenedor
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        width: '85%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
            // Agrega más reglas media si necesitas ajustes específicos para otros tamaños de contenedor
        ],
        resize: true
    };

    
    myChart3.setOption(option);
})



