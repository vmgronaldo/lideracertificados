<template>
    <form v-loading="loaded" class="formulario-contacto form-registrate" id="MessageInmueble"
          @submit.prevent="submit" autocomplete="off">
        <input type="hidden" v-model="inmueble" name="inmueble_id" id="inmueble_id">
        <input type="hidden" v-model="user" name="user_id" id="user_id">
        <input type="hidden" v-model="celular" name="user_celular" id="user_celular">

        <div class="row">
            <div class="col-md-12">
                <p class="title-form">
                    Por favor, completa tus datos para poder atender tu requerimiento.
                </p>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <input type="email" name="email" v-model="fields.email" required class="form-control" id="email"
                           aria-describedby="email" placeholder="Correo electrónico">
                    <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
                </div>
            </div>

            <div class="col-md-6  pr-0">
                <div class="form-group">
                    <input type="text" required class="form-control" v-model="fields.firstname" name="firstname"
                           id="firstname" placeholder="Nombre y Apellido"
                           aria-describedby="firstname">
                    <div v-if="errors && errors.firstname" class="text-danger">{{ errors.firstname[0] }}</div>

                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" v-model="fields.telefono" placeholder="N° Whatsapp / Celular" class="form-control" name="telefono"
                           id="telefono"
                           aria-describedby="telefono">

                    <div v-if="errors && errors.telefono" class="text-danger">{{ errors.telefono[0] }}</div>

                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <textarea class="form-control" placeholder="Hola, estoy interesad@ en este inmueble y deseo que me contacten.
                       " v-model="fields.mensaje" name="mensaje" id="mensaje" cols="20"
                              rows="3">
                                    </textarea>
                    <div v-if="errors && errors.mensaje" class="text-danger">{{ errors.mensaje[0] }}</div>

                </div>
            </div>
            <div class="col-md-12 mt-2">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <div class="message">
                            <div class="form-group">
                                <input type="radio" id="rd1" name="otros" v-model="fields.otros"
                                       value="Contactarme a través de llamada" >
                                <label for="rd1">Contactarme a través de llamada</label>
                            </div>
                            <div class="form-group">
                                <input type="radio" id="rd2" name="otros" v-model="fields.otros"
                                       value="Contactarme a través de Whatsapp">
                                <label for="rd2">Contactarme a través de Whatsapp</label>
                            </div>
                            <div class="form-group">
                                <input type="radio" id="rd3" name="otros" v-model="fields.otros"
                                       value="Autorizo que utilicen mis datos para contactarme">
                                <label for="rd3">Autorizo que utilicen mis datos para
                                    contactarme</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="accion">
                            <button type="submit" id="btnMessageInmueble" class="btn form-btn">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </form>

</template>

<script>
    export default {
        props: {
            inmueble: Number,
            user: Number,
            celular: String
        },
        data() {
            return {
                fields: {
                    firstname: null,
                    telefono: null,
                    email: null,
                    mensaje: null,
                    otros: 'Contactarme a través de llamada',
                    inmueble_id: this.inmueble,
                    user_id: this.user,
                    user_celular: this.celular,
                },
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
                    //vm.fields = {}; //Clear input fields.
                    vm.loaded = false;
                    vm.success = true;
                    vm.post = response.data.message;
                    this.$notify({
                        title: 'Mensaje enviado',
                        message: 'Gracias por contáctarnos',
                        type: 'success'
                    });
                    $('#inmueblecontactar').modal('hide');
                    location.reload();
                 /*   this.$confirm('Desea enviarle el  mensaje por WhatshApp?', 'Mensaje', {
                        confirmButtonText: 'Enviar',
                        cancelButtonText: 'Cancelar',
                        type: 'success'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: 'Mensaje enviado'
                        });

                        location.target = "_blank";
                        location.href = response.data.redirect;

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: 'No se envío el mensaje'
                        });

                        $('#inmueblecontactar').modal('hide');

                    });*/


                }).catch(error => {
                    vm.loaded = false;
                    this.$notify({
                        title: 'Algo salio mal',
                        message: error.response.data.errors.email[0],
                        type: 'error'
                    });
                    vm.loaded = false;
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
