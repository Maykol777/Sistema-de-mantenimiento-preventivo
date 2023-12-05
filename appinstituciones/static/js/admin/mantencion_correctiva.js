const { createApp } = Vue
createApp({
    delimiters: ['${', '}'],
    data(){
        return{
            data_tabla: null
        }
    },




    methods: {
        obtenerDataMantencion_Correctiva(){
            axios.get('http://127.0.0.1:8000/obtener_mantencion_correctiva_general/')
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
        this.obtenerDataMantencion_Correctiva()
    }


}).mount('#app')