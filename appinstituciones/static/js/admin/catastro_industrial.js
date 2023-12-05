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
            axios.get("http://127.0.0.1:8000/get_lebu_industrial/")
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
        this.obtenerDataCatastroIndustrial()
    }
}).mount("#app")