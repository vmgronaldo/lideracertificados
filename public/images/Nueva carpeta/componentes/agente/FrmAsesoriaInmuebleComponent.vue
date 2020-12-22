<template>


    <form v-loading="loaded" @submit.prevent="submit" autocomplete="off" class="formSubmit">
        <div class="row main-form">
            <div class="col-md-6 first-column">

                <p class="title"><span>1.</span> Selecciona o coméntanos el tipo de asesoría que necesitas.</p>

                <div class="message message--legal">
                    <div class="form-group">
                        <input type="radio" id="rdd1" v-model="fields.asunto" name="asunto"
                               value="Saneamiento de inmuebles" checked="">
                        <label for="rdd1"><strong>Saneamiento</strong>
                            de inmuebles
                            para la VENTA</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="rdd2"  v-model="fields.asunto" name="asunto"
                               value="Valorización de inmuebles">
                        <label for="rdd2"><strong>Valorizamos</strong>
                            su inmueble</label>
                    </div>


                </div>

                <div class="form-group mt-3 text-center">
                    <textarea style="    text-align: left;
    padding-left: 1rem;" name="" id="" cols="30" rows="4" v-model="fields.mensaje" placeholder="Otro tema:"></textarea>
                </div>

            </div>
            <div class="col-md-6 second-column">
                <div class="datos">
                    <p class="title"><span>2.</span>Por favor, déjanos tus datos para poder
                        atender tu requerimiento</p>
                    <input type="hidden" v-model="user" name="user_id" id="user_id">

                    <div class="customer">
                        <input placeholder="Nombre y Apellido" v-model="fields.firstname" type="text"
                               class="form-control"
                               name="firstname" id="firstname">
                        <div v-if="errors && errors.firstname" class="text-danger text-center">{{ errors.firstname[0]
                            }}
                        </div>

                        <input placeholder="Email" type="email" class="form-control"
                               name="email" id="email" v-model="fields.email">
                        <div v-if="errors && errors.email" class="text-danger text-center">{{ errors.email[0] }}</div>
                        <div class="phone">
                            <i class="fa fa-whatsapp"></i>
                            <input placeholder="N° Whatsapp / Celular" type="text"
                                   class="form-control" name="telefono" id="telefono" v-model="fields.telefono">
                        </div>
                        <div v-if="errors && errors.telefono" class="text-danger text-center">{{ errors.telefono[0] }}
                        </div>


                    </div>

                </div>

                <div class="message">
                    <div class="form-group">
                        <input type="radio" id="rd1" name="message" v-model="fields.otros"
                               value="Contactarme a través de llamada" >
                        <label for="rd1">Contactarme a través de llamada</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="rd2" name="message" v-model="fields.otros"
                               value="Contactarme a través de Whatsapp">
                        <label for="rd2">Contactarme a través de Whatsapp</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="rd3" name="message" v-model="fields.otros"
                               value="Autorizo que utilicen mis datos para contactarme">
                        <label for="rd3">Autorizo que utilicen mis datos para
                            contactarme</label>
                    </div>
                </div>

                <div class="submit-form text-center">
                    <button class="btn btn-danger" type="submit" id="btn-enviar-one">Enviar
                    </button>
                </div>
            </div>
        </div>
    </form>

</template>

<script>
    export default {
        props: {
            user: Number,
        },
        data() {
            return {

                    fields: {
                        firstname: null,
                        telefono: null,
                        email: null,
                        mensaje: null,
                        asunto: 'Saneamiento de inmuebles',
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
                    vm.fields = {}; //Clear input fields.
                    vm.loaded = false;
                    vm.success = true;
                    vm.post = response.data.message;
                    this.$notify({
                        title: 'Solicitud de pedido',
                        message: 'Registrado correctamente!',
                        type: 'success'
                    });

                    $('#frmAsesoriaInmueble').modal('hide');
                    location.reload();
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


