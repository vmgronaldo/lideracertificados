<template>
    <div class="apartados suscribe" >
        <div class="suscribe-box">
            <div class="title-suscribre">
                <h1>¡SUSCRÍBETE!</h1>
                <p>Oportunidades de inversión, artículos de interés y mucho más.</p>
            </div>
            <form  @submit.prevent="submit" autocomplete="off">
                <input v-model="fields.email" type="text" class="form-control" id="email" name="email"
                       required
                       placeholder="Ingresa tu correo aquí">
                <button v-loading="loaded"  type="submit" class="btn btn-dark">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //politicas: metro_config.routes.politicas,
                fields: {},
                errors: {},
                success: false,
                loaded: false,
            }
        },

        methods: {
            submit() {
                this.loaded = true;
                this.success = false;
                this.errors = {};
                var vm = this;
                axios.post(casella.url_suscribe, this.fields).then(response => {
                    vm.fields = {}; //Clear input fields.
                    vm.loaded = false;
                    vm.success = true;
                    vm.post = response.data.message;
                    this.$notify({
                        title: 'Suscripción',
                        message: 'Gracias por suscribirte :)',
                        type: 'success'
                    });
                    setInterval(function () {
                        window.location.href = casella.url;
                    }, 2000);
                }).catch(error => {
                    vm.loaded = false;
                    this.$notify({
                        title: 'Algo salio mal',
                        message: error.response.data.errors.email[0] ,
                        type: 'error'
                    });
                    if (error.response.status === 422) {
                        vm.errors = error.response.data.errors || {};
                    }
                });

            },
        },

    }

</script>

<style scoped>

</style>
