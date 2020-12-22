<template>
    <div>
        <div id="contentfirst" class="modal-content">
            <div class="modal-header">
                <a href="#" id="backLogin">
                    <img :src="backfoto" alt="Retornar a Inicio de sesion">
                </a>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="recovery-title">
                    <img :src="forgot" style="    position: relative;
    right: -30px;" alt="Recovery password Casella">
                    <div class="title">
                        <h1>¿Olvisdaste tu contraseña?</h1>
                        <p>Ingresa tu email y te enviaremos
                            los pasos para cambiarla.</p>
                    </div>
                </div>
                <div class="card-recovery" v-loading="loaded">
                    <div v-if="success">
                        <div v-if="error" class="alert alert-danger" role="alert">
                            <span> {{post}}</span>
                        </div>
                        <div v-else class="alert alert-success" role="alert">
                            <span> {{post}}</span>
                        </div>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="submit" autocomplete="off">
                            <div class="form-group row">
                                <div class="col-md-12">

                                    <input v-model="fields.email" type="text" class="form-control" id="email"
                                           name="email"
                                           required
                                           placeholder="TU EMAIL">
                                    <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>

                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="btn btn-recovery">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="contentsecod" style="display: none" class="modal-content">
            <div class="modal-header" style="display: none">
                <img :src="mensajefoto" alt="">
            </div>

            <div class="modal-body">
                <div class="recovery-title send-recovery">
                    <div class="img-background">
                        <img :src="mensajefoto" alt="Recovery password Casella">
                    </div>
                    <div class="title">
                        <h1>Te enviamos un e-mail al siguiente correo:</h1>
                        <p style="margin:2rem auto">{{email}}</p>
                        <div class="form-group row mb-0">
                            <div class="col-md-12 text-center">
                                <button type="button" class="btn btn-recovery">
                                    LISTO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contenttercer" style="display: none" class="modal-content">
            <div class="modal-header" style="display: none">
                <img :src="mensajegracias" alt="">
            </div>

            <div class="modal-body">
                <div class="recovery-title send-recovery">
                    <div class="img-background">
                        <img :src="mensajegracias" alt="Recovery password Casella">
                    </div>
                    <div class="title">
                        <h1>¡Gracias por permitirnos
                            servirte!</h1>
                        <p style="margin: 2rem auto;">No dudes en contactarnos directamente
                            en caso necesites asesoría en la compra, venta
                            o alquiler de tu inmueble.</p>
                        <div class="form-group row mb-0">
                            <div class="col-md-12 text-center">
                                <button id="salirRecovery" type="button" class="btn btn-recovery">
                                    LISTO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                google_url: casella.url_google,
                foto: casella.path + 'img/google-login.png',
                backfoto: casella.path + 'img/icons/prev-a.svg',
                forgot: casella.path + 'img/icons/seguridad.svg',
                mensajefoto: casella.path + 'img/icons/envio.svg',
                mensajegracias: casella.path + 'img/icons/gracias.svg',
                success: false,
                loaded: false,
                error: false,
                email: ''
            }
        },

        methods: {
            submit() {
                this.loaded = true;
                this.success = false;
                this.errors = {};
                let vm = this;
                axios.post(casella.url_recovery_password, this.fields).then(response => {
                    vm.fields = {}; //Clear input fields.
                    vm.loaded = false;
                    vm.success = true;
                    vm.post = response.data.message;
                    vm.error = response.data.error;

                    if (!vm.error) {
                        vm.email = response.data.email.email;
                        $('#contentfirst').hide();
                        $('#contentsecod').show();
                        setInterval(function () {
                            $('#contentsecod').hide();
                            $('#contenttercer').show();
                        }, 3000);


                    }


                    console.log(vm.post);


                }).catch(error => {
                    vm.loaded = false;
                    vm.errors = error.response.data.errors || {};
                });

            },
        },

    }

</script>
