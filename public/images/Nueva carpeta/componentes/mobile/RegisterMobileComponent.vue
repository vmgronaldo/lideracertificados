<template>
    <form
        v-loading="loaded"
        class="formulario-contacto form-login" @submit.prevent="submit" autocomplete="off">
        <div class="redes-sociales">
            <a :href="google_url" class="btn btn-lighti">
                <img :src="foto" width="25" alt=""> <span> CONTINUAR CON GOOGLE</span> </a>
        </div>
        <div class="form-group">
            <input v-model="fields.email" type="text" class="form-control" id="email" name="email"
                   required
                   placeholder="Correo">
            <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
        </div>
        <div class="form-group">
            <div class="password-main">
                <input v-model="fields.password" type="password" class="form-control" id="respassword" name="password"
                       required
                       placeholder="Contraseña">
                <button type="button" id="resbtnToggle" class="toggle"><i id="reseyeIcon" class="fa fa-eye"></i></button>
            </div>
            <div v-if="errors && errors.password" class="text-danger">{{ errors.password[0] }}</div>

        </div>
        <div class="accion" >
            <button  type="submit"  class="btn btn-danger btn-login">
                REGISTRARME
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                //politicas: metro_config.routes.politicas,
                fields: {},
                errors: {},
                google_url:casella.url_google,
                foto: casella.path + 'img/google-login.png',
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
                axios.post(casella.register_customer_path, this.fields).then(response => {
                    vm.fields = {}; //Clear input fields.
                    vm.loaded = false;
                    vm.success = true;
                    vm.post = response.data.message;
                    this.$notify({
                        title: 'Cuenta creada con exitoso',
                        message: 'Redireccionando a casella ...',
                        type: 'success'
                    });
                    setInterval(function () {
                        window.location.href = casella.url;
                    }, 2000);
                }).catch(error => {
                    vm.loaded = false;
                    this.$notify({
                        title: 'Algo salio mal',
                        message: 'Revisa tus datos, porfavor.',
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
