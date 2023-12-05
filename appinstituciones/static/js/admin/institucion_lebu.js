// fetch('http://127.0.0.1:8000/obtener_data_equipos_medicos_lebu/')
// .then(response => response.json())
// .then(data => {
//     const domAnual = document.getElementById('grafico-anual')
//     var myChart = echarts.init(domAnual, null)
//     var option = {
//         tooltip: {
//             trigger: 'item'
//         },
//         legend: {
//             bottom: '2%',
//             left: 'center'
//         },
//         series: [
//             {
//                 name: 'Estado General Total',
//                 type: 'pie',
//                 radius: ['20%', '70%'],
//                 avoidLabelOverlap: false,
//                 bottom: '15%',
//                 label: {
//                     show: true,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     label: {
//                         show: false,
//                         fontSize: 10,
//                         fontWeight: 'bold'
//                     }
//                 },
//                 labelLine: {
//                     show: false
//                 },
//                 data: [
//                     { value: data.bueno, name: 'Bueno' },
//                     { value: data.regular, name: 'Regular' },
//                     { value: data.malo, name: 'Malo' },
//                     { value: data.baja, name: 'Baja' }
//                 ]
//             }
//         ]
//     };

//     myChart.setOption(option);

//     // Agrega la siguiente línea después de setOption para hacer que el gráfico se ajuste al contenedor
//     window.addEventListener('resize', function () {
//     myChart.resize();
//     });
// })

fetch('http://127.0.0.1:8000/obtener_criticidad_medicos_lebu/')
.then(response => response.json())
.then(data => {
    const domContenedorMultiplesgraficos = document.getElementById('grafico-barra-criticidad-anual')
    const domContenedorRelevanteBarra = document.getElementById('grafico-barra-relevante-anual')
    var myChart = echarts.init(domContenedorMultiplesgraficos, null)
    var myChart2 = echarts.init(domContenedorRelevanteBarra, null)
    // console.log((data));
    option = {
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
            data: ['Criticos']
        },
        series: [
            {
                name: 'Critico',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: []
            },

        ],
        media: [
            {
                query: {
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '1%',
                        width: '100%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
        ],
        // resize: true
    };

    myChart.setOption(option);

    option2 = {
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
            data: ['Relevantes']
        },
        series: [
            {
                name: 'Critico',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: []
            },

        ],
        media: [
            {
                query: {
                },
                option: {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '1%',
                        width: '100%',
                        height: '100%',
                        containLabel: true
                    }
                }
            }
        ],
        // resize: true
    };
    myChart2.setOption(option2);

})

// fetch('http://127.0.0.1:8000/get_lebu_medico/')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })



