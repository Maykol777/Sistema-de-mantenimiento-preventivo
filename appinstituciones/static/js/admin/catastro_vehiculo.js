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
            axios.get("http://127.0.0.1:8000/obtener_data_catastro_vehiculos_general/")
            .then(response => {
                this.data_tabla = response.data
                console.log(response.data)
            })
        },

        mostrarModal(event){
            var idBtn = event.target.id
            
        }



    },


    mounted() {
        this.obtenerDataCatastroIndustrial()
    }


}).mount("#app")