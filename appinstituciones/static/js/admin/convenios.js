const { createApp } = Vue
createApp({
    delimiters: ['${', '}'],
    data(){
        return{
            data_tabla: null
        }
    },




    methods: {
        obtenerDataCatastroIndustrial(){
            axios.get('http://127.0.0.1:8000/obtener_convenios_general/')
            .then(response => {
                // this.data_tabla = JSON.stringify(response.data)
                this.data_tabla = JSON.parse(response.data.data)
                console.log(JSON.parse(response.data.data))
            })
        },

        mostrarModal(event){
            var idBtn = event.target.id
            
        }



    },


    mounted() {
        this.obtenerDataCatastroIndustrial()
    }


}).mount('#app')