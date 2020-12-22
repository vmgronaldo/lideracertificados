<template>
    <button @click="AddWithList" class="click-deseo" ><img :src="foto" alt=""></button>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Agregado a lista',
                endpoint: 'Añadir a deseo',
                info: null,
                state: 'add',
                msg: 'Añadir a deseo',
                msgdelete: 'Eliminar de deseo',
                foto: casella.path + 'img/icons/favorito-d.svg',
                fotoactive: casella.path + 'img/icons/favorito-a.svg',
                fotodesactive:casella.path + 'img/icons/favorito-d.svg',
            }
        },
        props: {inmueble: null},
        methods: {
            AddWithList() {
                axios({
                    method: 'POST',
                    url: "/favoritos/" + this.inmueble + "/attach",
                    data: {
                        inmueble_id: this.inmueble
                    }
                }).then(response => {
                    // JSON responses are automatically parsed.
                    if (response.data.state) {
                        this.foto = this.fotoactive;
                        this.msg = this.msgdelete;
                        this.info = response.data;
                        this.$message({
                            showClose: true,
                            message: 'Se agrego, a tu lista de deseos.',
                            type: 'success'
                        });
                    } else {
                        this.foto= this.fotodesactive;
                        this.msg = this.endpoint;
                        this.info = response.data;
                        this.$message({
                            showClose: true,
                            message: 'Eliminado, de tu lista de deseos.',
                            type: 'warning'
                        });
                    }

                }).catch(e => {
                        this.errors.push(e);
                    });
            }


        }
    }

</script>
