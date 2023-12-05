const { createApp } = Vue
createApp({
    delimiters: ['${', '}'],
    data(){
        return{
            data_tabla: null
        }
    },
    methods: {
        obtenerDataCatastroMedico(){
            axios.get("http://127.0.0.1:8000/get_lebu_medico/")
            .then(response => {
                this.data_tabla = response.data.datos
                // console.log(response.data);
            })
        },
        mostrarModal(event){
            var idBtn = event.target.id   
        }
    },
    mounted() {
        this.obtenerDataCatastroMedico()
    }
}).mount("#app")