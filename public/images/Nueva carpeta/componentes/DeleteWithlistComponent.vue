<template>
    <button @click="DeleteWithList" class="click-deseo" data-toggle="tooltip" data-placement="bottom"
            title="" data-original-title="Quitar de lista"><img :src="foto" alt=""></button>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Agregado a lista',
                endpoint: '',
                info: null,
                foto:casella.path+'img/icons/favorito-a.svg',
                fotoactive: casella.path+'img/icons/favorito-d.svg'
            }
        },
        props: {inmueble: null},
        methods: {
            DeleteWithList()
            {
                axios({
                    method: 'POST',
                    url: "/favoritos/"+this.inmueble+"/dettach",
                    data: {
                        inmueble_id: this.inmueble
                    }
                }).then(response => {
                    // JSON responses are automatically parsed.
                    this.foto = this.fotoactive;
                    this.info = response.data;
                    alert("Antes de mostrar el alerta mi lord me presentara a mercy");
                    this.$message({
                        showClose: true,
                        message: 'Eliminado, de tu lista de deseo.',
                        type: 'warning'
                    });
                    console.log(this.info);
                })
                    .catch(e => {
                        //console.log(vm.coursesFilter);
                        //console.log(e);
                        this.errors.push(e);
                    });
            }


        }
    }

</script>