const { createApp } = Vue
createApp({
    delimiters: ['${', '}'],
    data() {
        return {
            titulo_primer_grafico: 'Equipos Medicos',
            vida_util: 0,
            opcionSelecionada: 'medico',
            data_tabla: null,
            select_lista_instituciones: [
                { valor: 'medico', texto: 'Medico' },
                { valor: 'industrial', texto: 'Industrial' },
                { valor: 'vehiculo', texto: 'Vehiculo' },
            ]
        }
    },

    methods: {
        actualizarGraficoMedianteSelect(){
            if (this.opcionSelecionada === 'medico') {
                axios.get('http://127.0.0.1:8000/get_lebu_medico/')
                .then(response => {
                    data_grafico = { 'bueno': 0, 'regular': 0, 'malo': 0, 'baja': 0 }
                    data_grafico_barra = { 'critico': 0, 'relevante': 0 }
                    vida_util_residual = 0
                    for(var elemento of response.data.datos){
                        if(elemento.estado === 'BUENO'){
                            data_grafico.bueno += 1
                        }else if(elemento.estado === 'REGULAR'){
                            data_grafico.regular += 1
                        }else if(elemento.estado === 'MALO'){
                            data_grafico.malo += 1
                        }else if(elemento.estado === 'BAJA'){
                            data_grafico.baja += 1
                        }
                    }

                    for(var crt of response.data.datos){
                        if(crt.criticidad == 'CRITICO'){
                            data_grafico_barra.critico += 1
                        }else if(crt.criticidad == 'RELEVANTE'){
                            data_grafico_barra.relevante += 1
                        }
                    }

                    for(var vu of response.data.datos){
                        if(vu.vida_util < 0){
                            vida_util_residual += 1
                        }
                    }

                    this.titulo_primer_grafico = 'Equipos Medicos'
                    this.grafico(data_grafico.bueno, data_grafico.regular, data_grafico.malo, data_grafico.baja)
                    this.grafico_barra_1(data_grafico_barra.critico)
                    this.grafico_barra_2(data_grafico_barra.relevante)
                    this.vida_util = vida_util_residual
                    this.data_tabla = response.data.datos
                    // console.log(this.data_tabla[0].id);
                })
            }else if(this.opcionSelecionada === 'industrial'){
                axios.get('http://127.0.0.1:8000/get_lebu_industrial/')
                .then(response => {
                    data_grafico = { 'bueno': 0, 'regular': 0, 'malo': 0, 'baja': 0 }
                    data_grafico_barra = { 'critico': 0, 'relevante': 0 }
                    vida_util_residual = 0
                    for(var elemento of response.data.datos){
                        if(elemento.estado === 'BUENO'){
                            data_grafico.bueno += 1
                        }else if(elemento.estado === 'REGULAR'){
                            data_grafico.regular += 1
                        }else if(elemento.estado === 'MALO'){
                            data_grafico.malo += 1
                        }else if(elemento.estado === 'BAJA'){
                            data_grafico.baja += 1
                        }
                    }

                    for(var crt of response.data.datos){
                        if(crt.criticidad == 'CRITICO'){
                            data_grafico_barra.critico += 1
                        }else if(crt.criticidad == 'RELEVANTE'){
                            data_grafico_barra.relevante += 1
                        }
                    }

                    for(var vur of response.data.datos){
                        if(vur.vida_util_residual <= 0){
                            vida_util_residual += 1
                        }
                    }
                    this.titulo_primer_grafico = 'Equipos Industriales'
                    this.grafico(data_grafico.bueno, data_grafico.regular, data_grafico.malo, data_grafico.baja)
                    this.grafico_barra_1(data_grafico_barra.critico)
                    this.grafico_barra_2(data_grafico_barra.relevante)
                    this.vida_util = vida_util_residual
                    this.data_tabla = response.data.datos
                })
            }else if(this.opcionSelecionada === 'vehiculo'){
                axios.get('http://127.0.0.1:8000/get_lebu_vehiculos/')
                .then(response => {
                    data_grafico = { 'bueno': 0, 'regular': 0, 'malo': 0, 'baja': 0 }
                    data_grafico_barra = { 'critico': 0, 'relevante': 0 }
                    vida_util_residual = 0
                    for(var elemento of response.data.datos){
                        if(elemento.estado === 'BUENO'){
                            data_grafico.bueno += 1
                        }else if(elemento.estado === 'REGULAR'){
                            data_grafico.regular += 1
                        }else if(elemento.estado === 'MALO'){
                            data_grafico.malo += 1
                        }else if(elemento.estado === 'BAJA'){
                            data_grafico.baja += 1
                        }
                    }

                    for(var crt of response.data.datos){
                        if(crt.criticidad == 'CRITICO'){
                            data_grafico_barra.critico += 1
                        }else if(crt.criticidad == 'RELEVANTE'){
                            data_grafico_barra.relevante += 1
                        }
                    }

                    for(var vur of response.data.datos){
                        if(vur.vida_util_residual <= 0){
                            vida_util_residual += 1
                        }
                    }
                    this.titulo_primer_grafico = 'Vehiculos'
                    this.grafico(data_grafico.bueno, data_grafico.regular, data_grafico.malo, data_grafico.baja)
                    this.grafico_barra_1(data_grafico_barra.critico)
                    this.grafico_barra_2(data_grafico_barra.relevante)
                    this.vida_util = vida_util_residual
                    this.data_tabla = response.data.datos
                })
            }
        },

        data_inicial(){
            axios('http://127.0.0.1:8000/get_lebu_medico/')
            .then(response => {
                data_grafico = { 'bueno': 0, 'regular': 0, 'malo': 0, 'baja': 0 }
                data_grafico_barra = { 'critico': 0, 'relevante': 0 }
                vida_util_residual = 0
                for(var elemento of response.data.datos){
                    if(elemento.estado === 'BUENO'){
                        data_grafico.bueno += 1
                    }else if(elemento.estado === 'REGULAR'){
                        data_grafico.regular += 1
                    }else if(elemento.estado === 'MALO'){
                        data_grafico.malo += 1
                    }else if(elemento.estado === 'BAJA'){
                        data_grafico.baja += 1
                    }
                }

                for(var crt of response.data.datos){
                    if(crt.criticidad == 'CRITICO'){
                        data_grafico_barra.critico += 1
                    }else if(crt.criticidad == 'RELEVANTE'){
                        data_grafico_barra.relevante += 1
                    }
                }

                for(var vu of response.data.datos){
                    if(vu.vida_util < 0){
                        vida_util_residual += 1
                    }
                }

                this.titulo_primer_grafico = 'Equipos Medicos'
                this.grafico(data_grafico.bueno, data_grafico.regular, data_grafico.malo, data_grafico.baja)
                this.grafico_barra_1(data_grafico_barra.critico)
                this.grafico_barra_2(data_grafico_barra.relevante)
                this.vida_util = vida_util_residual
                this.data_tabla = response.data.datos
            })

        },

        grafico(bueno, regular, malo, baja){
            const domAnual = document.getElementById('grafico-anual')
            var myChart = echarts.init(domAnual, null)

            var option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    bottom: '2%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Estado General Total',
                        type: 'pie',
                        radius: ['20%', '70%'],
                        avoidLabelOverlap: false,
                        bottom: '15%',
                        label: {
                            show: true,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: bueno, name: 'Bueno' },
                            { value: regular, name: 'Regular' },
                            { value: malo, name: 'Malo' },
                            { value: baja, name: 'Baja' }
                        ]
                    }
                ]
            };

            myChart.setOption(option);
            window.addEventListener('resize', function () {
            myChart.resize();
            });
        },

        grafico_barra_1(critico){
            const domContenedorMultiplesgraficos = document.getElementById('grafico-barra-criticidad-anual')
            var myChart = echarts.init(domContenedorMultiplesgraficos, null)

            option = {
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
                    data: ['Criticos']
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
                        data: [critico]
                    },

                ],

                resize: true
            };
            myChart.setOption(option);
        },

        grafico_barra_2(relevante){
            const domContenedorMultiplesgraficos = document.getElementById('grafico-barra-relevante-anual')
            var myChart = echarts.init(domContenedorMultiplesgraficos, null)

            option = {
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
                    data: ['Relevantes']
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
                        data: [relevante]
                    },
                ],
            };
            myChart.setOption(option);
        }






    },

    mounted(){
        // this.actualizarGraficoMedianteSelect()
        this.data_inicial()
    }

}).mount('#app')
